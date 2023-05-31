import axios from "axios";
import { BASE_URL } from "./url";
const USER_URL = `${BASE_URL}/user`

// get user
export const loginUserApi = async (id, email) => axios.get(`${USER_URL}/${id}`);

export const signUpUserApi = async (user) => axios.post(`${USER_URL}/`, { ...user });

export const logoutUserApi = async (id) => axios.post(`${USER_URL}/logout`, { id });