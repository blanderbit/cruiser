import Vue from 'vue'

export class Products {
    static getAllProducts(page = 1) {
        console.log(page)
        return Vue.http.get(`api/part?page=${page}`)
    }
    static getRandomParts(){
        return Vue.http.get(`api/rand-parts`)
    }
}
