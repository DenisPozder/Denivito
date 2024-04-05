import axios from 'axios'

const Axios = axios.create({
    baseURL: "https://denivito-api.vercel.app/api"
})

export default Axios