export default {
    name: 'tab-component',
    components: {},
    // props: ['items'],
    data() {
        return {
            active: false,
            items: [{},{},{},{}]
        }
    },
    computed: {},
    mounted() {

    },
    methods: {
        activeTab(index){
            this.items = this.items.map(item => {
                item.active = false;
                return item;
            });
            this.items[index].active = true;
        }
    }
}
