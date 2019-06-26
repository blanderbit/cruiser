<template>
    <div class="search">
        <app-left-aside></app-left-aside>
        <div class="search-container">
            <div class="search-result-title">
                Search result for:
                <span class="search-result-title-number">{{text}}</span>
            </div>
            <div class="select-result-simple">
                <div class="styled-input-single d-flex align-items-center">
                    <input type="checkbox" id="simple" name="fieldset-1" v-model="simple"/>
                    <label for="simple">Show simple results</label>
                </div>
            </div>
            <div class="container-result">
                <div class="result-background"></div>
                <div class="result-table">
                    <div class="result-table-header">
                        <app-table :type="'header'"></app-table>
                    </div>
                    <div class="result-table-header result-table-main-result">
                        <app-table
                             tyle="margin-bottom: 32px"
                             v-for="(item, index) in data"
                             :key="item.part_number + index"
                             :item="item">
                        </app-table>
                    </div>
                    <!--<div class="result-table-result-superseded">-->
                        <!--<div class="search-result-title search-result-title-number title">SUPERSEDED</div>-->
                        <!--<app-table :background="'#FBEEE6'" style="margin-bottom: 15px"></app-table>-->
                        <!--<app-table :background="'#FBEEE6'" style="margin-bottom: 15px"></app-table>-->
                        <!--<app-table :background="'#FBEEE6'"></app-table>-->
                    <!--</div>-->
                </div>
                <!--<div class="result-aftermarket">-->
                    <!--<div class="search-result-title search-result-title-number title">Aftermarket</div>-->
                    <!--<app-table :background="'#EAECEE'" style="margin-bottom: 15px"></app-table>-->
                    <!--<app-table :background="'#DDEBF6'" style="margin-bottom: 15px"></app-table>-->
                    <!--<app-table :background="'#EAECEE'" style="margin-bottom: 15px"></app-table>-->
                    <!--<app-table :background="'#DDEBF6'"></app-table>-->
                <!--</div>-->
            </div>
        </div>
        <app-right-aside style="align-self: flex-start;margin-top: 400px"></app-right-aside>
    </div>
</template>

<script>

    import leftAside from "../../common/mainElements/leftAside";
    import rightAside from "../../common/mainElements/rightAside";
    import table from "../../common/mainElements/table";
    import {mapGetters} from "vuex"
    import {Search} from "../../api/search";
    export default {
         async asyncData({store, query}){
             let data;
             try{
                 data = await Search.getSearchData(query && query.search);
                 data = data.body
             } catch (e) {
                data = []
             }
             return {data:data}
        },
        components: {
            'app-left-aside': leftAside,
            'app-right-aside': rightAside,
            'app-table': table,
        },
        data(){
            return {
                simple: false
            }
        },
        computed:{
            ...mapGetters({
                text:'search/get_search_text'
            })
        },
        watch:{
            text(){
                this.search()
            }
        },
        methods:{
             async search(){
                 let data;
                 try{
                     data = await Search.getSearchData(this.text);
                     data = data.body
                 } catch (e) {
                     data = []
                 }
                 this.data = data
             }
        }
    }
</script>

<style scoped lang="scss">
    .search {
        margin-top: 33px;
        width: 100%;
        display: flex;
        justify-content: space-between;
    }

    .search-container {
        max-width: 1175px;
        width: 1175px;
    }

    .search-result-title {
        font-family: Montserrat;
        font-size: 20px;
        letter-spacing: -0.1px;
        color: #32405B;
        margin: 0 30px;
        margin-bottom: 25px;
    }

    .search-result-title-number {
        font-weight: bold;
    }

    .select-result-simple {
        margin: 0 30px;
    }

    .styled-input-single {
        position: relative;
        padding: 0 0 7px 25px;
        text-align: left;
        margin-bottom: 23px;

        label {
            cursor: pointer;
            margin: 0;
            font-size: 14px;
            font-weight: 500;

            &:before,
            &:after {
                content: '';
                position: absolute;
                top: 65%;
                background: #ECF0F3;
                border-radius: 50%;
            }

            &:before {
                left: 0;
                border: 2px solid #BABABA;
                width: 10px;
                height: 10px;
                margin: -15px 0 0;
                background: #f7f7f7;
                box-shadow: 0 0 1px #4876D0;
            }

            &:after {
                left: 4px;
                width: 6px;
                top: 6px;
                height: 6px;

                opacity: 0;
                background: #CA4635;
                transform: translate3d(-40px, 0, 0) scale(0.5);
                transition: opacity 0.25s ease-in-out, transform 0.25s ease-in-out;
            }
        }

        input[type="radio"],
        input[type="checkbox"] {
            position: absolute;
            top: 0;
            left: -9999px;
            visibility: hidden;

            &:checked + label {
                &:before {
                }

                &:after {
                    transform: translate3d(0, 0, 0);
                    opacity: 1;
                }
            }
        }
    }

    .styled-input--square {
        label {
            margin: 0;

            &:before,
            &:after {
                border-radius: 0;
            }
        }
    }

    .styled-input--rounded {
        label {
            &:before {
                border-radius: 10px;
            }

            &:after {
                border-radius: 6px;
            }
        }
    }

    .styled-input--diamond {
        .styled-input-single {
            padding-left: 45px;
        }

        label {
            &:before,
            &:after {
                border-radius: 0;
            }

            &:before {
                transform: rotate(45deg);
            }
        }

        input[type="radio"],
        input[type="checkbox"] {

            &:checked + label {
                &:after {
                    transform: rotate(45deg);
                    opacity: 1;
                }
            }
        }
    }

    .select-result-simple {
        margin-bottom: 20px;
    }

    .container-result {
        /*position: relative;*/
        /*width: 100%*/
        padding-top: 30px;margin: 0 20px;

    }

    .result-background {
        position: absolute;
        width: 100%;
        height: 225px;
        background: #ECF0F3;
        left: 0;
        z-index: -1;
        /*top: 0;*/
        margin-top: -30px;
    }

    .result-table {
        padding: 15px;
        background: #FFFFFF;
        box-shadow: 0px 6px 21px rgba(0, 0, 0, 0.15);
        z-index: 5;
        margin-bottom: 40px;
    }

    .result-table-header {
        display: flex;
    }

    .result-table-header .normal {
        font-weight: normal;
        padding-left: 0;
    }

    .result-table-header .no-right-border {
        border-right: none;
    }

    .result-table-main-result {
        margin-top: 2px;
    }

    .result-table-main-result > div:first-child {
        padding: 0;
        width: 98px;
    }

    .result-aftermarket{
        margin: 0 20px;
        margin-bottom: 117px;
    }
    .title{
        text-transform: uppercase;
        font-size: 14px;
    }
</style>

