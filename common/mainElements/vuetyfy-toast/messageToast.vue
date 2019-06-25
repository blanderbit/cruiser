<template>
    <div>
        <!--<v-app>-->
            <v-snackbar
                    v-model="snackActive"
                    :right="right"
                    :top="true"
                    :timeout="timeout"
                    :color="snack.type">
                {{ snack.text }}
                <v-btn color="black" @click="closeSnack">Close</v-btn>
            </v-snackbar>
        <!--</v-app>-->
    </div>
</template>

<script>
    // import VSnackbar  from 'vuetify'
    // import  VBtn from 'vuetify'

    import {mapGetters} from "vuex";

    export default {
        name: "messageToast",
        data () {
            return {
                y: 'top',
                x: null,
                mode: 'multi-line',
                right:true,
                top:true,
                timeout: 6000,
            }
        },
        methods:{
            closeSnack(){
                this.$store.commit('error/setValue', {
                    name: 'data',
                    data: {
                        type: 'message',
                        text: 'message',
                        active: !this.snackbar.active,
                    }
                });
             }
        },
        computed:{
            ...mapGetters({
                snackbar: 'error/get_data_error_or_message'
            }),
            snack() {
                return {...this.snackbar}
            },
            snackActive:{
                get() {
                    return this.snack.active
                },
                set (val) {
                    !val && this.$store.commit('error/setValue', {
                        name: 'data',
                        data: {type: 'message', text: 'message', active: val}
                    });
                }
            }
        }
    }
</script>

<style scoped>
</style>
