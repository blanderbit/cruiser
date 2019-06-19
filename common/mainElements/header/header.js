import basket from './../basket/index'
export default {
    name: 'app-header',
    components: {
        basket:basket
    },
    props: ['isBasketOpen'],
    data() {
        return {
            menu_page: [
                'PRODUCTS',
                'ABOUT US',
                'Number',
                'FAQ',
                'CUSTOMER’S PROJECTS',
                'POLICIES',
                'WARRANTY',
                'NEWS',
                'CONTACT US',
                'BRANDS'
            ],
            isMenu: false,
            isBeforeMenu:false,
            isPaddingMenu:false,
        }
    },
    computed: {
        count(){

        }
    },
    created(){
    },
    methods: {
        toggleBasket(flag) {
            if(flag && this.isBasketOpen) {
                this.$emit('getActiveBasket', !this.isBasketOpen)
            }
            if(flag) return
            this.$emit('getActiveBasket', !this.isBasketOpen)
        }
    }
}
