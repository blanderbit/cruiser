import {Token} from "../../../helpers/token";

export default {

    name: 'auth-small-popub',

    components: {},

    props: ['openPopub'],

    data() {
        return {
            TOKEN: new Token(this.$store),
            isAutorize: null,
        }
    },

    computed: {

    },

    mounted() {
        this.isAutorize = this.isAutorizes()
    },

    methods: {

        toStore(data, type) {
            this.$store.dispatch('auth/actionValue', {
                name: type,
                data: data
            });
            this.$emit('closeSmallPopub', false);
        },

        toAccount(){
            this.isAutorize && this.$router.push('/account')
        },

        isAutorizes(){
            try {
                return this.TOKEN.getToken()
            } catch (e) {
                return null
            }
        },

        logout(){
            this.$store.dispatch('cookie/action_cookie',{
                name: 'token',
                data: ''
            });
            this.TOKEN.deleteToken();
            this.$emit('closeSmallPopub', false);
            this.$store.dispatch('auth/actionValue',{
                name:'userData',
                data:{}
            });
            this.$router.push('/');
        }
    },

    watch:{
        openPopub(){
            this.isAutorize = this.isAutorizes()
        }
    }

}
