import Axios from "./Axios"

const Authorization:any = localStorage.getItem('token')
const http = new Axios({
    baseURL: import.meta.env.VITE_API_BASEURL,
    timeout: 100000,
    headers: {
        Authorization,
        'Content-Type':'application/x-www-form-urlencoded;charset=UTF-8'
    }
})

export { http }