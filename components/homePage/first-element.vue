<template>
    <section class="Carousel-section">
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
        <div class="container-carousel">
            <carousel
                :interval="10000"
                :data="set_data">
            </carousel>
        </div>
        <div class="aside-sotial">
            <div class="aside-sotial-content">
                <div class="sotial-square pointer square pinterest">
                    <div class="sotial-block">122</div>
                </div>
                <div class="sotial-square pointer square instagram">
                    <div class="sotial-block">332</div>
                </div>
                <div class="sotial-square pointer square facebook">
                    <div class="sotial-block">11</div>
                </div>
                <div class="sotial-square pointer square youtube">
                    <div class="sotial-block">223</div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        name: "first-element",
        data() {
            return {
                customers: [
                    {
                        fullName: 'Ramon Pfiefer',
                        star: 4,
                        title: 'Our customers',
                        description: 'Lorem ipsum dolor sit amet, consectetur' +
                            ' adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna' +
                            ' aliqua. Ut enim ad minim veniam, quis',
                        profPhoto: './../../assets/caruselIcon/image.png',
                        mapsPath: './../../assets/caruselIcon/MAP.png',
                        carPhoto: './../../assets/caruselIcon/car.png'
                    }, {
                        fullName: '123123r',
                        star: 4,
                        title: 'Our customers',
                        description: '123123312',
                        profPhoto: './../../assets/caruselIcon/image.png',
                        mapsPath: './../../assets/caruselIcon/MAP.png',
                        carPhoto: './../../assets/caruselIcon/car.png'
                    }, {
                        fullName: 'Ramon 2222',
                        star: 4,
                        title: 'Our customers',
                        description: '1231111222',
                        profPhoto: './../../assets/caruselIcon/image.png',
                        mapsPath: './../../assets/caruselIcon/MAP.png',
                        carPhoto: './../../assets/caruselIcon/car.png'
                    },

                ],
                isLeftMenuOpen: false,
                data: [],
                dataSmallCar: [
                    {path: './../../assets/smallCarAside/200.png', series: 40},
                    {path: './../../assets/smallCarAside/200.png', series: 60},
                    {path: './../../assets/smallCarAside/200.png', series: 70},
                    {path: './../../assets/smallCarAside/200.png', series: 80},
                    {path: './../../assets/smallCarAside/200.png', series: 100},
                    {path: './../../assets/smallCarAside/200.png', series: 200},
                ]
            }
        },
        methods: {
            openLeftMenu() {
                console.log(312312)
            }
        },
        computed: {
            set_data() {
                return this.customers ? this.customers.map(item => {
                    const name = item.fullName;
                    return `<div class="container-slide">
                                <div class="customer-map-container">
                                    <div class="customer">
                                        <div class="customer-logo">
                                            <div class="customer-logo-small"></div>
                                        </div>
                                        <div class="title">${item.title}</div>
                                        <div class="customer-car"></div>
                                    </div>
                                    <div class="map"></div>
                                </div>
                                <div class="about-customer-container">
                                    <div class="about-customer-content">
                                        <div class="about-photo"></div>
                                        <div class="middle-about"></div>
                                        <div class="description-about">
                                              <div class="name">${item.fullName}</div>
                                              <app-star :count="${item.star}"></app-star>
                                              <div class="description">${item.description}</div>
                                        </div>
                                    </div>
                                </div>
                            </div>`
                }) : []
            }
        }
    }
</script>

<style scoped>
    .Carousel-section {
        margin-top: 33px;
        width: 100%;
        display: flex;
        justify-content: space-between;
        margin-bottom: 52px;
    }

    .container-carousel {
        max-width: 1300px;
        width: 1300px;
        display: flex;
        justify-content: center;
    }

    .aside-car {
        width: 300px;
    }

    .aside-sotial {
        width: 300px;
        align-self: flex-end;
        justify-items: flex-end;
        display: flex;
        /*align-items: flex-end;*/
        justify-content: flex-end;
        /*height: 100%;*/
    }

    .aside-sotial-content{
        width: 32px;
        height: 100%;
        margin-right: 29px;
        margin-bottom: 109px;
    }
    .aside-car {
        position: relative;
    }

    .square {
        width: 32px;
        height: 32px;
        position: absolute;
        bottom: -32px;
        right: -32px;
        background-color: #91A0BC;
        background-repeat: no-repeat;
        background-position: center;
    }
    .sotial-square{
        background-color: #D4D7DE;
        margin-bottom: 7px;
        right: 0px;
        position: relative;
    }
    .sotial-square:hover{
        background-color:#32405B
    }
    .back-arrow {
        background-image: url("./../../assets/back-arrow.png");
    }
    .facebook {
        background-image: url("./../../assets/sotial/facebook.png");
    }
    .instagram {
        background-image: url("./../../assets/sotial/instagram.png");
    }
    .pinterest {
        background-image: url("./../../assets/sotial/pinterest.png");
    }
    .youtube {
        background-image: url("./../../assets/sotial/Youtube.png");
    }
    .sotial-square:hover > .sotial-block{
        display: flex;
    }
    .sotial-block {
        background: #CA4635;
        position: absolute;
        left: -65px;
        top: 5px;
        width: 43px;
        height: 24px;
        font-family: Montserrat;
        font-style: normal;
        align-items: center;
        justify-content: center;
        font-size: 13px;
        color: #FFFFFF;
        display: none;
    }
    .sotial-block::after {
        content: '';
        position: absolute;
        right: -15px; top: 4px;
        border: 8px solid transparent;
        border-left: 8px solid #CA4635;
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
