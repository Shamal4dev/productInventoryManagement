import axios from 'axios';

export const userService = {
    login,
    logout,
    register,
    getAll,
    delete: _delete
};
let baseUri = "https://shamals-jsonsever.herokuapp.com/";
//http://localhost:4000/
function register(user) {
    return axios.get(`${baseUri}users?userName=${user.userName}`)
        .then(res => {
            if (res.data.length === 0) {
                return axios.post(`${baseUri}users`, user)
                    .then(resp => resp.data)
            }
            else{
                throw Error(`User name already exist`);
            }
        })
        .catch(err => Promise.reject(err.message));
}

function login(userName, password) {
    return axios.get(`${baseUri}users?userName=${userName}&password=${password}`)
        .then(res => {
            if (res.data.length > 0) {

                localStorage.setItem('user', JSON.stringify(res.data));
                return res.data;
            }
            else {
                throw Error('Incorrect username or password')
            }

        })
        .catch(err => Promise.reject(err.message));
}

function logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('user');
}

function getAll() {
    return axios.get(`${baseUri}users`)
        .then(res => res.data)
        .catch(err => Promise.reject(err.message));
}

/* function getById(id) {
    return axios.get(`${baseUri}users?userId=${id}`)
        .then(res => res.data)
        .catch(err => Promise.reject(err.message));
} */


/* function update(id, user) {
    return axios.put(`${baseUri}users/${id}, ${user}`)
        .then(res => res.data)
        .catch(err => Promise.reject(err.message));
} */

// prefixed function name with underscore because delete is a reserved word in javascript
function _delete(id) {
    return axios.delete(`${baseUri}users/${id}`)
        .then(res => res.data)
        .catch(err => Promise.reject(err.message));
}

