import basket from './../basket/index'
import authPopub from './../authSmallPopub/index'
import {Basket} from "../../../helpers/basket";
import {mapGetters} from "vuex";
import {Token} from "../../../helpers/token";
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
            isBeforeMenu: false,
            isPaddingMenu: false,
            searchText: '',
            countData: 0,
            activeRefresh: false,
            openPopub: false
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
            return Basket.getAllThing() ? Basket.getAllThing().length : 0
        },
        refreshDataInBasket(){
            this.countData = this.getCountBasket();
        },
        toAccount(){
            this.isAutorize && this.$router.push('/account')
        },
        isAutorize(){
            try {
                return localStorage.getItem('token')
            } catch (e) {
                return null
            }
        }
    }
}
