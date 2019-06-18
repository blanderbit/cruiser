<template>
    <section class="Carousel-section">
        <div class="aside-car">
            <div class="left-smock-block"></div>
            <ul>
                <li v-for="item in dataSmallCar" :key="item.series">
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
            <carousel :interval="10000" :data="set_data"></carousel>
        </div>
        <div class="aside-sotial">

        </div>
    </section>
</template>

<script>
    export default {
        name: "first-element",
        data(){
            return  {
                customers :[
                    {
                        fullName: 'Ramon Pfiefer',
                        star: 4,
                        title:'Our customers',
                        description:'Lorem ipsum dolor sit amet, consectetur' +
                            ' adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna' +
                            ' aliqua. Ut enim ad minim veniam, quis',
                        profPhoto: './../../assets/caruselIcon/image.png',
                        mapsPath: './../../assets/caruselIcon/MAP.png',
                        carPhoto: './../../assets/caruselIcon/car.png'
                    }, {
                        fullName: '123123r',
                        star: 4,
                        title:'Our customers',
                        description:'123123312',
                        profPhoto: './../../assets/caruselIcon/image.png',
                        mapsPath: './../../assets/caruselIcon/MAP.png',
                        carPhoto: './../../assets/caruselIcon/car.png'
                    },{
                        fullName: 'Ramon 2222',
                        star: 4,
                        title:'Our customers',
                        description:'1231111222',
                        profPhoto: './../../assets/caruselIcon/image.png',
                        mapsPath: './../../assets/caruselIcon/MAP.png',
                        carPhoto: './../../assets/caruselIcon/car.png'
                    },

                ],
                data: [],
                dataSmallCar:[
                    {path:'./../../assets/smallCarAside/200.png', series: 40},
                    {path:'./../../assets/smallCarAside/200.png', series: 60},
                    {path:'./../../assets/smallCarAside/200.png', series: 70},
                    {path:'./../../assets/smallCarAside/200.png', series: 80},
                    {path:'./../../assets/smallCarAside/200.png', series: 100},
                    {path:'./../../assets/smallCarAside/200.png', series: 200},
                ]
            }
        },
        computed:{
            set_data(){
                return this.customers ? this.customers.map(item =>{
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
    .Carousel-section{
        margin-top: 33px;
        width: 100%;
        display: flex;
        justify-content: space-between;
        margin-bottom: 52px;
    }
    .container-carousel{
        max-width: 1300px;
        width: 1300px;
        display: flex;
        justify-content: center;
    }
    .aside-car{
        width: 300px;
    }
    .aside-sotial{
        width: 300px;
    }
    .aside-car {
        position: relative;
    }

    .aside-car .left-smock-block {
        width: 57px;
        height: 510px;
        background: #D4D7DE;
        opacity: 0.4;
        left: 0;
        top: 0;
        position: absolute;
        z-index: -2;
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
    .aside-car ul li:hover{
        margin-left: -30px;
    }
    .aside-car ul li:hover .series{
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
