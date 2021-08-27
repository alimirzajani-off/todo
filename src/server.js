import axios from 'axios'

const instance =  axios.create({
    // baseURL:'https://todo-319907-default-rtdb.firebaseio.com/'
    baseURL: 'https://api.mytodo.ir/api/',
    headers: {
        "accept": "application/json",
        "Content-Type": "application/json-patch+json",
        "Authoriziton": `Bearer ${localStorage.getItem("token")}`
    }
})



instance.interceptors.request.use(function (config) {
    const token = localStorage.getItem("token");
    config.headers.Authorization =  token;
    return config;
});

export default instance;