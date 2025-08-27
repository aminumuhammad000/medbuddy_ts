import axios from './axios';

export const login = (data: any) => axios.post('/login', data);
export const register = (data: any) => axios.post('/register', data);