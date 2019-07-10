<template>
    <section class="products">
        <div class="products-container">
            <div class="link">
                <span>Home</span> /
                <span class="link-active"> Cart</span>
            </div>
            <div class="products-all-header">
                <div @click="l()">Order summary</div>
            </div>
            <div class="products-all">
                <div class="table-products table-products-header">
                    <div class="post post-1">
                        <div>Picture</div>
                    </div>
                    <div class="post post-2">
                        <div>Brand</div>
                    </div>
                    <div class="post post-3">
                        <div>Name</div>
                    </div>
                    <div class="post post-4">
                        <div>Price</div>
                    </div>
                    <div class="post post-5">
                        <div>Quantity</div>
                    </div>
                    <div class="post post-6">
                        <div>Subtotal</div>
                    </div>
                </div>
                <div class="table-products table-products-items"
                     v-for="(item, index) in items" style="display: grid;">
                    <div class="post post-1">
                        <div>{{index + 1}}</div>
                    </div>
                    <div class="post post-2">
                        <div class="item pointer">
                            {{item.brand_name}}
                        </div>
                    </div>
                    <div class="post post-3">
                        <div class="item">
                            {{item.description_english}}
                        </div>
                    </div>
                    <div class="post post-4">
                        <div class="item">${{item.basket.prices}}</div>
                    </div>
                    <div class="post post-5" >
                        <div class="item item-qty">
                            <div class="all-center item-shop-basket-count pointer" @click="toggleQty(item, '-')">
                                -
                            </div>
                            <div  class="quantity">{{item.basket && item.basket.qty}}</div>
                            <div class="all-center item-shop-basket-count pointer" @click="toggleQty(item, '+')">
                                +
                            </div>
                        </div>
                    </div>
                    <div class="post post-6">
                        <div class="item">{{subtotal(item.basket && item.basket.unique_hashes)}}</div>
                    </div>
                </div>
            </div>
            <div class="products-all-header products-all-total">
                <div style="display: flex">
                    <div class="post-5" style="border-right: 2px solid white; width: 70px">{{getTotalQty}}pcs</div>
                    <div class="post-6" style="width: 82px;">${{getTotalPrice}}</div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    import {Products} from "../../api/products";

    import {CookieHelper} from "../../helpers/cookie";
    import {Basket} from "../../helpers/basket";

    export default {
        fetch({store,req}){
            const isHeader = req && req.headers && req.headers.cookie;

            const options = {
                store: store,
                req: req,
                get: 'token'
            };

            return CookieHelper.setCookieDataInStore(isHeader, options)
                .then(res => console.log(res))
        },
        components: {},
        data() {
            return {
                langs: ['JavaScript', 'PHP', 'HTML', 'CSS', 'Ruby', 'Python', 'Erlang'],
            }
        },
        computed: {
            items(){
                const items = this.$store.getters['cookie/getAllThing'];
                return  (typeof items == 'string' ? JSON.parse(items) : items) || []
            },
            getTotalPrice() {
                return this.sum(this.items, true)
            },
            getTotalQty(){
                return this.sum(this.items, false)
            }
        },
        methods: {
            subtotal(hash){
                if(!hash) return 0;
                const data = this.items.find(item => item.basket && item.basket.unique_hashes === hash);
                if(!data || !data.basket) return 0;
                return  +data.basket.prices * data.basket.qty
            },
            sum(items, type){
                return JSON.parse(JSON.stringify(items))
                    .map(item => type ? (+item.basket.prices * item.basket.qty ): item.basket.qty)
                    .reduce((a,b) => a + b)
            }
        }
    }
</script>

<style>
    .products {
        width: 100%;
        display: flex;
        justify-content: center;
    }

    .products-container {
        width: 1100px;
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
    .table-products-header {
          margin-bottom: 4px;
          background: #FFFFFF;
      }
    .table-products-header .post{
        border-right: 1px solid #ECF0F3;
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
        width: 105px;
        max-width: 105px;
        grid-area: post-4;
        grid-column: 4
    }

    .post-5 {
        width: 105px;
        max-width: 105px;
        grid-area: post-5;
        grid-column: 5
    }

    .post-6 {
        width: 105px;
        max-width: 105px;
        grid-area: post-6;
        grid-column: 6
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
    .products-all{
        background: #ECF0F3;
        padding: 14px;
    }
    .products-all-header{
        background: #91A0BC;
        width: 100%;
        max-width: 100%;
    }
    .products-all-header div{
        padding: 15px;
        font-style: normal;
        font-weight: bold;
        font-size: 14px;
        letter-spacing: -0.12px;
        text-transform: uppercase;
        color: #FFFFFF;
    }
    .products-all-total{
        background: #ECF0F3;
        margin-top: 2px;
    }
    .products-all-total{
        display: flex;
        justify-content: flex-end;
        align-items: center;

    }
    .products-all-total div{
        padding: 6px 12px;
        font-weight: bold;
        font-size: 12px;
        line-height: 0px;
        letter-spacing: -0.0566328px;
        text-transform: uppercase;
        color: #32405B;

     }
    .item-qty{
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 6px 12px!important;
    }
    .item-shop-basket-count{
        width: 20px;
        height: 20px;
        border-radius: 50%;
        display: flex;
        background: white;
        color: #32405B
    }
    .quantity{
        margin: 0 12px;
    }
    .table-products-items .post{
        border-right: #ECF0F3;
    }
    .table-products-items{
        border-bottom: 2px solid #FFFFFF;
    }
    .table-products-items:last-child{
        border-bottom: none;
    }
</style>

