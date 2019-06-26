import Vue  from 'vue'
export class Search {
    static getSearchData(number){
        return Vue.http.post('api/parts-search', {partNumber: number})
    }
    static getSearchItem(data){
        return Vue.http.post('api/part', data)
    }
}
