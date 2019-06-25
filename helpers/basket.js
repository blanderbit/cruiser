export class Basket {
    static addThing(item){
        let all_data = this.getAllThing('basket-data');
        if(!all_data)  all_data = [];
        all_data.push(item);
        return localStorage.setItem(
            'basket-data',
            JSON.stringify(all_data)
        )
    }
    static getAllThing(){
        try {
            return JSON.parse(localStorage.getItem('basket-data'))
        } catch (e){
            return []
        }
    }
}
