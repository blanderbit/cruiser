<template>
    <table>
        <tr v-if="type == 'header'">
            <td :style="{background: background ? background : '#F3F6F8'}"
                class="w1"
            >
                <div class="w1 nested-text">picture</div>
            </td>
            <td :style="{background: background ? background : '#F3F6F8'}" class="w2">
                <div class="w2 nested-text">Brand</div>
            </td>
            <td :style="{background: background ? background : '#F3F6F8'}" class="w3">
                <div class="w3 nested-text">Number</div>
            </td>
            <td :style="{background: background ? background : '#F3F6F8'}" class="w4">
                <div class="w4 nested-text">Name</div>
            </td>
            <td :style="{background: background ? background : '#F3F6F8'}" class="w1">
                <div class="w1 nested-text">Weight<span class="normal">(Kg)</span></div>
            </td>
            <td :style="{background: background ? background : '#F3F6F8'}" class="w9"
                style="display: flex;justify-content: space-between">
                <div class="w9 nested-text" style="display: flex; justify-content: space-between">
                    Warehouse
                    <span style="font-weight: normal">availability</span>
                </div>
            </td>
            <td :style="{background: background ? background : '#F3F6F8'}"
                class="w5">
                <div class="w5 nested-text">departure</div>
            </td>
            <td :style="{background: background ? background : '#F3F6F8'}" class="w7">
                <div class="w7 nested-text">Price</div>
            </td>
            <td :style="{background: background ? background : '#F3F6F8'}" class="w6">
                <div class="w6 nested-text">Quantity</div>
            </td>
        </tr>
        <tr v-if="type != 'header'">
            <td :style="{background: background ? background : '#F3F6F8'}"
                class="w1"
                v-if="(!from && !to) || this.position.indexOf(1) > -1">
                <img src="./../../assets/testres.png" class="w1">
            </td>
            <td :style="{background: background ? background : '#F3F6F8'}"
                class="w2" style="font-weight: normal"
                v-if="(!from && !to) || this.position.indexOf(2) > -1">
                <div class="w2 nested-text" @click="toRouter()">{{mainData.brand_name}}</div>
            </td>
            <td :style="{background: background ? background : '#F3F6F8'}"
                class="w3"
                v-if="(!from && !to) || this.position.indexOf(3) > -1">
                <div class="w3 nested-text" @click="toRouter()">{{mainData.part_number}}</div>
            </td>
            <td :style="{background: background ? background : '#F3F6F8'}"
                class="w4"
                style="font-weight: normal"
                v-if="(!from && !to) || this.position.indexOf(4) > -1">
                <div class="w4 nested-text">{{mainData.description_english}}</div>
            </td>
            <td :style="{background: background ? background : '#F3F6F8'}"
                class="w1"
                v-if="(!from && !to) || this.position.indexOf(5) > -1">
                <div class="w1 nested-text">{{mainData.weight_physical}}</div>
            </td>
            <td :style="{background: background ? background : '#F3F6F8'}"
                class="w9"
                v-if="(!from && !to) || this.position.indexOf(6) > -1">
                <div class="w9 warehouse-container" v-for="(item) in mainData.data">
                    <div class="item-warehouse">warehouse {{item.warehousesNumber}}</div>
                    <div class="count-warehouse red">{{item.available}}</div>
                </div>
            </td>
            <td :style="{background: background ? background : '#F3F6F8'}"
                class="w5"
                v-if="(!from && !to) || this.position.indexOf(7) > -1">
                <div class="w5 warehouse-container item-day "
                     v-for="(item) in mainData.data">
                    {{item.warehousesDay}}
                    <div :style="!item.warehousesDay ? {opacity:0}:''" v-if="!item.warehousesDay">
                        null
                    </div>
                </div>
            </td>
            <td :style="{background: background ? background : '#F3F6F8'}"
                class="w7"
                v-if="(!from && !to) || this.position.indexOf(8) > -1">
                <div class="w7 warehouse-container item-day price " v-for="item in mainData.data">
                    <div><span :style="!item.prices ? {opacity:0}:''">$</span>{{item.prices}}</div>
                </div>
            </td>
            <td :style="{background: background ? background : '#F3F6F8'}"
                class="w6"
                v-if="(!from && !to) || this.position.indexOf(9) > -1">
                <div class="w6 warehouse-container item-day quantity" v-for="item in mainData.data">
                    <div class="count">
                        <div class="count-operation" @click="toggleQty(item, '+')">+</div>
                        <div class="count-total">{{item.qty}}</div>
                        <div class="count-operation" @click="toggleQty(item, '-')">-</div>
                    </div>
                    <div class="add-container"
                         :class="{active: item.isBasket}"
                         @click="toBasket(item)">
                        <div class="add-basket add-basket-background"></div>
                        <div class="add-text">add</div>
                    </div>
                    <div class="add-basket comment"></div>
                </div>
            </td>
        </tr>
    </table>
