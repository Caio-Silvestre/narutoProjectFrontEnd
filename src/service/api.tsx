import axios from "axios";

export const api = axios.create({
    baseURL: 'https://naruto-api.fly.dev/api/v1/'
})