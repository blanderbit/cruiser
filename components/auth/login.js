import Validator from "../../validator/validator";
import {Auth} from "../../api/auth";
import {Token} from "../../helpers/token";
// import VuePerfectScrollbar from 'vue-perfect-scrollbar'
export default {
    name: 'login',
    // components: { VuePerfectScrollbar},
    props: ['isLogin', 'isRegister'],
    data() {
        return {
            settings: {
                maxScrollbarLength: 60
            },
            dataLogin: {
                email:'yarik@gmail.com',
                password:'2363796z'
            },
            dataRegister: {},
            errorLogin: {},
            errorRegister: {},
            checked: false,
            TOKEN: new Token(this.$store)
        }
    },
    computed: {

    },
    mounted() {
        document.body.style.overflowY = 'hidden'
    },
    methods: {
        login() {
            const error = JSON.parse(JSON.stringify(this.errorLogin));
            error.password = Validator.set(
                this.dataLogin.password,
                ['required'],
                'This is a required field'
            );
            error.password = this.dataLogin.password && this.dataLogin.password.length < 6 ? {
                errors: true,
                message: {min: "Your password must be at least 6 characters long and must contain letters"}
            } : error.password;

            error.email = Validator.set(
                this.dataLogin.email,
                ['required'],
                'This is a required field'
            );
            error.email = !error.email.errors ? Validator.set(
                this.dataLogin.email, ['email'],
                'This is a required field'
            ) : error.email;
            let error_boolean = !error.email.errors || !error.password.errors;
            if(error_boolean) Auth.authLogin(this.dataLogin)
                .then(res => {
                    if(res.body.success) {
                        this.TOKEN.setToken(res.body.data.token);
                        this.$store.dispatch('auth/actionValue', {
                            name: 'loginModal',
                            data: false
                        });
                        this.$store.dispatch('cookie/action_cookie',{
                            name: 'token',
                            data: res.body.data.token
                        });
                        const name = this.$router.history.current.name;
                        if(name.indexOf('check-out') > -1 || name.indexOf('basket') > -1) {
                            return (window.location.href = `/${name}`)
                        }
                        this.$router.push(`/account`)
                    }
                });
            else {
                this.errorLogin = error
            }
        },
        toRegister(){
            this.clearData();
            this.toStore(false, 'loginModal');
            this.toStore(true, 'registerModal');
        },
        toLogin(){
            this.clearData();
            this.toStore(true, 'loginModal');
            this.toStore(false, 'registerModal');
        },
        toStore(data, type){
            this.$store.dispatch('auth/actionValue', {
                name: type,
                data: data
            });
        },
        register(){
            const error = JSON.parse(JSON.stringify(this.errorRegister));
            error.password = Validator.set(
                this.dataRegister.password,
                ['required'],
                'This is a required field'
            );error.c_password = Validator.set(
                this.dataRegister.c_password,
                ['required'],
                'This is a required field'
            );
            error.password = this.dataRegister.password && this.dataRegister.password.length < 6 ? {
                errors: true,
                message: {min: "Your password must be at least 6 characters long and must contain letters"}
            } : error.password;

            error.email = Validator.set(
                this.dataRegister.email,
                ['required'],
                'This is a required field'
            );
            error.email = !error.email.errors ? Validator.set(
                this.dataRegister.email, ['email'],
                'This is a required field'
            ) : error.email;

            error.first_name = Validator.set(
                this.dataRegister.first_name,
                ['required'],
                'This is a required field'
            );
            error.last_name = Validator.set(
                this.dataRegister.last_name,
                ['required'],
                'This is a required field'
            );
            let error_boolean = !error.email.errors ||
                !error.password.errors ||
                !error.c_password.errors ||
                !error.first_name.errors ||
                !error.last_name.errors;
            error_boolean ?
                Auth.authRegister(this.dataRegister).then(res => {
                    res.body.success && (this.storeMessage('info', 'Successfully register user'),this.toLogin())
                }) :
                this.errorRegister = new Object(error)
        },
        clearData() {
            this.dataLogin = {};
            this.dataRegister= {};
            this.errorLogin = {};
            this.errorRegister = {};
        },
        close(){
            this.clearData();
            this.toStore(false, 'loginModal');
            this.toStore(false, 'registerModal');
        },
        storeMessage(type, mes){
            this.$store.commit('error/setValue', {
                name: 'data',
                data: {type: type, text: mes, active: true}
            });
        }
    },
    destroyed(){
        document.body.style.overflowY = 'scroll'
    },

}