</template>

<script>
    import {Basket} from "../../helpers/basket";
    import {mapGetters} from "vuex";
    import { base64encode, base64decode } from 'nodejs-base64';
    export default {
        props: [
            'type',
            'background',
            'from',
            'to',
            'item'
        ],
        data() {
            return {
                position: null,
                data: null
            }
        },
        watch: {
            'snackbar'() {
                // this.mainData = {name:'refresh'}
            }
        },
        computed: {
            ...mapGetters({
                snackbar: 'error/get_data_error_or_message'
            }),
            mainData: {
                set(val) {
                    this.data = val
                },
                get() {
                    let product = this.newData(this.item);
                    let array = [{active: false}, {active: false}, {active: false}, {active: false}];
                    const arrayId = this.getAvailableArray();
                    product && (product.url = base64encode(JSON.stringify({
                        brand: product.brand_name,
                        part_number: product.part_number
                    })));
                    product && product.data && product.data.forEach(item => {
                        const regex = /\d+/g;
                        const warehouses = item.warehouses.split(' ');
                        item.warehousesNumber = warehouses[0].match(regex);
                        item.warehousesNumber = !item.warehousesNumber ? 1 : item.warehousesNumber[0];
                        item.warehousesDay = this.dataDayFormat(warehouses[1]);
                        item.warehouses && delete item.warehouses;
                        item.active = true;
                        item.isBasket = arrayId.indexOf(item.unique_hashes) > -1;
                        array.splice(item.warehousesNumber - 1, 1, item)
                    });
                    product && product.data && (product.data = array.map((item, index) => {
                        if (!item.active) {
                            item.available = 0;
                            item.warehousesDay = null;
                            item.warehousesNumber = index + 1
                        }
                        const basketContainer = Basket.getThingByIndex(item && item.unique_hashes);
                        item.qty = basketContainer &&
                        basketContainer.basket &&
                        basketContainer.basket.qty ? basketContainer.basket.qty : 0;
                        return item;
                    }));
                    this.data = product;
                    return this.data;
                }
            },
        },
        created() {
            let arr = Array.apply(null, {length: this.to - this.from}).map(Number.call, Number);
            let count = 0;
            this.position = arr.map(() => {
                count += 1;
                return this.from + count
            });
        },
        methods: {
            dataDayFormat(data) {
                const statics = data;
                const regex = /\d+/g;
                data = data.match(regex);
                data = data[data.length - 1];
                if (data.indexOf(1) > -1) return `${statics} day`;
                return `${statics} days`;
            },
            toggleQty(data, operation) {
                if (!data.active)    return this.toStore('red', 'Not available warehouse');
                if (!data.available) return this.toStore('red', 'Not available parts');
                if (data.qty == data.available && operation == '+') return this.toStore('red', 'Not available parts');
                if (data.qty == 0 && operation == '-') return this.toStore('red', 'Qty cannot be less than 0');
                let basketContainer = Basket.getThingByIndex(data.unique_hashes);
                const basketItemIndex = this.getLocalStorageFindIndexThings(data.unique_hashes);
                data.qty = eval(`${data.qty} ${operation} 1`);
                basketContainer&& basketContainer.basket && (basketContainer.basket.qty = data.qty);
                if(basketContainer && basketItemIndex > -1){
                    Basket.changeItemInBasketByIndex(basketItemIndex, basketContainer);
                    this.toStore('red', 'Successfully update basket');
                }
            },
            toStore(type, mes) {
                this.$store.commit('error/setValue', {
                    name: 'data',
                    data: {type: type, text: mes, active: true}
                });
            },

            toBasket(item) {
                const basketItem = this.newData(this.data);
                basketItem.data && delete basketItem.data;
                basketItem.basket = item;
                if (!item.active)    return this.toStore('red', 'Not available warehouse');
                if (!item.available) return this.toStore('red', 'Not available parts');
                if (item.isBasket)  {
                    const index = this.getLocalStorageFindIndexThings(basketItem.basket.unique_hashes);
                    const activeRemove = index > -1;
                    activeRemove && Basket.deleteThing(index);
                    this.mainData = false;
                    if(activeRemove) return this.toStore('red', 'Successfully removed from the basket');
                }
                Basket.addThing(basketItem);
                this.toStore('green', 'Successfully added to basket');
                this.mainData = basketItem
            },

            getLocalStorageThings: () => Basket.getAllThing(),

            getLocalStorageFindIndexThings: (id) => Basket.getIndexThing(id),

            newData : (data) =>  {
                try{
                    return JSON.parse(JSON.stringify(data))
                } catch (e){
                    return {}
                }
            },

            getAvailableArray() {
                return (this.getLocalStorageThings() || [])
                    .map(item => item && item.basket && item.basket.unique_hashes)
                    .filter(item => item);
            },
            toRouter(){
                this.$router.push(`/products/${this.data.url}`)
            }
        }
    }
