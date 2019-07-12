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


   static staticgetCareer(){
        const fromAddress = {
            'object_purpose' : 'PURCHASE',
            'name' : 'Shawn Ippotle',
            'company' : 'Shippo',
            'street1' : '215 Clayton St.',
            'city' :  'San Francisco',
            'state' : 'CA',
            'zip' : '94117',
            'country' : 'US',
            'phone'  :  '+1 555 341 9393',
            'email' :  'shippotle@goshippo.com'
        };
        const toAddress = {
            'object_purpose': 'PURCHASE',
            'name': 'Mr Hippo"',
            'company': '',
            'street1': 'Broadway 1',
            'street2': '',
            'city': 'New York',
            'state': 'NY',
            'zip': '10007',
            'country': 'US',
            'phone': '+1 555 341 9393',
            'email': 'mrhippo@goshippo.com'
        };
        const parcel = {
            'length': '5',
            'width': '5',
            'height': '5',
            'distance_unit': 'in',
            'weight': '2',
            'mass_unit':'lb',
        }
       return Vue.http.post(`api/shipping-rates`, {
           fromAddress,
           toAddress,
           parcel
       })

    }
}
