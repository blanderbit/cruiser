<template>
    <div class="aside-car">
        <div class="left-smock-block"
             @click="isLeftMenuOpen = !isLeftMenuOpen"
             :style="{left:isLeftMenuOpen ? '-57px' : '0'}">
            <div class="square back-arrow pointer"
                 :style="{transform: isLeftMenuOpen ? 'rotate(180deg)' : 'rotate(0deg)'}">
            </div>
        </div>
        <ul style="position: relative"
            :style="{left: isLeftMenuOpen ? '-100%' : '0'}">
            <li v-for="item in dataSmallCar"
                :key="item.series"
                class="pointer">
                <div class="image"></div>
                <div class="series">
                    {{item.series}}
                    <span class="text">series</span>
                </div>
                <div class="line"></div>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "leftAside",
        data(){
            return {
                dataSmallCar: [
                    {path: './../../assets/smallCarAside/200.png', series: 40},
                    {path: './../../assets/smallCarAside/200.png', series: 60},
                    {path: './../../assets/smallCarAside/200.png', series: 70},
                    {path: './../../assets/smallCarAside/200.png', series: 80},
                    {path: './../../assets/smallCarAside/200.png', series: 100},
                    {path: './../../assets/smallCarAside/200.png', series: 200},
                ],
                isLeftMenuOpen:false
            }
        }
    }
</script>

<style scoped>
    .aside-car {
        position: relative;
        width: 300px;
    }
    .aside-car .left-smock-block {
        width: 57px;
        height: 510px;
        background: #D4D7DE;
        opacity: 0.4;
        left: 0;
        top: 0;
        position: absolute;
        /*z-index: -2;*/
    }

    .aside-car ul {
        padding: 0;
        z-index: 10;
    }

    .aside-car ul li {
        margin-left: -90px;
        display: flex;
        align-items: center;
        list-style: none;
        margin-top: 10px;
        position: relative;

    }

    .aside-car ul li .line {
        opacity: 0;
        margin-top: 3px;
        height: 57px;
        width: 250px;
        position: absolute;
        background: #32405B;
        z-index: -1;
    }

    .aside-car ul li .series {
        z-index: 3;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
    }

    .aside-car ul li .series {
        font-family: Montserrat;
        font-style: normal;
        font-weight: bold;
        font-size: 20px;
        color: #32405B;
        margin-top: 10px;
        margin-left: 10px;
    }

    .aside-car ul li .series .text {
        font-weight: 500;
        font-size: 13px;
    }

    .aside-car ul li:hover {
        margin-left: -30px;
    }

    .aside-car ul li:hover .series {
        color: #FFFFFF;
    }

    .aside-car ul li .image {
        background-image: url("./../../assets/smallCarAside/200.png");
        width: 178px;
        height: 70px;
        background-position: right;
        background-size: contain;
        background-repeat: no-repeat;
    }

    .aside-car ul li:hover .image {
        background-image: url("./../../assets/smallCarAside/200c.png");
    }

    .aside-car ul li:hover .line {
        opacity: 1;
    }
</style>
