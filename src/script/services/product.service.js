import axios from 'axios';

export const productService = {
    getAll,
    getById,
    add,
    addImage,
    update,
    delete: _delete
};

let baseUri = "https://shamals-jsonsever.herokuapp.com/products";
let cloudImageUri = 'https://api.cloudinary.com/v1_1/shammisgallery';
//http://localhost:4000/

function getAll() {
    return axios.get(`${baseUri}`)
        .then(res => res.data)
        .catch(err => Promise.reject(err.message));
}

function getById(id) {
    return axios.get(`${baseUri}?id=${id}`)
        .then(res => res.data)
        .catch(err => Promise.reject(err.message));
}

function add(product) {

    return axios.post(`${baseUri}`, product)
        .then(resp => resp.data)
        .catch(err => Promise.reject(err.message));
}
function addImage(image){
    let formData = new FormData();
        formData.append("file", image);
        formData.append("upload_preset", 'pro_inven');
        return axios.post(`${cloudImageUri}/image/upload/`, formData)
        .then(resp => resp.data)
        .catch(err => Promise.reject(err.message));
}

function update(product) {
    return axios.put(`${baseUri}/${product.id}`, product)
        .then(res => res.data)
        .catch(err => Promise.reject(err.message));
}
/* function addNoOfViews(id, noOfViews) {
    return axios.put(`${baseUri}/${id}`, product)
    .then(res => res.data)
    .catch(err => Promise.reject(err.message));
} */
// prefixed function name with underscore because delete is a reserved word in javascript
function _delete(id) {
    return axios.delete(`${baseUri}/${id}`)
        .then(res => res.data)
        .catch(err => Promise.reject(err.message));
}

