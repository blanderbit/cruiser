import * as cookie from "cookie";

export class Token {
    self = null;
    constructor(data){
        this.self = data
    }

    setToken (data){
        let COOKIE = cookie.parse(document.cookie);
        !COOKIE['token'] && (COOKIE['token'] = data);
        Object
            .keys(COOKIE)
            .forEach(item =>  document.cookie = cookie.serialize(item, COOKIE[item]));
    }
    getToken (){
       try {
           return cookie.parse(document.cookie)['token']
       } catch (e){
           return this.self.getters['cookie/getToken']
       }
    }
    deleteToken(){
        const obj = cookie.parse(document.cookie);
        Object
            .keys(obj)
            .forEach(item => item == 'token' &&
                (document.cookie = cookie.serialize(item, obj[item])+'=;expires=Thu, 01 Jan 1970 00:00:00 GMT'));
    }
}
