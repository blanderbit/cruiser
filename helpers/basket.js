export class Basket {

    static addThing(item){
        let all_data = this.getAllThing('basket-data');
        all_data.push(item);
        return this.setAllData(all_data)
    }

    static getAllThing(){
        try {
            return JSON.parse(localStorage.getItem('basket-data')) || []
        } catch (e){
            return []
        }
    }

    static deleteThing(index){
        let all_data = this.getAllThing('basket-data');
        all_data.splice(index, 1);
        return this.setAllData(all_data)
    }

    static getIndexThing(id){
        let all_data = this.getAllThing('basket-data');
        let indexReturn = -1;
        all_data.find((item, index) => {
            const search = item && item.basket && item.basket.unique_hashes == id;
            search && (indexReturn = index);
            return search
        });
        return indexReturn
    }

    static setAllData(all_data){
        localStorage.setItem(
            'basket-data',
            JSON.stringify(all_data)
        )
    }

    static getThingByIndex(id){
        const index = this.getIndexThing(id);
        return this.getAllThing() && index > -1? this.getAllThing()[index] : null
    }

    static changeItemInBasketByIndex(index, item){
        let data = this.getAllThing();
        data && data[index] ? data.splice(index, 1, item) : null;
        this.setAllData(data)
    }

}
