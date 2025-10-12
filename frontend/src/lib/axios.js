import axios from "axios"

const BASE_URL = import.meta.env.MODE === "development" ? "http://localhost:3001/api":"/api"; //during development we don't have a url already and in prod we do so we just add /api at the end
const api = axios.create({
    baseURL: BASE_URL
})
export default api