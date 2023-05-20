import axios from "axios";
import User from "../model/User";
import { BASE_URL } from "./url";
const USER_URL = `${BASE_URL}/user`

// get user
export const loginUserApi = async (id: number, email: string) => axios.get(`${USER_URL}/${id}`);

export const signUpUserApi = async (user: User) => axios.post(`${USER_URL}/`, { ...user });

export const logoutUserApi = async (id: number) => axios.post(`${USER_URL}/logout`, { id });