import axios from "axios";

const url = "http://localhost:3000/trending"

const trending = (type) => {
    const request = axios.get(`${url}/${type}`)
    return request.then(response => response.data)
}

export default {trending}