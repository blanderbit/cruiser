import {Basket} from "../../../helpers/basket";

export default {
    name: 'basket',
    components: {},
    props: [],
    data() {
        return {
            data: [],
            total: 0
        }
    },
    created() {
        this.getThings()
    },
    methods: {
        getThings(){
            this.data = this.getLocalStorageThings;
            this.data.forEach(
                item => item.basket && item.basket.prices && (this.total += Number(item.basket.prices))
            );
            this.total = this.total.toFixed(2)
        },
        getLocalStorageThings: () => Basket.getAllThing(),
        deleteThingsInBasket(){
            // Basket.getDeleteThing()
        }
    }
}
