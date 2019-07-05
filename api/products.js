import Vue from 'vue'

export class Products {
    static getAllProducts(page = 1) {
        return Vue.http.get(`api/part?page=${page}`)
    }
}
