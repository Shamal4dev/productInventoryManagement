import axios from 'axios';

export const productService = {
    getAll,
    getById,
    update,
    delete: _delete
};

let baseUri = "https://shamals-jsonsever.herokuapp.com/products";
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


function update(product) {
    return axios.put(`${baseUri}/${product.id}, ${product}`)
        .then(res => res.data)
        .catch(err => Promise.reject(err.message));
}

// prefixed function name with underscore because delete is a reserved word in javascript
function _delete(id) {
    return axios.delete(`${baseUri}/${id}`)
        .then(res => res.data)
        .catch(err => Promise.reject(err.message));
}

