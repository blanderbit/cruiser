import {mapGetters} from 'vuex'
export default {
    name: 'tab-component',
    components: {},
    props: [],
    data() {
        return {
        }
    },
    computed:{
        newData(){
            return JSON.parse(JSON.stringify(this.$store.getters['auth/get_user']));
        }
    },
    mounted() {

    },
    methods: {
        setUser(event, data, type){
            data[type] = event.target.value;
            this.$store.dispatch('auth/actionValue',{
                name:'userData',
                data:data
            })
        },
        save(){}
    },
}
