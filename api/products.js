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
        let packeges = JSON.parse(JSON.stringify(data))
        const parcel = {
            'length': '5',
            'width': '5',
            'height': '5',
            'distance_unit': 'in',
            'weight': '2',
            'mass_unit':'lb',
        };
       packeges = packeges.map(item => {
           return {
               'length': 1,
               'width': 1,
               'height': 1,
               'weight': item.basket.weight_physical,
           };
       });
       return Vue.http.post(`api/shipping-rates`, {
           user: user,
           packages: packeges
       })

    }
}
