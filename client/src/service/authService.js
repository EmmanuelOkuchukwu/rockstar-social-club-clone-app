import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL;

function onLogin(formData) {
    return axios.post(`${API_URL}/api/auth/login`, formData, {
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then((response) => {
            if(response.data.token) {
               localStorage.setItem('user', JSON.stringify(response.data));
            }
            return response.data;
        })
}

function onLogout(){
    localStorage.clear();
}

function getUserInfo() {
    return JSON.parse(localStorage.getItem('user'));
}

export const AuthService = {
    onLogin,
    onLogout,
    getUserInfo
}
