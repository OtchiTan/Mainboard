import axios from "axios";

const AxiosClient = axios.create({
    baseURL:'http://localhost:8000/'
})

export default AxiosClient