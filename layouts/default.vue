<template>
    <div>
        <div class="basket-background"
             v-if="isBasketOpen"
             @click="isBasketOpen ? isBasketOpen = !isBasketOpen : null">
        </div>
        <app-header
            @getActiveBasket="getActiveBasket($event)"
            :isBasketOpen="isBasketOpen">
        </app-header>

        <main @click="isBasketOpen ? isBasketOpen = !isBasketOpen : null">
            <nuxt/>
        </main>
        <app-footer>
        </app-footer>
    </div>
</template>

<script>
    import header from '../common/mainElements/header/index'
    import footer from '../common/mainElements/footer/index'

    export default {
        components: {
            "app-header": header,
            "app-footer": footer,
        },
        data(){
            return{
                isBasketOpen:false
            }
        },
        methods: {
            getActiveBasket(event){
                this.isBasketOpen = event
            }
        }
    }
</script>

<style>
    main{
        min-height: calc(100vh - 224px);
    }
    .basket-background{
        width: 100%;
        height: 100%;
        position: fixed;
        background: white;
        opacity: 0.4;
        z-index: 11;
    }

    body, html {
        margin: 0;
        font-family: Montserrat;
        padding: 0;
    }

    .Carousel-section .carousel__item .container-slide {
        height: 600px;
        width: 1100px;
    }

    .Carousel-section .carousel__item .container-slide .about-customer-container {
        width: 100%;
        display: flex;
        justify-content: flex-end;
    }

    .Carousel-section .carousel__item .container-slide .about-customer-container .about-customer-content {
        width: 646px;
        height: 67px;
        margin-top: 60px;
        padding: 20px;
        background: #32405B;
        box-shadow: 9.2px 9.2px 21px rgba(0, 0, 0, 0.15);
        display: flex;
    }

    .Carousel-section .carousel__item .container-slide .about-customer-container .about-customer-content .description-about {
        font-family: Montserrat;
        font-style: normal;
        font-weight: normal;
        font-size: 14px;
        /*line-height: 0px;*/
        /*margin-bottom: 5px;*/
        color: #FFFFFF;
    }

    .Carousel-section .carousel__item .container-slide .about-customer-container .about-customer-content .description-about .name {
        margin-bottom: 5px;
    }

    .Carousel-section .carousel__item .container-slide .about-customer-container .about-customer-content .description-about .description {
        margin-top: 5px;
        font-size: 12px;
        width: 521px;
        /*line-height: 16px;*/
        color: #D7DBE6;
    }

    .Carousel-section .carousel__item .container-slide .about-customer-container .about-customer-content .about-photo {
        height: 67px;
        width: 70px;
        background-repeat: no-repeat;
        background-size: contain;
        background-position: center;
        background-image: url("./../assets/caruselIcon/image.png");
    }

    .Carousel-section .carousel__item .container-slide .about-customer-container .about-customer-content .middle-about {
        width: 1px;
        height: 100%;
        background: white;
        margin: 0 20px;
    }

    .Carousel-section .carousel__item .container-slide .customer-map-container {
        display: flex;
        width: 100%;
        align-items: stretch;
    }

    .Carousel-section .carousel__item .container-slide .customer-map-container .map {
        width: 600px;
        height: 400px;
        background-repeat: no-repeat;
        background-size: contain;
        align-self: flex-end;
        background-image: url("./../assets/caruselIcon/MAP.png");
    }

    .Carousel-section .carousel__item .container-slide .customer-map-container .customer {
        position: relative;
        display: flex;
        width: 400px;
    }

    .Carousel-section .carousel__item .container-slide .customer-map-container .customer .title {
        font-family: Montserrat;
        font-style: normal;
        font-weight: normal;
        font-size: 36px;
        color: #32405B;
        margin-left: 20px;
    }

    .Carousel-section .carousel__item .container-slide .customer-map-container .customer .customer-logo {
        width: 53px;
        height: 171px;
        border-radius: 35px;
        background: #ECF0F3;
        display: flex;
        margin-left: 80px;
        justify-content: center;
    }

    .Carousel-section .carousel__item .container-slide .customer-map-container .customer .customer-car {
        width: 800px;
        height: 400px;
        left: -70px;
        top: 80px;
        background-repeat: no-repeat;
        background-size: contain;
        background-position: center;
        position: absolute;
        background-image: url("./../assets/caruselIcon/car.png");
    }

    .Carousel-section .carousel__item .container-slide .customer-map-container .customer .customer-logo .customer-logo-small {
        background: #CA4635;
        width: 20px;
        height: 20px;
        margin-top: 15px;
        border-radius: 50%;
    }


    .all-center {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .cruiser-name {
        font-size: 24px;
        line-height: 0px;
        margin-right: 40px;
        font-style: normal;
        font-weight: bold;
    }

    .cruiser-name span {
        color: #32405a
    }

    .cruiser-name span:first-child {
        color: #CA4635;
    }
    .pointer{
        cursor: pointer;
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
    .back-arrow {
        background-image: url("./../assets/back-arrow.png");
    }
</style>

