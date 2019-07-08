var cookie = require('cookie');
export class Basket {
    self = null;
    constructor(data){
        this.self = data
    }

    addThing(item){
        let all_data = this.getAllThing('basket-data');
        all_data.push(item);
        return this.setAllData(all_data)
    }

    getAllThing(){
        let DOC;
        try {
            DOC = document;
        } catch (e){
            return null;
        }
        return JSON.parse(cookie.parse(DOC && DOC.cookie || '')['basket-data'] || '[]')
    }

    deleteThing(index){
        let all_data = this.getAllThing();
        all_data.splice(index, 1);
        return this.setAllData(all_data)
    }

    getIndexThing(id){
        let all_data = this.getAllThing() || this.self.getters['cookie/getAllThing'];
        let indexReturn = -1;
        if(!all_data) return indexReturn
        all_data.find((item, index) => {
            const search = item && item.basket && item.basket.unique_hashes == id;
            search && (indexReturn = index);
            return search
        });
        return indexReturn
    }

    setAllData(all_data){
        document.cookie = cookie.serialize('basket-data', JSON.stringify(all_data));
    }

    getThingByIndex(id){
        const index = this.getIndexThing(id);
        const getAllThing = this.getAllThing() || this.self.getters['cookie/getAllThing'];
        return getAllThing && index > -1? getAllThing[index] : null
    }

    changeItemInBasketByIndex(index, item){
        let data = this.getAllThing() || this.self.getters['cookie/getAllThing'];
        data && data[index] ? data.splice(index, 1, item) : null;
        this.setAllData(data)
    }
}
