export class Basket {
    static addThing(item){
        return localStorage.setItem(
            'basket-data',
            JSON.stringify(JSON.parse(this.getAllThing('basket-data')).push(item))
        )
    }
    static getAllThing(){
        return JSON.parse(localStorage.getItem('basket-data'))
    }
}
