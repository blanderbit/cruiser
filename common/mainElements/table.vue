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
                Warehouse
                <span style="font-weight: normal">availability</span>
            </td>
            <td :style="{background: background ? background : '#F3F6F8'}" class="w3">departure</td>
            <td :style="{background: background ? background : '#F3F6F8'}" class="w5">Price</td>
            <td :style="{background: background ? background : '#F3F6F8'}" class="w6">Quantity</td>
        </tr>
        <tr v-if="type != 'header'">
            <td :style="{background: background ? background : '#F3F6F8'}"
                class="w1"
                v-if="(!from && !to) || this.position.indexOf(1) > -1">
                <img src="./../../assets/testres.png" class=" w1">
            </td>
            <td :style="{background: background ? background : '#F3F6F8'}"
                class="w2" style="font-weight: normal"
                v-if="(!from && !to) || this.position.indexOf(2) > -1">
                <div class="w2 nested-text">toyota</div>
            </td>
            <td :style="{background: background ? background : '#F3F6F8'}"
                class="w3"
                v-if="(!from && !to) || this.position.indexOf(3) > -1">
                <div class="w3 nested-text">1626210011</div>
            </td>
            <td :style="{background: background ? background : '#F3F6F8'}"
                class="w4"
                style="font-weight: normal"
                v-if="(!from && !to) || this.position.indexOf(4) > -1">
                <div class="w4 nested-text">new oem toyota land cruiser 80 series or lexuslx450 air cleanerintake hose</div>
            </td>
            <td :style="{background: background ? background : '#F3F6F8'}"
                class="w1"
                v-if="(!from && !to) || this.position.indexOf(5) > -1">
                <div class="w1 nested-text">2.35</div>
            </td>
            <td :style="{background: background ? background : '#F3F6F8'}"
                class="w9"
                style="padding: 0"
                v-if="(!from && !to) || this.position.indexOf(6) > -1">
                <div class="w9 warehouse-container" v-for="item in [1,2,3,4]">
                    <div class="item-warehouse">warehouse 4</div>
                    <div class="count-warehouse red">0</div>
                </div>
            </td>
            <td :style="{background: background ? background : '#F3F6F8'}"
                style="padding: 0"
                class="w3"
                v-if="(!from && !to) || this.position.indexOf(7) > -1">
                <div class="w3 warehouse-container item-day" v-for="item in [1,2,3,4]">4 days</div>
            </td>
            <td :style="{background: background ? background : '#F3F6F8'}"
                class="w5"
                style="padding: 0"
                v-if="(!from && !to) || this.position.indexOf(8) > -1">
                <div class="w5 warehouse-container item-day price" v-for="item in [1,2,3,4]">$123</div>
            </td>
            <td :style="{background: background ? background : '#F3F6F8'}"
                class="w6"
                style="padding: 0"
                v-if="(!from && !to) || this.position.indexOf(9) > -1">
                <div class="w6 warehouse-container item-day quantity" v-for="item in [1,2,3,4]">
                    <div class="count">
                        <div class="count-operation">+</div>
                        <div class="count-total">0</div>
                        <div class="count-operation">-</div>
                    </div>
                    <div class="add-container">
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
    export default {
        name: "table",
        props: [
            'type',
            'background',
            'from',
            'to'
        ],
        data(){
            return {
                position: null
            }
        },
        created(){
            let arr = Array.apply(null, {length: this.to - this.from}).map(Number.call, Number);
            let count = 0;
            this.position = arr.map(() => {
                count += 1;
                return this.from + count
            });
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
        width: 104px;
        max-width: 104px;
    }

    .w4 {
        width: 164px;
        max-width: 164px;
    }

    .w5 {
        width: 61px;
    }

    .w6 {
        width: 167px;
    }

    .w9 {
        width: 180px;
    }

    .count-warehouse {
        color: white;
        border-radius: 20px;
        padding: 5px 13px;
        margin-left: 10%;
        margin-right: 20px;
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
    .item-day{
        padding: 10px 13px;
        display: flex;
        justify-content: center;
        font-weight: normal;
    }
    .price{
        font-weight: bold;
    }
    .quantity, .count{
        display: flex;
    }
    .quantity{
        padding: 0 13px ;
        align-items: center;
        justify-content: space-between;
        height: 34px;
        max-height: 34px;
    }
    .count-operation{cursor: pointer;
        width: 20px;
        height: 20px;
        border-radius: 50%;
        background: #FFFFFF;
    }
    .count, .count-operation{

        display: flex;
        align-items: center;
        justify-content: center;
    }
    .count-total{
        margin: 0 6px;
    }
    .add-container{
        background: #32405B;
        border-radius: 20px;
        padding: 3.15px 8px;
        display: flex;
        align-items: center;
        cursor: pointer;
    }
    .add-basket, .comment{
        width: 16px;
        height: 15px;
        background-size: contain;
        background-repeat: no-repeat;
        background-position: center;
    }
    .add-basket-background{
        background-image: url("./../../assets/add-basket.png");
    }
    .add-text{
        color: #FFFFFF;
        font-family: Montserrat;
        font-style: normal;
        font-weight: bold;
        font-size: 11.181px;
    }
    .comment{
        background-image: url("./../../assets/comment.svg");
        cursor: pointer;
    }
    .nested-text{
        padding: 13px;
        padding-bottom: 11px;

    }
</style>
