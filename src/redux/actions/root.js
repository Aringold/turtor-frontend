import axios from "axios"
import config from "../../config/config"

export const Axios = axios.create({
    baseURL: config.base_url,
    timeout: 15000,
    headers: {
        "Content-Type": "application/json",
        'authorization': localStorage.getItem(config.token)
    },
});