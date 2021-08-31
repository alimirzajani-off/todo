import http from './server'

class DataService {
    getAll(){
        return http.get("/TodoItems")
    }
    get(id){
        return http.get(`/TodoItems/${id}`)
    }
    create(data){
        return http.post(`/TodoItems`,data)
    }
    login(data){
        return http.post(`/Accounts/login`,data)
    }
    logout(){
        return http.get(`/Accounts/logout`)
    }
    delete(id){
        return http.delete(`/TodoItems/${id}`)
    }
    update(id,data){
        return http.put(`/TodoItems/${id}`,data)
    }
    updatePatch(id,data){
        return http.patch(`/TodoItems/${id}/true`,data)
    }
    upload(id,data){
        return http.post(`/TodoItems/${id}`,data)

    }
}

export default new DataService()