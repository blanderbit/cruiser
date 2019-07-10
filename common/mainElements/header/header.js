import basket from './../basket/index'
import authPopub from './../authSmallPopub/index'
import {Basket} from "../../../helpers/basket";
import {mapGetters} from "vuex";
import {Token} from "../../../helpers/token";
import * as cookie from "cookie";
export default {
    name: 'app-header',
    components: {
        basket: basket,
        "app-auth-popub": authPopub,
    },
    props: ['isBasketOpen'],
    data() {
        return {
            menu_page: [
                {name:'PRODUCTS', path:'products'},
                {name:'ABOUT US', path:'products'},
                {name:'Number', path:'products'},
                {name:'FAQ', path:'products'},
                {name:'CUSTOMER’S PROJECTS', path:'products'},
                {name:'POLICIES', path:'products'},
                {name:'WARRANTY', path:'products'},
                {name:'NEWS', path:'products'},
                {name:'CONTACT US', path:'products'},
                {name:'BRANDS', path:'products'}
            ],
            isMenu: false,
            isBeforeMenu: false,
            isPaddingMenu: false,
            searchText: '',
            countData: 0,
            activeRefresh: false,
            openPopub: false,
            BASKET: new Basket(this.$store),
            TOKEN: new Token(this.$store),
        }
    },
    created() {
        this.count = this.getCountBasket()
    },
    computed: {
        count: {
            get() {
                return this.countData
            },
            set() {
                this.countData = this.getCountBasket()
            }
        },
        ...mapGetters({
            snackbar: 'error/get_data_error_or_message'
        }),
    },
    watch: {
        'snackbar'() {
            this.countData = this.getCountBasket()
        },
        '$route'(){
            this.$emit('getActiveBasket', false)
        }
    },
    methods: {

        toggleBasket(flag) {
            flag && this.isBasketOpen && this.$emit('getActiveBasket', !this.isBasketOpen);
            if (flag) return;
            this.$emit('getActiveBasket', !this.isBasketOpen)
        },

        changeValueSearch() {
            this.$store.commit('search/setValue', {
                name: 'searchText',
                data: this.searchText
            });
            this.$router.history.current.name !== 'search' && this.$router.push(`/search?search=${this.searchText}`)
        },

        getCountBasket() {
            const things = this.BASKET.getAllThing() || this.$store.getters['cookie/getAllThing'] || null;
            return things ? things.length : 0
        },

        refreshDataInBasket(){
            this.countData = this.getCountBasket();
        },

        closeSmall (event){
            this.openPopub = 1;
        }
    }
}
