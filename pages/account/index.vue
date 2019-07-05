<template>
    <div class="account">
        <app-left-aside></app-left-aside>
        <div class="container-account">
            <div class="link">
                <span>Home</span> /
                <span class="link-active">Account</span>
            </div>
            <tab-component-account
                    :tabs="tabs"
                    :propsCurrent="'currentCardIndexUp'"
                    :active="currentCardIndexUp"
                    @currentCardIndexUp="getIndexCard($event,'currentCardIndexUp')">
            </tab-component-account>
            <accordeont-account v-if="currentCardIndexUp == 0"></accordeont-account>
            <edit-data
                    v-if="currentCardIndexUp == 1">
            </edit-data>
            <cars v-if="currentCardIndexUp == 2"></cars>
            <saved-search v-if="currentCardIndexUp == 3"></saved-search>
            <tab-component-account
                    class="tabDown"
                    :tabs="tabs"
                    :active="currentCardIndexDown"
                    :propsCurrent="'currentCardIndexDown'"
                    @currentCardIndexDown="getIndexCard($event,'currentCardIndexDown')">
            </tab-component-account>
            <accordeont-account v-if="currentCardIndexDown == 0"></accordeont-account>
            <edit-data
                    v-if="currentCardIndexDown == 1">
            </edit-data>
            <cars               v-if="currentCardIndexDown == 2"></cars>
            <saved-search       v-if="currentCardIndexDown == 3"></saved-search>
            <div class="action" v-if="currentCardIndexDown == 1">
                <div class="pointer" @click="saveData()">SAVE</div>
                <div class="pointer">Cancel</div>
            </div>

        </div>
        <app-right-aside></app-right-aside>
    </div>
</template>

<script>
    import leftAside from "../../common/mainElements/leftAside";
    import rightAside from "../../common/mainElements/rightAside";
    import tabComponentAccount from "../../components/accounts/tabComponentAccount/index"
    import accordeon from "../../components/accounts/accordeon/index"
    import personalData from "../../components/accounts/personal-data/index"
    import {Token} from "../../helpers/token";
    import {CookieHelper} from "../../helpers/cookie";
    import {Auth} from "../../api/auth";
    import * as cookie from "cookie";

    export default {
        fetch({store,req}) {
            const isHeader = req && req.headers && req.headers.cookie;
            const token= store.getters['cookie/getToken'];
            console.log(token)
            const options = {
                store: store,
                req: req,
                get: 'token'
            };

            const getUserInServer = (token) => Auth.getUser(token)
                .then(res => {
                    store.dispatch('auth/actionValue', {
                        name: 'userData',
                        data: res.body
                    });
                    return true
                })
                .catch(res => console.log(res));
            if (!isHeader && token) return getUserInServer(token);
            return CookieHelper.setCookieDataInStore(isHeader, options, getUserInServer)
                .then(res => console.log(res))
        },

        components: {
            'app-left-aside': leftAside,
            'app-right-aside': rightAside,
            'tab-component-account': tabComponentAccount,
            'accordeont-account': accordeon,
            'edit-data': personalData,
            'cars': accordeon,
            'saved-search': accordeon,
        },
        name: "index.vue",
        data() {
            return {
                tabs: ['ORDER HISTORY', 'PERSONAL', 'CARS', 'SAVED SEARCHES'],
                currentCardIndexUp: 0,
                currentCardIndexDown: 1,
                TOKEN: new Token(this.$store)
            }
        },
        mounted() {
            document.body.addEventListener('mouseover', () => this.isAutorize())
        },
        methods: {
            getIndexCard(index, type) {
                this[type] = index
            },
            isAutorize() {
                !this.TOKEN.getToken() && this.$router.push('/')
            },
            saveData(){
                const token = cookie.parse(document.cookie)['token'];
                Auth.saveUser(this.$store.getters['auth/get_user'],token )

            }
        },
        destroyed() {
            document.body.removeEventListener('mousemove', () => this.isAutorize())
        }
    }
</script>

<style scoped>
    .account {
        display: flex;
        justify-content: space-between;
        width: 100%;
    }

    .container-account {
        width: 1100px;
    }

    .action {
        width: 100%;
        display: flex;
        justify-content: flex-end;
    }

    .action div {
        width: 124px;
        height: 40px;
        max-width: 124px;
        max-height: 40px;
        font-weight: bold;
        font-size: 13px;
        line-height: 20px;
        display: flex;
        align-items: center;
        justify-content: center;
        text-transform: uppercase;
        color: #FFFFFF;
    }

    .action div:last-child {
        margin-left: 22px;
        background: #FFFFFF;
        border: 1px solid #32405B;
        color: #32405B;
    }

    .action div:first-child {
        background: #32405B;
    }
    .tabDown{
        margin-top: 47px;
    }
</style>
