<template>
    <div>
        <!--<v-app>-->
            <v-snackbar
                    v-model="snackActive"
                    :right="right"
                    :top="true"
                    :timeout="timeout">
                <div style="display: flex; justify-content: space-between; width: 100%">
                    <div style="padding: 14px 24px;">
                        {{ snack.text }}
                    </div>
                    <div class="infoToast" :class="snack.type || 'info'">

                    </div>
                </div>
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

<style>
    .infoToast{
        width: 56px;
        height: 56px;
        background-position: center;
        background-repeat: no-repeat;
    }
    .info{
        background-color: #32405B;
        background-image: url("./../../../assets/ok.png");
    }
    .error{
        background-color: #CA4635;
        background-image: url("./../../../assets/err.png");
    }
</style>
