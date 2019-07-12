<template>
    <section class="products">
        <div class="products-container">
            <div class="link">
                <span>Home</span> /
                <span class="link-active"> All products</span>
            </div>
            <div class="products-all">
                <div class="table-products table-products-header">
                    <div class="post post-1">
                        <div>Brand</div>
                    </div>
                    <div class="post post-2">
                        <div>Part number</div>
                    </div>
                    <div class="post post-3">
                        <div>Name</div>
                    </div>
                    <div class="post post-4">
                        <div>Price, USD</div>
                    </div>
                    <div class="post post-5">
                        <div>Availablity</div>
                    </div>
                    <div class="post post-6">
                        <div>Ship In, Days</div>
                    </div>
                    <div class="post post-7">
                        <div></div>
                    </div>
                </div>
                <div class="table-products table-products-items"
                     v-for="(item, index) in paginatedata.data"
                     :style="index%2 && 'background:#FFFFFF;'">
                    <div class="post post-1">
                        <div>{{item.brand_name}}</div>
                    </div>
                    <div class="post post-2">
                        <div class="item pointer"
                             @click="toOneProduct(item.brand_name, item.part_number)">
                            {{item.part_number}}
                        </div>
                    </div>
                    <div class="post post-3">
                        <div class="item">
                            {{item.description_english}}
                        </div>
                    </div>
                    <div class="post post-4">
                        <div class="item">${{item.price}}</div>
                    </div>
                    <div class="post post-5">
                        <div class="item">{{item.qty}}</div>
                    </div>
                    <div class="post post-6">
                        <div class="item">{{item.warehouse}}</div>
                    </div>
                    <div class="post post-7 all-center">
                        <div>
                            <div class="button-view pointer"
                                 @click="toOneProduct(item.brand_name, item.part_number)">
                                <span>View</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="container-paginate">
                <paginate
                        :page-count="paginatedata.last_page"
                        :click-handler="clickCallback"
                        :prev-text="'<'"
                        :page-range="5"
                        v-model="paginatedata.current_page"
                        :next-text="'>'"
                        :container-class="'paginate-container'">
                </paginate>
            </div>
        </div>
    </section>
</template>

<script>
    import {Products} from "../../api/products";
    import { base64encode } from 'nodejs-base64';
    import {CookieHelper} from "../../helpers/cookie";
    import {Auth} from "../../api/auth";
    if (process.client) {
        var Vue = require('vue');
        var Paginate = require('vuejs-paginate');
        Vue.component('paginate', Paginate);
    }
    export default {
        fetch({store,req}){
            const isHeader = req && req.headers && req.headers.cookie;
            const token= store.getters['cookie/getToken'];
            const options = {
                store: store,
                req: req,
                get: 'token'
            };

            const getUserInServer = (token) => Auth.getUser(token)
                .then(res => {
                    store.dispatch('auth/actionValue', {
                        name: 'userData',
                        data: res.body
                    });
                    return true
                })
                .catch(res => console.log(res));
            if (!isHeader && token) return getUserInServer(token);
            return CookieHelper.setCookieDataInStore(isHeader, options, getUserInServer)
                .then(res => console.log(res))
        },
        async asyncData(){
            return Products.getAllProducts().then(res => {
                return {paginatedata:res.body}
            })
        },
        components: {},
        data() {
            return {
                langs: ['JavaScript', 'PHP', 'HTML', 'CSS', 'Ruby', 'Python', 'Erlang'],
            }
        },
        computed: {},
        methods: {
            clickCallback(pageNum) {
                Products.getAllProducts(pageNum).then(res => (this.paginatedata = res.body, this.scrollTo('+')))
            },
            scrollTo:function () {
                let pix = window.pageYOffset;
                let steps = 50;
                requestAnimationFrame(to);
                function to(){
                    pix = pix - steps;
                    window.scrollTo(0,pix);
                    pix > 0 && requestAnimationFrame(to);
                }
            },
            toOneProduct(brand_name, part_number){
                const url = base64encode(JSON.stringify({
                    brand: brand_name,
                    part_number: part_number
                }));
                this.$router.push(`/products/${url}`)
            }
        }
    }
