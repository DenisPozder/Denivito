import axios from 'axios'

const Axios = axios.create({
    baseURL: "https://denivito-api-wine.vercel.app/"
})

export default Axios