</script>

<style scoped>
    td {
        background: #ECF0F3;
        color: #32405B;
        font-weight: bold;
        font-size: 11.3214px;
        text-transform: uppercase;
        vertical-align: top;
        /*border-right: 1px solid #FFFFFF;*/
    }

    .w1 {
        width: 96px;
        max-width: 96px;
    }

    .w2 {
        width: 76px;
        max-width: 76px;
    }

    .w3 {
        width: 90px;
        max-width: 90px;
    }

    .w4 {
        width: 134px;
        max-width: 134px;
    }

    .w5 {
        width: 100px;
        max-width: 100px;
    }

    .w6 {
        width: 187px;
        max-width: 187px;
    }

    .w7 {
        width: 80px;
        max-width: 80px;
    }

    .w9 {
        width: 204px;
        max-width: 204px;
    }

    .count-warehouse {
        color: white;
        border-radius: 20px;
        padding: 5px 13px;
        /*margin-left: 10%;*/
        margin-right: 40px;
    }

    .count-warehouse.green {
        background: #8BC240;
    }

    .count-warehouse.yellow {
        background: #F3C421;
    }

    .count-warehouse.red {
        background: #CA4635;
    }

    .warehouse-container {
        display: flex;
        justify-content: space-between;
        border-bottom: 1px solid white;
        padding: 5px 13px
    }

    .warehouse-container:last-child {
        border-bottom: none;
    }

    .item-warehouse {
        font-weight: normal;
        display: flex;
        align-items: center;
    }

    .item-day {
        padding: 10px 13px;
        display: flex;
        font-weight: normal;
    }

    .price {
        font-weight: bold;
    }

    .quantity, .count {
        display: flex;
        margin-right: 12px;
    }

    .quantity {
        padding: 0;
        padding-left: 13px;
        align-items: center;
        justify-content: normal;
        height: 34px;
        max-height: 34px;
    }

    .count-operation {
        cursor: pointer;
        width: 20px;
        height: 20px;
        border-radius: 50%;
        background: #FFFFFF;
    }

    .count, .count-operation {

        display: flex;
        align-items: center;
        justify-content: center;
    }

    .count-total {
        margin: 0 6px;
    }

    .add-container {
        background: #32405B;
        border-radius: 20px;
        padding: 3.15px 8px;
        display: flex;
        align-items: center;
        margin-right: 12px;
        cursor: pointer;
    }

    .add-container:hover {
        background: #586A8C;
    }

    .add-container:active, .add-container.active {
        background: #8BC240;
    }

    .add-basket, .comment {
        width: 16px;
        height: 15px;
        background-size: contain;
        background-repeat: no-repeat;
        background-position: center;
    }

    .add-basket-background {
        background-image: url("./../../assets/add-basket.png");
    }

    .add-text {
        color: #FFFFFF;
        font-family: Montserrat;
        font-style: normal;
        font-weight: bold;
        font-size: 11.181px;
    }

    .comment {
        background-image: url("./../../assets/comment.svg");
        cursor: pointer;
    }

    .nested-text {
        padding: 13px;
        padding-bottom: 11px;
    }

    img.w1 {
        margin-top: 25px;
    }
</style>
