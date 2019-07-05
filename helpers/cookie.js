import * as cookie from "cookie";

export class CookieHelper {
    static setCookieDataInStore(isHeader, params,  callback){
        let data ;
        if(isHeader) {
            data = cookie.parse(params.req.headers.cookie);
            const Token = data['token'];
            const basket = data['basket-data'];
            data['token'] && params.store.dispatch('cookie/action_cookie',{
                name: 'token',
                data: Token
            });
            data['basket-data'] && params.store.dispatch('cookie/action_cookie',{
                name: 'basket',
                data: basket
            });
        }

        return isHeader && callback ?
            params.get && data? callback(data[params.get]) : callback() :
            new Promise(resolve => resolve("No action"))
    }
}
