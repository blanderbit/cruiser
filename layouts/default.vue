<template>
    <div>
        <div class="basket-background"
             v-if="isBasketOpen"
             @click="isBasketOpen ? isBasketOpen = !isBasketOpen : null">
        </div>
        <app-toast></app-toast>
        <app-header
            @getActiveBasket="getActiveBasket($event)"
            :isBasketOpen="isBasketOpen">
        </app-header>

        <main @click="isBasketOpen ? isBasketOpen = !isBasketOpen : null">
            <nuxt/>
        </main>
        <app-footer></app-footer>
        <app-auth
            v-if="login || register"
            :isLogin="login"
            :isRegister="register">
        </app-auth>
    </div>
</template>

<script>
    import header from '../common/mainElements/header/index'
    import footer from '../common/mainElements/footer/index'
    import messageToast from "../common/mainElements/vuetyfy-toast/messageToast";
    import auth from '../components/auth/index'
    import {mapGetters} from 'vuex'
    export default {
        components: {
            "app-header": header,
            "app-footer": footer,
            "app-toast": messageToast,
            "app-auth": auth
        },
        data(){
            return{
                isBasketOpen:false
            }
        },
        computed:{
            ...mapGetters({
                login: 'auth/get_login_modal',
                register: 'auth/get_register_modal'
            })
        },
        methods: {
            getActiveBasket(event){
                this.isBasketOpen = event
            }
        },

    }
</script>

