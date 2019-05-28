import axios from "axios/index"
const baseUrl = "http://localhost:3001/items"

const getAll = () => {
    const request = axios.get(baseUrl)
    return request.then(response => response.data)
}


export default {getAll}