export default {
    name: 'tab-component',
    components: {},
    props: ['tabs', 'propsCurrent', 'width', 'default'],
    data() {
        return {
            active: 0
        }
    },
    computed: {},
    created() {
        this.default && (this.active = this.default)
    },
    methods: {
        activeTab(index){
            this.active = index;
            this.$emit(this.propsCurrent, index)
        }
    }
}
