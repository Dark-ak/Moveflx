import axios from "axios"


const url = "http://localhost:3000/discover"

const movies = (type,genre) => {
    const request = axios.get(`${url}/${type}/${genre}`)
    return request.then(response => response.data)
}


export default { movies }