import Vue  from 'vue'
export class Auth {
    static authLogin(data){
        return Vue.http.post('api/login', data)
    }
    static authRegister(data){
        return Vue.http.post('api/register', data)
    }
}
