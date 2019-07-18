import Vue from 'vue'

export class Products {
    static getAllProducts(page = 1) {
        return Vue.http.get(`api/part?page=${page}`)
    }
    static getRandomParts(){
        return Vue.http.get(`api/rand-parts`)
    }
    static getAvailableProductsInBasket(array){
        return Vue.http.post(`api/refresh-shopping-cart`, {data:array})
    }


   static staticgetCareer(user, data){
       let packeges = JSON.parse(JSON.stringify(data));
       packeges = packeges.map(item => {
           return {
               'length': 1,
               'width': 1,
               'height': 1,
               'weight': Math.ceil(item.weight_physical),//item.weight_physical
           };
       });
       return Vue.http.post(`api/shipping-rates`, {
           user: user,
           packages: packeges
       })

    }
}
