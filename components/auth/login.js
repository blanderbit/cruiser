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
            dataLogin: {},
            dataRegister: {},
            errorLogin: {},
            errorRegister: {},
            checked: false
        }
    },
    computed: {

    },
    mounted() {

    },
    methods: {
        login() {
            const error = this.errorLogin;
            error.password = Validator.set(
                this.dataLogin.password,
                ['required'],
                'This is a required field'
            );
            error.password = this.dataLogin.password.length < 6 ? {
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
                        Token.setToken(res.body.data.token);
                        this.$store.dispatch('auth/actionValue', {
                            name: 'loginModal',
                            data: false
                        });
                        this.$router.push(`/account?user=${res.body.data.token}`)
                    }
                })

        },
        toRegister(){
            this.clearData();
            this.$store.dispatch('auth/actionValue', {
                name: 'loginModal',
                data: false
            });
            this.$store.dispatch('auth/actionValue', {
                name: 'registerModal',
                data: true
            });
        },
        toLogin(){
            this.clearData();
            this.$store.dispatch('auth/actionValue', {
                name: 'loginModal',
                data: true
            });
            this.$store.dispatch('auth/actionValue', {
                name: 'registerModal',
                data: false
            });
        },
        register(){
            const error = this.errorRegister;
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
                !error.password.error ||
                !error.c_password.error ||
                !error.first_name.errors ||
                !error.last_name.errors;
            error_boolean && Auth.authRegister(this.dataRegister).then(res => res.body.success && this.toLogin())
        },
        clearData() {
            this.dataLogin = {};
            this.dataRegister= {};
            this.errorLogin = {};
            this.errorRegister = {};
        }
    }
}