<style lang="scss">
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
        /*height: 67px;*/
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
    .container-carousel{
        display: flex;
        /*background: #ECF0F3;*/
        justify-content: space-between;
    }
    .container-carousel .test-card{
        width: 255px;
        max-width: 255px;
        max-height: 214px;
        padding: 17px;
        background: #FFFFFF;
        margin-right: 30px;
    }
    .container-carousel .test-card .picture-description{
        display: flex;
    }
    .container-carousel .test-card .picture-description .picture{
        width: 95px;
        min-width: 95px;
        height: 79px;
        min-height: 79px;
        border: 1px solid #D4D7DE;
        margin-right: 11px;
        background-image: url("./../assets/test_cart.png");
    }
    .container-carousel .test-card .picture-description .description{
        font-family: Montserrat;
        font-style: normal;
        font-weight: 500;
        text-transform: uppercase;
        font-size: 13.0011px;
        line-height: 15px;
        color: #2F4957;
    }
    .container-carousel .test-card  hr{
        margin-top: 14px;
        height: 1px;
        border: none;
        background: #D4D7DE;
        margin-bottom: 0;
    }
    .container-carousel .test-card  .total-add{
        display: flex;
        justify-content: space-between;
        margin-top: 20px;
        align-items: center;
    }
    .container-carousel .test-card  .total-add  .card-price {
        font-style: normal;
        font-weight: bold;
        font-size: 15px;
        color: #CA4635;
    }
    .container-carousel .test-card  .total-add  .add-cart {
        max-width: 107px;
        max-height: 40px;
        background: #32405B;
        padding:13px;
        font-weight: bold;
        font-size: 11px;
        line-height: 18px;
        text-transform: uppercase;
        color: #FFFFFF;
        cursor: pointer;
    }
    .container-carousel .test-card  .total-add  .add-cart:hover {
        background: #586A8C;
    }

    .container-carousel .test-card  .total-add  .add-cart:active {
        background: #CA4635;
    }
    .container-carousel .test-card  .total-add  .card-price span{
        font-size: 12px;
    }
    .container-carousel .test-card:last-child{
        margin-right:0;
    }
    .link {
        color: #32405B;
        font-style: normal;
        font-weight: normal;
        font-size: 18px;
        margin: 48px 0;
        line-height: 0px;
        letter-spacing: -0.1px;
    }

    .link .link-active {
        font-weight: bold;
    }




    .v-snack {
        position: fixed;
        display: flex;
        align-items: center;
        color: #fff;
        pointer-events: none;
        z-index: 1000;
        font-size: 14px;
        right: 10px;
        top: 10px;
        width: 300px;
    }
    .v-snack--absolute {
        position: absolute;
    }
    .v-snack--top {
        top: 10px;
    }
    .v-snack--bottom {
        bottom: 0;
    }
    .v-snack__wrapper {
        display: flex;
        align-items: center;
        background-color: #F3F6F8;
        pointer-events: auto;
        width: 100%;
        font-weight: normal;
        font-size: 13px;
        line-height: 15px;
        color: #32405B;
        border: 1px solid #D4D7DE;
        box-shadow: 0px 3px 5px -1px rgba(0,0,0,0.2), 0px 6px 10px 0px rgba(0,0,0,0.14), 0px 1px 18px 0px rgba(0,0,0,0.12);
    }
    .v-snack__content {
        width: 100%;
        height: 48px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        overflow: hidden;
    }
    .v-snack__content .v-btn {
        color: #fff;
        flex: 0 0 auto;
        padding: 8px;
        margin: 0 0 0 24px;
        height: auto;
        min-width: auto;
        width: auto;
    }
    .v-snack__content .v-btn__content {
        margin: -2px;
    }
    .v-snack__content .v-btn::before {
        display: none;
    }
    .v-snack--multi-line .v-snack__content {
        height: 80px;
        padding: 24px;
    }
    .v-snack--vertical .v-snack__content {
        height: 112px;
        padding: 24px 24px 14px;
        flex-direction: column;
        align-items: stretch;
    }
    .v-snack--vertical .v-snack__content .v-btn.v-btn {
        justify-content: flex-end;
        padding: 0;
        margin-left: 0;
        margin-top: 24px;
    }
    .v-snack--vertical .v-snack__content .v-btn__content {
        flex: 0 0 auto;
        margin: 0;
    }
    .v-snack--auto-height .v-snack__content {
        height: auto;
    }
    .v-snack-transition-enter-active,
    .v-snack-transition-leave-active {
        transition: -webkit-transform 0.4s cubic-bezier(0.25, 0.8, 0.5, 1);
        transition: transform 0.4s cubic-bezier(0.25, 0.8, 0.5, 1);
        transition: transform 0.4s cubic-bezier(0.25, 0.8, 0.5, 1), -webkit-transform 0.4s cubic-bezier(0.25, 0.8, 0.5, 1);
    }
    .v-snack-transition-enter-active .v-snack__content,
    .v-snack-transition-leave-active .v-snack__content {
        transition: opacity 0.3s linear 0.1s;
    }
    .v-snack-transition-enter .v-snack__content {
        opacity: 0;
    }
    .v-snack-transition-enter-to .v-snack__content,
    .v-snack-transition-leave .v-snack__content {
        opacity: 1;
    }
    .v-snack-transition-enter.v-snack.v-snack--top,
    .v-snack-transition-leave-to.v-snack.v-snack--top {
        -webkit-transform: translateY(calc(-100% - 8px));
        transform: translateY(calc(-100% - 8px));
    }
    .v-snack-transition-enter.v-snack.v-snack--bottom,
    .v-snack-transition-leave-to.v-snack.v-snack--bottom {
        -webkit-transform: translateY(100%);
        transform: translateY(100%);
    }
    input{
        color:rgb(50, 64, 91)!important;
    }

    .card:last-child{
        margin-right: 0!important;
    }
    .card {
        max-width: 254px;
        max-height: 400px;
        padding: 20px;
        margin: 40px 0;
        margin-right: 24px;
        flex-direction: column;
        display: flex;
        border: 2px solid #EDEDED;
    }

    .card:hover {
        border: 2px solid white;
        box-shadow: 0px 8px 25px rgba(0, 0, 0, 0.15);
    }

    .card-image {
        width: 100%;
        height: 170px;
        margin-bottom: 22px;
        background-image: url("../assets/test_cart.png");
        background-repeat: no-repeat;
        background-position: center;
        background-size: contain;
    }

    .card-description {
        width: 224px;
        height: 47px;
        font-style: normal;
        font-weight: 500;
        font-size: 13.0011px;
        line-height: 15px;
        text-transform: uppercase;
        color: #2F4957;
        white-space: wrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }

    .card-line {
        height: 1px;
        width: 100%;
        margin: 13px 0;
        border: none;
        background: #D4D7DE;
    }

    .card-price {
        font-style: normal;
        font-weight: bold;
        font-size: 15px;
        color: #CA4635;
        margin-bottom: 13px;
    }

    .card-price span {
        font-size: 12px;
    }

    .button-card-add {
        width: 124px;
        height: 40px;
        font-style: normal;
        font-weight: bold;
        font-size: 13px;
        line-height: 20px;
        text-transform: uppercase;
        cursor: pointer;
        color: #FFFFFF;
        background: #32405B;
        border: none;
    }

    .button-card-add:hover {
        background: #586A8C;
    }

    .button-card-add:active {
        background: #CA4635;
    }
    .button-card-add.active{
        background: #8BC240;
    }
    .card-star {
        margin-top: 13px;
    }
    .disabledHash{
        display: none;
    }
    .containerCard{
        width: 100%;
        padding: 0 20px;
        display: flex;
        background: white;
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
</style>

