export default {
    name: 'app-header',
    components: {},
    props: [],
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
    mounted() {

    },
    methods: {

    }
}
