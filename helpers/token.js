export class Token {
    static setToken (data){
        localStorage.setItem('token', data)
    }
    static getToken (){
       return localStorage.getItem('token')
    }
}
