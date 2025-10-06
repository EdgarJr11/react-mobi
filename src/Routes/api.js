import axios from "axios"

const api = axios.create({
    baseURL: 'https://apiteste.mobieduca.me'
})


export default api