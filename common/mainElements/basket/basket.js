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
        getThings() {
            this.total = 0;
            this.data = this.getLocalStorageThings() || [];
            this.data.forEach(
                item => item.basket && item.basket.prices && (this.total += Number(item.basket.prices))
            );
            this.total = this.total.toFixed(2)
        },

        getLocalStorageThings: () => Basket.getAllThing(),

        deleteThingsInBasket(index) {
            Basket.deleteThing(index);
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
