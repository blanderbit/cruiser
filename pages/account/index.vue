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
                    @currentCardIndexUp="getIndexCard($event,'currentCardIndexUp')">
            </tab-component-account>
            <accordeont-account v-if="currentCardIndexUp == 0"></accordeont-account>
            <edit-data          v-if="currentCardIndexUp == 1"></edit-data>
            <cars               v-if="currentCardIndexUp == 2"></cars>
            <saved-search       v-if="currentCardIndexUp == 3"></saved-search>
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

    export default {
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
                currentCardIndexUp: 0
            }
        },
        methods: {
            getIndexCard(index, type) {
                this[type] = index
            }
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
</style>
