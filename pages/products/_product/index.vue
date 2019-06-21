<template>
    <div class="one-product">
        <div class="container-product">
            <div class="link">
                <span>Home</span> /
                <span>Products</span> /
                <span class="link-active">NEW OEM TOYOTA LAND CRUISER 80 SERIES OR LEXUS LX450 AIR CLEA</span>
            </div>
            <div class="header-container-one-product">
                <div class="container-photo">
                    <div class="main-photo">
                        <img src="./../../../assets/main-photo.png">
                    </div>
                    <div class="main-photo-small">
                        <div><img src="./../../../assets/main-photo.png"></div>
                        <div><img src="./../../../assets/main-photo.png"></div>
                    </div>
                </div>
                <div class="product-description">
                    <div>Brand:<span style="font-weight: bold">Toyota</span></div>
                    <div class="container-description">
                        <div class="container-description-text">
                            <div class="name-product">
                                NEW OEM TOYOTA LAND CRUISER 80 SERIES OR LEXUS LX450 AIR CLEANER INTAKE HOSE
                            </div>
                            <div class="name-product" style="position: relative">
                                Part number:<span style="font-weight: bold">1626210011</span>
                                <div class="arrow-superseeded">
                                    <div class="arrow-image"></div>
                                    <div class="container-arrow-text" >
                                        Superseeded:
                                        <div class="arrow-text">1626-21011</div>
                                    </div>
                                </div>
                            </div>
                            <div class="name-product" >
                                Weight (kg):<span style="font-weight: bold"> 2.35</span>
                            </div>
                        </div>
                        <app-table
                                :from="5"
                                :to="9">
                        </app-table>
                    </div>
                </div>
            </div>
            <div class="container-about-product">
                <div class="item-about-product">
                    <div class="name-item-about-product">
                        Part fits:
                    </div>
                    <div class="description-item-about-product">
                        Toyota Land Cruiser 40 Series FJ40, FJ43, FJ45 This valve does not work on diesel models
                    </div>
                </div>
                <div class="item-about-product">
                    <div class="name-item-about-product">
                        Important General Information:
                    </div>
                    <div class="description-item-about-product">
                        Part's compatibility depends on Date of Production, Model and Country of Origin. Please do no
                        assume if your truck is listed above it automatically confirms compatibility. If you are not
                        sure whether this part fits your vehicle, please contact us before making a purchase and we will
                        be able to check it for you. In your message please include month and year of manufacture,
                        country of delivery and if possible frame number or VIN. Please also include the model version
                        that is in the format FJ40L-*****.
                    </div>
                </div>
            </div>
            <div class="title-main">
                Compatibility
            </div>
            <div class="title-main">
                Superseded and aftermarket
            </div>
            <div>
                <app-table :type="'header'" :background="'#ECF0F3'"></app-table>
                <app-table :background="'#FBEEE6'"></app-table>
                <app-table :background="'#DDEBF6'"></app-table>
                <app-table :background="'#EAECEE'"></app-table>
            </div>
        </div>
    </div>
</template>

<script>
    import table from "../../../common/mainElements/table";

    export default {
        name: "index",
        components: {
            'app-table': table,
        }
    }
</script>

<style scoped>
    .one-product {
        width: 100%;
        display: flex;
        justify-content: center;
    }

    .container-product {
        width: 1100px;
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

    .header-container-one-product {
        display: flex;
    }

    .main-photo img {
        width: 255px;
        max-width: 255px;
    }

    .main-photo {
        width: 100%;
    }

    .main-photo-small {
        display: flex;
    }

    .main-photo-small > div, .main-photo-small > div img {
        width: 51px;
        max-width: 51px;
        margin-right: 5px;
    }

    .container-photo {
        margin-right: 29px;
    }

    .product-description {
        font-family: Montserrat;
        font-style: normal;
        font-weight: normal;
        font-size: 12px;
        letter-spacing: -0.06px;

        color: #32405B;
    }

    .container-description {
        margin-top: 31px;
        display: flex;
        justify-content: space-between;
    }

    .container-description-text {
        margin-right: 35px;
    }

    .container-description-text > div {
        margin-bottom: 37px;
    }
    .arrow-image{
        width: 9px;
        height: 16px;
        background-image: url("./../../../assets/arrow-down-right.png");
    }
    .arrow-text{
        font-weight: bold;
        color: #CA4635;
    }
    .arrow-superseeded{
        display: flex;
        position: absolute;
        left: 80px;
    }
    .container-arrow-text{
        margin-top: 3px;
        margin-left: 5px;
    }
    .container-about-product{
        width: 100%;
        margin-top: 55px;
        margin-bottom: 90px;
    }
    .item-about-product{
        display: flex;
        justify-content: space-between;
        align-items: center;
        color: #32405B;
        margin-bottom: 17px;
    }
    .name-item-about-product{
        width: 152px;
        margin-right: 17px;
        font-weight: normal;
        font-size: 19.9986px;
        letter-spacing: -0.1px;

    }
    .description-item-about-product{
        background: #ECF0F3;
        border-left: 5px solid #CA4635;
        width: 100%;
        padding: 31px;
        font-size: 11.9995px;
        line-height: 15px;
    }
</style>
