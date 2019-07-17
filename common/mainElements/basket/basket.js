import {Basket} from "../../../helpers/basket";
import {Token} from "../../../helpers/token";

export default {
    name: 'basket',
    components: {},
    props: [],
    data() {
        return {
            data: [],
            total: 0,
            BASKET: new Basket(this.$store),
            TOKEN: new Token(this.$store)
        }
    },
    created() {
        this.getThings()
    },
    methods: {

        getThings() {
            this.total = 0;
            this.data = this.getLocalStorageThings() || [];
            this.data.forEach(item => {
                if(item.basket && item.basket.prices && item.basket.qty) {
                    this.total += Number(item.basket.prices) * (Number(item.basket.qty))
                }
            });
            this.total = this.total.toFixed(2)
        },

        toggleQty(data, operation) {

            if (!data.basket.active)    return this.toStore('error', 'Not available warehouse');
            if (!data.basket.available) return this.toStore('error', 'Not available parts');
            if (data.basket.qty == data.basket.available && operation == '+'){
                return this.toStore('error', 'Not available parts');
            }
            if (data.basket.qty == 0 && operation == '-'){
                return this.toStore('error', 'Qty cannot be less than 0');
            }
            let basketContainer = this.BASKET.getThingByIndex(data.basket.unique_hashes);
            const basketItemIndex = this.getLocalStorageFindIndexThings(data.basket.unique_hashes);
            data.basket.qty = eval(`${data.basket.qty} ${operation} 1`);
            basketContainer&& basketContainer.basket && (basketContainer.basket.qty = data.basket.qty);
            if(basketContainer && basketItemIndex > -1){
                this.BASKET.changeItemInBasketByIndex(basketItemIndex, basketContainer);
                this.toStore('info', 'Successfully update basket');
            }
            this.getThings()
        },

        getLocalStorageFindIndexThings (id) {
            return this.BASKET.getIndexThing(id)
        },

        toStore(type, mes) {
            this.$store.commit('error/setValue', {
                name: 'data',
                data: {type: type, text: mes, active: true}
            });
        },

        getLocalStorageThings () {
            return this.BASKET.getAllThing() || this.$store.getters['cookie/getAllThing']
        },

        deleteThingsInBasket(index) {
            this.BASKET.deleteThing(index);
            this.getThings();
            this.$store.commit('error/setValue', {
                name: 'data',
                data: {type: 'red', text: 'Successfully removed from the basket', active: true}
            });
            this.$emit('refresh', true)
        },


        toRouter(data) {
            this.$router.push(`/products/${data.url}`)
        }

    }
}
