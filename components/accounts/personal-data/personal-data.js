export default {
    name: 'tab-component',
    components: {},
    props: ['tabs', 'propsCurrent', 'width'],
    data() {
        return {
            active: 0
        }
    },
    computed: {},
    mounted() {

    },
    methods: {
        activeTab(index){
            this.active = index;
            this.$emit(this.propsCurrent, index)
        }
    }
}