</script>

<style scoped>
    .products {
        width: 100%;
        display: flex;
        justify-content: center;
    }

    .products-container {
        width: 1100px;
    }

    .table-products-header {
        margin-bottom: 4px;
    }

    .table-products {
        display: grid;
        grid-template-columns: repeat(6, 1fr);
        background: #ECF0F3;
        font-weight: bold;
        font-size: 10px;
        line-height: 0px;
        letter-spacing: -0.0566328px;
        color: #32405B;
    }
    .table-products:hover{
        background: #e4e5e6!important;
    }
    .post {
        height: 30px;
        border-right: 1px solid #FFFFFF;
    }

    .post > div {
        padding: 15px 10px;
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
    }
    .table-products-items{
        margin-bottom: 1px;
    }
    .table-products-items .post {
        height: 40px;
    }

    .table-products-items .post > div {
        padding: 20px 10px;
    }

    .post > div.item {
        font-weight: normal;
        font-size: 12px;
    }

    .post-1 {
        width: 157px;
        max-width: 157px;
        grid-area: post-1;
        grid-column: 1;
    }

    .post-2 {
        width: 124px;
        max-width: 124px;
        grid-area: post-2;
        grid-column: 2
    }

    .post-3 {
        width: 470px;
        max-width: 479px;
        grid-area: post-3;
        grid-column: 3
    }

    .post-4 {
        width: 84px;
        max-width: 84px;
        grid-area: post-4;
        grid-column: 4
    }

    .post-5 {
        width: 82px;
        max-width: 82px;
        grid-area: post-5;
        grid-column: 5
    }

    .post-6 {
        width: 93px;
        max-width: 93px;
        grid-area: post-6;
        grid-column: 6
    }

    .post-7 {
        width: 85px;
        width: 85px;
        grid-area: post-7;
        grid-column: 7;
    }

    .button-view {
        background: #32405B;
        width: 61px;
        display: flex;
        padding: 0 !important;
        align-items: center;
        height: 22px;
        max-width: 61px;
        max-height: 22px;
        border-radius: 30px;
        color: white;
        background-image: url("./../../assets/search-view.png");
        background-repeat: no-repeat;
        background-position: 8px 6px;
    }

    .button-view span {
        margin-left: 23px;
        font-style: normal;
        font-weight: normal;
        font-size: 11px;
        line-height: 0px;
        letter-spacing: -0.055px;
        color: #FFFFFF;
    }

    .paginate-container {
        padding: 0;
        margin: 0;
        display: flex;
    }

    .paginate-container li{
        list-style: none;
        margin-right: 8px;
    }
    .paginate-container li:last-child{
        margin-right: 0;
    }
    .paginate-container li {
        background: rgba(255, 255, 255, 0.0001);
        border: 1px solid #D4D7DE;
        width: 40px;
        height: 40px;
    }

    .paginate-container li a {
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        color: #32405B;
        font-weight: normal;
        font-size: 13px;
        line-height: 20px;

    }

    .paginate-container li.active a {
        background: #32405B;
        font-weight: bold;
        color: #FFFFFF;
    }

    .paginate-container li.disabled a, .paginate-container li:first-child a, .paginate-container li:last-child a{
        font-weight: bold!important;
        color: #D4D7DE!important;
        font-size: 13px!important;
        line-height: 20px!important;
    }

    .paginate-container li.disabled:not(.paginate-container li:first-child, .paginate-container li:last-child){
        border: none;
    }
    .container-paginate{
        display: flex;
        width: 100%;
        justify-content: flex-end;
        margin-top: 23px;
        margin-bottom: 76px;
    }
</style>

