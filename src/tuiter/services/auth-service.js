import axios from "axios";
const SERVER_API_URL = process.env.REACT_APP_SERVER_API_URL;
const USERS_URL = `${SERVER_API_URL}/users`;


const api = axios.create({ withCredentials: true });

export const login = async ({ username, password }) => {
console.log("login auth service: ", username, password);
 const response = await api.post(`${USERS_URL}/login`, { username, password });
 response.status === 200 ? console.log("login auth service response: ", response.data) : console.log("login auth service ERROR");
 const user = response.data;
 return user;
};

export const logout = async () => {
 console.log("logout auth service");
 const response = await api.post(`${USERS_URL}/logout`);
 return response.data;
};

export const profile = async () => {
 console.log("profile auth service");
 const response = await api.post(`${USERS_URL}/profile`);
 console.log("profile auth service response: ", response);
 return response;
};

export const updateUser = async (user) => {
 console.log("updateUser auth service: ", user);
 const response = await api.put(`${USERS_URL}`, user);
 return response.data;
};

export const register = async ({ username, password }) => {
    const response = await api.post(`${USERS_URL}/register`, { username, password });
    return response.data;
 }
