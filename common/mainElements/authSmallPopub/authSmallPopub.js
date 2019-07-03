export default {
    name: 'auth-small-popub',
    components: {},
    props: [],
    data() {
        return {}
    },
    computed: {},
    mounted() {

    },
    methods: {
        toStore(data, type) {
            this.$store.dispatch('auth/actionValue', {
                name: type,
                data: data
            });
            this.$emit('closeSmallPopub', false)
        },
    }
}
