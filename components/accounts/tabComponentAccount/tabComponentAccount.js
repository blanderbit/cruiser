export default {
    name: 'tab-component',
    components: {},
    props: ['tabs', 'propsCurrent', 'width', 'active'],
    data() {
        return {

        }
    },
    computed: {},
    mounted() {

    },
    methods: {
        activeTab(index){
            this.$emit(this.propsCurrent, index)
        }
    }
}
