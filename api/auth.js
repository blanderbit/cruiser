import Vue  from 'vue'
export class Auth {
    static authLogin(data){
        return Vue.http.post('api/auth', data)
    }
    static authRegister(data){
        return Vue.http.post('api/register', data)
    }
}
