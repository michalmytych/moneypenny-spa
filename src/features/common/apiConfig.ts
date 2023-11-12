import axios from "axios";

export const api = axios.create({
    baseURL: 'http://localhost:8000',  // @todo: move to .env
    withCredentials: true,
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    }
});

