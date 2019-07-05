import * as cookie from "cookie";

export class Token {
    self = null;
    constructor(data){
        this.self = data
    }

    setToken (data){
        let COOKIE = cookie.parse(document.cookie);
        !COOKIE['token'] && (COOKIE['token'] = data);
        document.cookie = Object.keys(COOKIE).forEach(item =>  document.cookie = cookie.serialize(item, COOKIE[item]));
    }
    getToken (){
       try {
           return cookie.parse(document.cookie)['token']
       } catch (e){
           return this.self.getters['cookie/getToken']
       }
    }
}
