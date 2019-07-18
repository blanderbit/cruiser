<template>
    <section class="products">
        <div class="products-container">
            <div style="display: flex; justify-content: space-between; align-items: center">
                <div class="link">
                    <span>Home</span> /
                    <span class="link-active"> Cart</span>
                </div>
                <div style="display: flex;" class="pointer" @click="$router.replace('products')">
                    <div class="button-continue-checkout-back-image"></div>
                    <div class="button-continue-checkout button-continue-checkout-back">Continue shoping</div>
                </div>
            </div>
            <div class="check-out">
                <div>
                    <div class="data">
                        <div class="products-all-header">
                            <div>Shipping address</div>
                        </div>
                        <div>
                            <div class="personal-data-item" style="margin-top: -30px">
                                <label>Your email<span class="badge-require">*</span></label>
                                <div>
                                    <input
                                        v-model="dataRegister.email"
                                        placeholder="This is a required field"
                                        :class="errorRegister.email && errorRegister.email.errors && 'input-error'"
                                        @input="setUser($event, dataRegister, 'email')">
                                </div>
                            </div>
                            <div class="sotial-login">
                                <div class="all-center pointer">
                                    <div class="sotial-picture google"></div>
                                    GOOGLE
                                </div>
                                <div class="all-center facebook pointer">
                                    <div class="sotial-picture facebook"></div>
                                    Facebook
                                </div>
                            </div>
                            <div class="personal-data-group">
                                <div class="personal-data-item">
                                    <label>First Name<span class="badge-require">*</span></label>
                                    <div>
                                        <input
                                            v-model="dataRegister.first_name"
                                            placeholder="This is a required field"
                                            :class="errorRegister.first_name &&
                                            errorRegister.first_name.errors && 'input-error'"
                                            @input="setUser($event, dataRegister, 'first_name')">
                                    </div>
                                </div>
                                <div class="personal-data-item">
                                    <label>Last Name<span class="badge-require">*</span></label>
                                    <div>
                                        <input
                                             v-model="dataRegister.last_name"
                                             placeholder="This is a required field"
                                             :class="errorRegister.last_name &&
                                             errorRegister.last_name.errors && 'input-error'"
                                             @input="setUser($event, dataRegister, 'last_name')">
                                    </div>
                                </div>
                            </div>
                            <div class="personal-data-item">
                                <label>Street Adress<span class="badge-require">*</span></label>
                                <div>
                                    <input
                                        v-model="dataRegister.street_address"
                                        placeholder="This is a required field"
                                        :class="errorRegister.street_address &&
                                            errorRegister.street_address.errors && 'input-error'"
                                        @input="setUser($event, dataRegister, 'street_address')">
                                </div>
                            </div>
                            <div class="personal-data-item">
                                <label>Street Adress 2<span class="badge-require">*</span></label>
                                <div>
                                    <input
                                        v-model="dataRegister.street_address_two"
                                        placeholder="This is a required field"
                                        :class="errorRegister.street_address_two &&
                                            errorRegister.street_address_two.errors && 'input-error'"
                                        @input="setUser($event, dataRegister, 'street_address_two')">
                                </div>
                            </div>
                            <div class="personal-data-group">
                                <div class="personal-data-item">
                                    <label>City<span class="badge-require">*</span></label>
                                    <div>
                                        <input
                                            v-model="dataRegister.city"
                                            placeholder="This is a required field"
                                            :class="errorRegister.city &&
                                            errorRegister.city.errors && 'input-error'"
                                            @input="setUser($event, dataRegister, 'city')">
                                    </div>
                                </div>
                                <div class="personal-data-item">
                                    <label>State<span class="badge-require">*</span></label>
                                    <div>
                                        <input
                                             v-model="dataRegister.state"
                                             placeholder="This is a required field"
                                             :class="errorRegister.state &&
                                            errorRegister.state.errors && 'input-error'"
                                             @input="setUser($event, dataRegister, 'state')">
                                    </div>
                                </div>
                            </div>
                            <div class="personal-data-group">
                                <div class="personal-data-item">
                                    <label>ZIP/Postal code<span class="badge-require">*</span></label>
                                    <div>
                                        <input
                                             placeholder="This is a required field"
                                             v-model="dataRegister.postal_code"
                                             :class="errorRegister.postal_code &&
                                            errorRegister.postal_code.errors && 'input-error'"
                                             @input="setUser($event, dataRegister, 'postal_code')">
                                    </div>
                                </div>
                                <div class="personal-data-item">
                                    <label>Country<span class="badge-require">*</span></label>
                                    <div>
                                        <input
                                             v-model="dataRegister.country"
                                             placeholder="This is a required field"
                                             :class="errorRegister.country &&
                                            errorRegister.country.errors && 'input-error'"
                                             @input="setUser($event, dataRegister, 'country')">
                                    </div>
                                </div>
                            </div>
                            <div class="personal-data-item">
                                <label style="display: flex">
                                    Phone:<span class="badge-require">*</span>
                                </label>
                                <div>
                                    <input
                                         v-model="dataRegister.phone"
                                         placeholder="This is a required field"
                                         :class="errorRegister.phone &&
                                            errorRegister.phone.errors && 'input-error'"
                                         @input="setUser($event, dataRegister, 'phone')">
                                </div>
                            </div>

                            <div class="select-result-simple" style="margin-top: 20px">
                                <div class="styled-input-single d-flex align-items-center checked">
                                    <input type="checkbox" id="addressSame" name="fieldset-1" v-model="addressSame"/>
                                    <label for="addressSame" class="check">My billing and shipping address are the same</label>
                                </div>
                            </div>

                            <div style="background: #DADADA;width: 100%;height: 1px; margin-bottom: 20px; margin-top: 20px">

                            </div>

                            <div class="select-result-simple">
                                <div class="styled-input-single d-flex align-items-center checked">
                                    <input type="checkbox" id="crAc" name="fieldset-1" v-model="crAc"/>
                                    <label for="crAc" class="check">Create Account</label>
                                </div>
                            </div>
                            <div class="button-continue-checkout pointer" style="width: 100%; margin-top: 20px"
                                 @click="save()">
                                SAVE AND SEARCH
                            </div>
                        </div>
                    </div>
                </div>
                <div class="check-product">
                    <div class="products-all-header">
                        <div>Order summary</div>
                    </div>
                    <div class="products-all">
                        <div class="table-products table-products-header" style="margin-bottom: 20px">
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
                            <div class="post post-1 product-container">
                                <div>{{index + 1}}</div>
                                <div class="product-image"></div>
                            </div>
                            <div class="post post-2 product-container">
                                <div class="item pointer">
                                    {{item.brand_name}}
                                </div>
                            </div>
                            <div class="post post-3 product-container">
                                <div class="item">
                                    {{item.description_english}}
                                </div>
                            </div>
                            <div class="post post-4 product-container">
                                <div class="item">${{item.basket.prices}}</div>
                            </div>
                            <div class="post post-5 product-container" >
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
                            <div class="post post-6 product-container key-delete">
                                <div class="item">{{subtotal(item.basket && item.basket.unique_hashes)}}</div>
                                <div class="icon-delete" @click="deleteThingsInBasket(index)"></div>
                            </div>
                        </div>
                    </div>
                    <div class="products-all-header products-all-total">
                        <div style="display: flex">
                            <div class="post-5" style="border-right: 2px solid white; width: 70px">{{getTotalQty}}pcs</div>
                            <div class="post-6" style="width: 125px;">${{getTotalPrice.toFixed(2)}}</div>
                        </div>
                    </div>
                    <div class="coupon-system">
                        <div class="title-coupon">USE COUPON CODE</div>
                        <div class="coupon-system-form">
                            <input placeholder="Enter discount code" class="coupon-enter">
                            <div class="button-add-coupon">Apply discount</div>
                        </div>
                    </div>
                    <div class="container-shipping">
                        <div class="shipping">
                            <div style="font-weight: bold;font-size: 14px;">Shipping Methods</div>
                        </div>
                        <div class="shipping-checkbox table">
                            <div class="postt">
                                <div class="styled-input-single d-flex align-items-center" style="margin-left: 8px">
                                    <input type="radio" id="simple1" name="fieldset-1" @click="active('simple1')"/>
                                    <label for="simple1"></label>
                                </div>
                                <div class="image">

                                </div>
                                <div class="date">
                                    no transportation
                                </div>
                                <div class="price">
                                    ${{data.simple1.value}}
                                </div>
                            </div>
                            <div class="postt">
                                <div class="styled-input-single d-flex align-items-center" style="margin-left: 8px">
                                    <input type="radio" id="simple2" name="fieldset-1" @click="active('simple2')"/>
                                    <label for="simple2"></label>
                                </div>
                                <!--<div class="image"></div>-->
                                <div style="height: 50px;padding: 0 10px;">{{data.simple2 && data.simple2.service_name}}</div>
                                <div class="date">
                                    2 days
                                </div>
                                <div class="price">
                                    ${{data.simple2.value}}
                                </div>
                            </div>
                            <div class="postt">
                                <div class="styled-input-single d-flex align-items-center" style="margin-left: 8px">
                                    <input type="radio" id="simple3" name="fieldset-1" @click="active('simple3')"/>
                                    <label for="simple3"></label>
                                </div>
                                <!--<div class="image"></div>-->
                                <div style="height: 50px;padding: 0 10px;">{{data.simple3 && data.simple3.service_name}}</div>
                                <div class="date">
                                    2 days
                                </div>
                                <div class="price">
                                    ${{data.simple3.value}}
                                </div>
                            </div>
                            <div class="postt">
                                <div class="styled-input-single d-flex align-items-center" style="margin-left: 8px">
                                    <input type="radio" id="simple4" name="fieldset-1" @click="active('simple4')"/>
                                    <label for="simple4"></label>
                                </div>
                                <!--<div class="image"></div>-->
                                <div style="height: 50px;padding: 0 10px;">{{data.simple4 && data.simple4.service_name}}</div>
                                <div class="date" >
                                    2 days
                                </div>
                                <div class="price">
                                    ${{data.simple4.value}}
                                </div>
                            </div>
                            <div class="postt">
                                <div class="styled-input-single d-flex align-items-center" style="margin-left: 8px">
                                    <input type="radio" id="simple5" name="fieldset-1" @click="active('simple5')"/>
                                    <label for="simple5"></label>
                                </div>
                                <!--<div class="image"></div>-->
                                <div style="height: 50px;padding: 0 10px;">{{data.simple5 && data.simple5.service_name}}</div>
                                <div class="date">
                                    2 days
                                </div>
                                <div class="price">
                                    ${{data.simple5.value}}
                                </div>
                            </div>
                            <div class="postt">
                                <div class="styled-input-single d-flex align-items-center" style="margin-left: 8px">
                                    <input type="radio" id="simple6" name="fieldset-1" @click="active('simple6')"/>
                                    <label for="simple6"></label>
                                </div>
                                <!--<div class="image"></div>-->
                                <div style="height: 50px;padding: 0 10px;">{{data.simple6 && data.simple6.service_name}}</div>
                                <div class="date">
                                    2 days
                                </div>
                                <div class="price">
                                    ${{data.simple6.value}}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="check-out-total">
                        <div>total: <span>${{getTotalPrice.toFixed(2)}}</span></div>
                    </div>
                    <div class="payments">
                        <div class="shipping">
                            <div style="font-weight: bold;font-size: 14px; padding: 6px; padding-left: 12px">
                                Payments Methods
                            </div>
                        </div>
                        <div class="payment-cards">
                            <div>
                                <div class="styled-input-single d-flex align-items-center" style="margin-left: 8px" @click="activeOther('paypal')">
                                    <input type="checkbox" name="fieldset-1"
                                           :value="payment.paypal"
                                           />
                                    <label :class="payment.paypal && 'active'"></label>
                                </div>
                                <svg width="68" height="17" viewBox="0 0 68 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12.8167 1.281C12.0365 0.392036 10.6262 0.0109163 8.82212 0.0109163H3.58595C3.40736 0.0108213 3.23459 0.0744522 3.09874 0.190356C2.9629 0.30626 2.87289 0.466825 2.84492 0.643162L0.665629 14.4673C0.655524 14.5314 0.659446 14.597 0.677125 14.6595C0.694804 14.7219 0.72582 14.7798 0.768036 14.8292C0.810252 14.8785 0.862665 14.9181 0.921662 14.9452C0.98066 14.9724 1.04484 14.9864 1.10978 14.9863H4.34236L5.15424 9.83844L5.12907 9.99965C5.15651 9.82367 5.24591 9.66326 5.38118 9.54734C5.51644 9.43142 5.68868 9.36761 5.86684 9.3674H7.40297C10.4207 9.3674 12.7836 8.14205 13.4738 4.59738C13.4944 4.49255 13.5121 4.39051 13.5274 4.2908C13.7325 2.98065 13.526 2.0889 12.8172 1.28147" fill="#003087"/>
                                    <path d="M52.3914 7.85944C52.1938 9.15655 51.2029 9.15655 50.2447 9.15655H49.6994L50.0821 6.73473C50.1054 6.58843 50.2312 6.4808 50.3794 6.4808H50.6297C51.2822 6.4808 51.8983 6.4808 52.2161 6.85214C52.4058 7.07438 52.4631 7.40425 52.3914 7.85944ZM51.9743 4.47505H48.3595C48.2398 4.47511 48.124 4.51782 48.033 4.59553C47.9419 4.67323 47.8815 4.78084 47.8627 4.89903L46.4021 14.1647C46.3953 14.2076 46.398 14.2515 46.4098 14.2933C46.4217 14.3352 46.4424 14.374 46.4707 14.407C46.4989 14.4401 46.534 14.4666 46.5735 14.4849C46.613 14.5031 46.6559 14.5126 46.6994 14.5127H48.5543C48.7272 14.5127 48.8745 14.3869 48.9015 14.2164L49.3163 11.5886C49.3545 11.3449 49.5652 11.1646 49.8122 11.1646H50.9559C53.3375 11.1646 54.7114 10.0134 55.0703 7.72992C55.232 6.73193 55.0768 5.94733 54.6093 5.39802C54.0953 4.7942 53.1841 4.47458 51.9747 4.47458" fill="#009CDE"/>
                                    <path d="M26.6102 7.85949C26.4126 9.1566 25.4218 9.1566 24.4631 9.1566H23.9178L24.3004 6.73477C24.3237 6.58848 24.4496 6.48085 24.5978 6.48085H24.848C25.5005 6.48085 26.1167 6.48085 26.4345 6.85219C26.6247 7.07443 26.682 7.40429 26.6102 7.85949ZM26.1931 4.47509H22.5783C22.3313 4.47509 22.1207 4.65493 22.082 4.89907L20.6209 14.1647C20.6141 14.2077 20.6167 14.2516 20.6285 14.2935C20.6403 14.3353 20.6611 14.3742 20.6893 14.4072C20.7176 14.4403 20.7527 14.4669 20.7922 14.4851C20.8317 14.5033 20.8747 14.5127 20.9182 14.5127H22.6445C22.8915 14.5127 23.1017 14.3329 23.1404 14.0888L23.5352 11.5891C23.5734 11.345 23.784 11.1652 24.031 11.1652H25.1747C27.5563 11.1652 28.9302 10.0134 29.2891 7.72997C29.4508 6.73198 29.2956 5.94738 28.8282 5.39807C28.3141 4.79424 27.403 4.47463 26.1936 4.47463L26.1931 4.47509ZM34.5854 11.1861C34.4176 12.1748 33.6332 12.8387 32.6317 12.8387C32.1297 12.8387 31.7275 12.677 31.4693 12.3714C31.213 12.0686 31.117 11.6367 31.1981 11.1563C31.3538 10.176 32.1516 9.49112 33.1378 9.49112C33.6295 9.49112 34.028 9.65419 34.2918 9.96263C34.557 10.2734 34.6614 10.7076 34.5854 11.1861ZM36.9977 7.81756H35.2668C35.1948 7.81747 35.1252 7.84311 35.0705 7.88985C35.0158 7.93659 34.9796 8.00134 34.9685 8.07241L34.893 8.55603L34.7718 8.38085C34.3971 7.83713 33.5615 7.65495 32.7272 7.65495C30.815 7.65495 29.1815 9.10395 28.8636 11.1353C28.6981 12.1496 28.933 13.1183 29.5082 13.7943C30.0362 14.4154 30.7898 14.674 31.6879 14.674C33.2296 14.674 34.0844 13.6843 34.0844 13.6843L34.007 14.1652C34.0002 14.2082 34.0028 14.2522 34.0147 14.2941C34.0265 14.336 34.0473 14.3748 34.0756 14.4079C34.1039 14.441 34.1391 14.4675 34.1786 14.4857C34.2182 14.5039 34.2613 14.5133 34.3048 14.5132H35.8633C36.1103 14.5132 36.321 14.3338 36.3597 14.0892L37.2955 8.16606C37.3023 8.12303 37.2996 8.07905 37.2877 8.03715C37.2758 7.99525 37.2549 7.95642 37.2266 7.92334C37.1983 7.89027 37.1631 7.86372 37.1235 7.84554C37.0839 7.82736 37.0408 7.81797 36.9972 7.81802" fill="#003087"/>
                                    <path d="M60.3634 11.1861C60.1956 12.1748 59.4113 12.8387 58.4097 12.8387C57.9078 12.8387 57.5055 12.677 57.2474 12.3714C56.991 12.0686 56.895 11.6367 56.9761 11.1563C57.1318 10.176 57.9292 9.49112 58.9158 9.49112C59.4075 9.49112 59.806 9.65419 60.0698 9.96263C60.335 10.2734 60.4394 10.7076 60.3634 11.1861ZM62.7757 7.81756H61.0448C60.9728 7.81747 60.9032 7.84311 60.8485 7.88985C60.7938 7.93659 60.7576 8.00134 60.7465 8.07241L60.671 8.55603L60.5498 8.38085C60.1751 7.83713 59.3395 7.65496 58.5052 7.65496C56.5935 7.65496 54.9599 9.10395 54.6416 11.1353C54.4762 12.1496 54.7115 13.1183 55.2866 13.7943C55.8147 14.4154 56.5683 14.674 57.4664 14.674C59.0086 14.674 59.8633 13.6843 59.8633 13.6843L59.786 14.1652C59.779 14.2081 59.7815 14.2521 59.7932 14.294C59.8049 14.3359 59.8256 14.3747 59.8539 14.4079C59.8821 14.441 59.9172 14.4675 59.9568 14.4857C59.9963 14.5039 60.0393 14.5133 60.0829 14.5132H61.6409C61.8879 14.5132 62.0986 14.3338 62.1377 14.0892L63.0735 8.16606C63.0803 8.12303 63.0776 8.07905 63.0657 8.03715C63.0538 7.99525 63.033 7.95642 63.0046 7.92334C62.9763 7.89027 62.9411 7.86372 62.9015 7.84554C62.8619 7.82736 62.8188 7.81797 62.7753 7.81803" fill="#009CDE"/>
                                    <path d="M46.2178 7.81799H44.4775C44.3112 7.81799 44.156 7.90046 44.0627 8.03837L41.6625 11.5719L40.6451 8.17628C40.6141 8.07271 40.5505 7.98189 40.4638 7.91727C40.3771 7.85265 40.2719 7.81768 40.1637 7.81752H38.4537C38.4058 7.81755 38.3585 7.829 38.3159 7.85094C38.2733 7.87287 38.2365 7.90466 38.2086 7.94365C38.1807 7.98264 38.1625 8.02772 38.1555 8.07515C38.1486 8.12258 38.153 8.17098 38.1685 8.21635L40.084 13.8381L38.2822 16.3796C38.2504 16.4247 38.2316 16.4777 38.2278 16.5328C38.224 16.5879 38.2354 16.643 38.2608 16.692C38.2862 16.741 38.3246 16.7821 38.3718 16.8109C38.4189 16.8396 38.4731 16.8548 38.5283 16.8549H40.2667C40.4308 16.8549 40.585 16.7743 40.6792 16.6391L46.4648 8.29089C46.4962 8.24576 46.5147 8.1929 46.5182 8.13803C46.5216 8.08316 46.51 8.02839 46.4846 7.97966C46.4591 7.93092 46.4208 7.89009 46.3738 7.86159C46.3267 7.83309 46.2728 7.81801 46.2178 7.81799Z" fill="#003087"/>
                                    <path d="M64.8196 4.7298L63.3357 14.165C63.3289 14.208 63.3316 14.252 63.3435 14.2938C63.3553 14.3357 63.3761 14.3745 63.4044 14.4076C63.4327 14.4406 63.4679 14.4672 63.5074 14.4854C63.5469 14.5036 63.5899 14.513 63.6335 14.5131H65.1253C65.3723 14.5131 65.583 14.3332 65.6217 14.0891L67.0846 4.82298C67.0915 4.77997 67.0888 4.736 67.077 4.6941C67.0652 4.6522 67.0444 4.61336 67.0161 4.58027C66.9877 4.54719 66.9526 4.52063 66.913 4.50245C66.8734 4.48426 66.8304 4.47488 66.7868 4.47494H65.1174C65.0455 4.47476 64.976 4.50032 64.9214 4.54699C64.8667 4.59365 64.8306 4.65834 64.8196 4.72933" fill="#009CDE"/>
                                    <path d="M12.8167 1.281C12.0365 0.392036 10.6262 0.0109163 8.82212 0.0109163H3.58595C3.40736 0.0108213 3.23459 0.0744522 3.09874 0.190356C2.9629 0.30626 2.87289 0.466825 2.84492 0.643162L0.665629 14.4673C0.655524 14.5314 0.659446 14.597 0.677125 14.6595C0.694804 14.7219 0.72582 14.7798 0.768036 14.8292C0.810252 14.8785 0.862665 14.9181 0.921662 14.9452C0.98066 14.9724 1.04484 14.9864 1.10978 14.9863H4.34236L5.15424 9.83844L5.12907 9.99965C5.15651 9.82367 5.24591 9.66326 5.38118 9.54734C5.51644 9.43142 5.68868 9.36761 5.86684 9.3674H7.40297C10.4207 9.3674 12.7836 8.14205 13.4738 4.59738C13.4944 4.49255 13.5121 4.39051 13.5274 4.2908C13.7325 2.98065 13.526 2.0889 12.8172 1.28147" fill="#003087"/>
                                    <path d="M6.02677 4.30814C6.05127 4.15406 6.12989 4.01376 6.24853 3.9124C6.36718 3.81104 6.51807 3.75528 6.67413 3.7551H10.7792C11.2653 3.7551 11.7187 3.78678 12.1331 3.85294C12.3596 3.88938 12.5837 3.93948 12.8042 4.00297C13.0546 4.07334 13.2969 4.16985 13.5271 4.2909C13.7331 2.98029 13.5261 2.089 12.8172 1.2811C12.0366 0.392602 10.6268 0.011484 8.82266 0.011484H3.58603C3.40759 0.0116107 3.23505 0.0753396 3.09939 0.191224C2.96374 0.307108 2.87387 0.467552 2.84592 0.64373L0.665702 14.4665C0.655529 14.5306 0.659384 14.5962 0.677002 14.6587C0.69462 14.7212 0.725583 14.7791 0.767756 14.8285C0.809929 14.8778 0.862309 14.9175 0.921288 14.9447C0.980267 14.9719 1.04444 14.986 1.10939 14.986H4.34244L5.15431 9.83761L6.02677 4.30814Z" fill="#003087"/>
                                    <path d="M13.5269 4.29055C13.5109 4.39306 13.493 4.49527 13.4733 4.59712C12.7831 8.14133 10.4202 9.36715 7.40244 9.36715H5.86584C5.6877 9.36728 5.51548 9.43108 5.38028 9.54702C5.24507 9.66296 5.15578 9.82341 5.12854 9.9994L4.34183 14.9856L4.11812 16.4001C4.10923 16.4563 4.11262 16.5137 4.12806 16.5684C4.14351 16.6231 4.17064 16.6739 4.20759 16.7171C4.24454 16.7603 4.29042 16.795 4.34208 16.8188C4.39374 16.8426 4.44994 16.8549 4.50681 16.8549H7.23186C7.55437 16.8549 7.82841 16.62 7.87921 16.3018L7.90578 16.163L8.41938 12.909L8.452 12.7292C8.47642 12.575 8.55508 12.4346 8.67384 12.3332C8.7926 12.2318 8.94365 12.1761 9.09982 12.1761H9.50762C12.1474 12.1761 14.2143 11.1045 14.8184 8.00342C15.07 6.70818 14.9395 5.62586 14.2731 4.86596C14.0614 4.63036 13.8086 4.43536 13.5269 4.29055Z" fill="#009CDE"/>
                                    <path d="M12.8044 4.00307C12.6991 3.97186 12.5905 3.9439 12.4786 3.91921C12.3668 3.89452 12.2512 3.87262 12.1328 3.85398C11.718 3.78642 11.265 3.75474 10.7785 3.75474H6.67389C6.51766 3.75455 6.36651 3.81025 6.24778 3.91177C6.12905 4.01329 6.05057 4.15392 6.02654 4.30825L5.15407 9.83865L5.12891 9.99939C5.15615 9.8234 5.24544 9.66295 5.38064 9.54701C5.51585 9.43107 5.68807 9.36727 5.86621 9.36714H7.40281C10.4205 9.36714 12.7834 8.14179 13.4737 4.59711C13.4942 4.49228 13.5114 4.39072 13.5273 4.29054C13.345 4.19519 13.1551 4.11509 12.9596 4.05106C12.9088 4.03429 12.8571 4.01845 12.8044 4.00261" fill="#012169"/>
                                </svg>

                                <div class="payment-cards-text">PayPal Express Checkout</div>
                            </div>
                            <div>
                                <div class="styled-input-single d-flex align-items-center" style="margin-left: 8px" @click="activeOther('visa')">
                                    <input type="checkbox"  name="fieldset-1"
                                           :value="payment.visa"
                                           />
                                    <label :class="payment.visa && 'active'"></label>
                                </div>
                                <svg width="51" height="16" viewBox="0 0 51 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M47.0897 0.86731H43.9766C43.0097 0.86731 42.2905 1.13165 41.8656 2.09939L35.8828 15.7041H40.1141C40.1141 15.7041 40.8044 13.8747 40.9608 13.4741C41.4241 13.4741 45.5352 13.4803 46.1207 13.4803C46.2409 13.9986 46.6119 15.7041 46.6119 15.7041H50.35L47.0897 0.86731ZM42.1201 10.4356C42.4516 9.58332 43.7253 6.2867 43.7253 6.2867C43.7036 6.32728 44.0538 5.42823 44.2621 4.86946L44.5337 6.14937C44.5337 6.14937 45.3058 9.69362 45.4674 10.4356H42.1201Z" fill="#2566AF"/>
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M20.6248 0.850708L18.1055 15.6958H22.1348L24.6562 0.850708H20.6248Z" fill="#2566AF"/>
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M14.7261 0.867341L10.7798 10.9913L10.359 9.46264C9.58072 7.62081 7.37125 4.97563 4.77734 3.30861L8.38583 15.6885L12.6493 15.6812L18.9948 0.864258L14.7261 0.867341Z" fill="#2566AF"/>
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M8.83174 1.92984C8.59755 1.02557 7.91874 0.756026 7.07618 0.723755H0.829188L0.777344 1.01934C5.63883 2.2035 8.85563 5.05673 10.1904 8.48766L8.83174 1.92984Z" fill="#E6A540"/>
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M32.8265 3.69674C34.1447 3.67592 35.1002 3.96519 35.8422 4.2649L36.2059 4.43662L36.7511 1.21909C35.9531 0.918358 34.7022 0.595825 33.1415 0.595825C29.1599 0.595825 26.3535 2.60932 26.3317 5.49485C26.3059 7.62707 28.3308 8.81746 29.8605 9.52819C31.4305 10.2566 31.957 10.7197 31.9497 11.37C31.9373 12.3638 30.6978 12.8196 29.5402 12.8196C27.9267 12.8196 27.0696 12.5959 25.7462 12.0423L25.2271 11.8051L24.6602 15.1277C25.6032 15.5428 27.3432 15.8998 29.1496 15.9185C33.385 15.9185 36.1375 13.9289 36.1666 10.8456C36.1842 9.15878 35.1095 7.87159 32.7808 6.81536C31.3715 6.12654 30.5093 5.66863 30.5175 4.97351C30.5175 4.35648 31.2491 3.69674 32.8265 3.69674Z" fill="#2566AF"/>
                                </svg>
                                <svg width="32" height="19" viewBox="0 0 32 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M9.76553 0.00012207C14.9884 0.00012207 19.2225 4.24899 19.2225 9.49024C19.2225 14.7315 14.9884 18.9803 9.76553 18.9803C4.54264 18.9803 0.308594 14.7315 0.308594 9.49024C0.308594 4.24899 4.54264 0.00012207 9.76553 0.00012207Z" fill="#EA001B"/>
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M21.5858 0.00012207C26.8088 0.00012207 31.0428 4.24899 31.0428 9.49024C31.0428 14.7315 26.8088 18.9803 21.5858 18.9803C16.3629 18.9803 12.1289 14.7315 12.1289 9.49024C12.1289 4.24899 16.3629 0.00012207 21.5858 0.00012207Z" fill="#F3C421"/>
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M12.0586 9.45425C12.0586 12.4693 13.4584 15.1559 15.6407 16.8953C17.823 15.1558 19.2229 12.4693 19.2229 9.45425C19.2229 6.43916 17.8231 3.75258 15.6407 2.01318C13.4584 3.75273 12.0586 6.43922 12.0586 9.45425Z" fill="#FF5F01"/>
                                </svg>
                                <div class="payment-cards-text">Credit Card</div>
                            </div>
                        </div>
                    </div>
                    <div class="coupon-system">
                        <div class="title-coupon">ORDER NOTE</div>
                        <div class="coupon-system-form">
                            <textarea
                                placeholder="Enter comments"
                                class="coupon-enter" style="margin-right: 0">
                            </textarea>
                        </div>
                    </div>
                    <div style="background: #DADADA;width: 100%;height: 1px; margin-bottom: 20px; margin-top: 20px"></div>
                    <div class="select-result-simple">
                        <div class="styled-input-single d-flex align-items-center checked">
                            <input type="checkbox" id="news" name="fieldset-1" v-model="news"/>
                            <label for="news" class="check">Sign Up for Our Newsletter</label>
                        </div>
                    </div>
                    <div class="select-result-simple">
                        <div class="styled-input-single d-flex align-items-center checked">
                            <input type="checkbox" id="agree" name="fieldset-1" v-model="agree"/>
                            <label for="agree" class="check">I agree to the Terms and Conditions
                                <span class="badge-require">*</span>
                            </label>
                        </div>
                    </div>
                    <div class="all-total">
                        <div class="button-continue-checkout pointer" style="width: 100%; margin-bottom: 30px"
                             @click="order()">
                             Place order
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    import {CookieHelper} from "../../helpers/cookie";
    import {Basket} from "../../helpers/basket";
    import Dropdown from "../../common/Dropdown";
    import {Auth} from "../../api/auth";
    import {Products} from "../../api/products";
    import * as cookie from "cookie";
    import {Token} from "../../helpers/token";
    import { base64encode } from 'nodejs-base64';
    import Validator from "../../validator/validator";

    const action = [
        'email',
        'last_name',
        'first_name',
        'street_address',
        'street_address_two',
        'city',
        'state',
        'postal_code',
        'country',
        'phone'
    ]

    export default {
        fetch({store,req}){
            const isHeader = req && req.headers && req.headers.cookie;

            const token= store.getters['cookie/getToken'];
            const options = {
                store: store,
                req: req,
                get: 'token'
            };
            if(isHeader) {
                const data = cookie.parse(req.headers.cookie);
                const Token = data['token'];
                const basket = data['basket-data'];
                data['token'] && store.dispatch('cookie/action_cookie',{
                    name: 'token',
                    data: Token
                });
                data['basket-data'] && store.dispatch('cookie/action_cookie',{
                    name: 'basket',
                    data: basket
                });
            }

            const BASKET = new Basket(store);
            let items = BASKET.getAllThing() || store.getters['cookie/getAllThing'];
            if(items && items != 'undefined'){
                items = (items && typeof items == 'string' ? JSON.parse(items) : items) || []
            } else {
                items = []
            }
            const getUserInServer = (token) => Auth.getUser(token)
                .then(res => {
                    store.dispatch('auth/actionValue', {
                        name: 'userData',
                        data: res.body
                    });
                    return res.body
                })
                .catch(res => console.log(res));
            if (!isHeader && token) return getUserInServer(token);

            return  CookieHelper.setCookieDataInStore(isHeader, options, getUserInServer)
                .then(() => {
                    const newArray = JSON.parse(JSON.stringify(items));
                    let arrayHash = newArray
                        .map(item => (item.basket && item.basket.unique_hashes) || item.unique_hash)
                        .filter(item => item);
                    return Products.getAvailableProductsInBasket(arrayHash)
                })
                .then(res => {
                    const data = res.body;
                    const dataDayFormat = (data) => {
                        if(!data) return '';
                        const statics = data;
                        const regex = /\d+/g;
                        data && (data = data.match(regex));
                        data && (data = data[data.length - 1]);
                        if (data && data.indexOf(1) > -1) return `${statics} day`;
                        return `${statics} days`;
                    };
                    items = items.map(item => {
                        const find = data
                            .find(prod => {
                                let hash = ((item.basket && item.basket.unique_hashes) || item.unique_hash);
                                return hash === prod.unique_hash
                            });
                        if(!find) return item;
                        Object.keys(item).forEach(key => {
                            `${item[key]}` && `${find[key]}` && (item[key] == find[key])
                            const regex = /\d+/g;
                            const warehouses = item.warehouses ? item.warehouses.split(' ') : [];
                            item.basket.warehousesNumber = warehouses[0] && warehouses[0].match(regex);
                            item.basket.prices = item.price || item.basket.prices;
                            item.basket.available = item.qty || item.basket.available ;
                            item.basket.warehousesNumber = !item.basket.warehousesNumber ?
                                1 : item.basket.warehousesNumber[0];
                            !item.basket.warehousesDay && (item.basketwarehousesDay = dataDayFormat(warehouses[1]));
                        });
                        return item
                    });
                    store.dispatch('cookie/action_cookie',{
                        name: 'basket',
                        data: items
                    });
                    return {afterRequest: items}
                })
                .catch(res => console.log(res))
        },
        components: {
            'dropdown': Dropdown,
        },
        data() {
            return {
                langs: ['JavaScript', 'PHP', 'HTML', 'CSS', 'Ruby', 'Python', 'Erlang'],
                BASKET: new Basket(this.$store),
                TOKEN: new Token(this.$store),
                items:[],
                data: {
                    simple1:{
                        select: false,
                        value: 5
                    },
                    simple2:{
                        select: false,
                        value:''
                    },
                    simple3:{
                        select: false,
                        value: ''
                    },
                    simple4:{
                        select: false,
                        value: ''
                    },
                    simple5:{
                        select: false,
                        value: ''
                    },
                    simple6:{
                        select: false,
                        value: ''
                    },
                },
                payment:{
                    paypal: false,
                    visa: false,
                },
                news:false,
                agree:false,
                addressSame:false,
                crAc: false,
                errorRegister: {},
                rates: []
            }
        },

        created(){
            this.getItems()
        },

        mounted(){
            window.addEventListener('click', () => this.getItems());
        },

        computed: {

            dataRegister(){
                return JSON.parse(JSON.stringify(this.$store.getters['auth/get_user']));
            },

            getTotalPrice() {
                return this.sum(this.items, true) + Number(this.getShipping)
            },

            getShipping(){
                let array = [];
                Object.keys(this.data).forEach(item => array.push(this.data[item]));
                const item = array.find(item => item.select);
                return item ? item.value : 0;
            },

            getTotalQty(){
                return this.sum(this.items, false)
            }

        },

        methods: {

            active(flag){
                 Object.keys(this.data).forEach(item => this.data[item].select = false);
                 this.data[flag].select = true;
            },

            activeOther(flag){
                Object.keys(this.payment).forEach(item => this.payment[item]= false);
                this.payment[flag] = true;
            },

            setUser(event, data, type){
                data[type] = event.target.value;
                this.$store.dispatch('auth/actionValue',{
                    name:'userData',
                    data:data
                })
            },

            subtotal(hash){
                if(!hash) return 0;
                const data = this.items.find(item => item.basket && item.basket.unique_hashes === hash);
                if(!data || !data.basket) return 0;
                return  (+data.basket.prices * data.basket.qty).toFixed(2)
            },

            sum(items, type){
                if(items.length == 0) return 0;
                return JSON.parse(JSON.stringify(items))
                    .map(item => type ? (+item.basket.prices * item.basket.qty ): item.basket.qty)
                    .reduce((a,b) => a + b)
            },

            order(){
                if(!this.agree) return this.toStore('error', 'You don`t confirm checked');
                if(!this.payment.paypal && !this.payment.visa) return this.toStore('error', 'You don`t  choice payment');
                let items = JSON.parse(JSON.stringify(this.items));
                items = items.map(item => {
                    const obj = {};
                    obj.unique_hash = item.basket.unique_hashes;
                    obj.count = item.basket.qty;
                    return obj
                });
                this.errorRegister = {}
                let error = JSON.parse(JSON.stringify(this.errorRegister));

                action.forEach(item => {
                    error[item] = Validator.set(
                        this.dataRegister[item],
                        ['required'],
                        'This is a required field'
                    );
                });

                let error_boolean = !error.email.errors &&
                    !error.last_name.errors &&
                    !error.street_address.errors &&
                    !error.street_address_two.errors &&
                    !error.city.errors &&
                    !error.state.errors &&
                    !error.postal_code.errors &&
                    !error.country.errors &&
                    !error.phone.errors;

                if(this.payment.paypal && error_boolean){
                    this.toStore('error', 'Wait ...');
                    let obj = {
                        data: items,
                        user:{
                            ...this.dataRegister,
                            create_ac: this.crAc,
                            same_address: this.addressSame
                        }
                    };
                    this.errorRegister = {};
                    let url_data = `http://cruiser-webstore-back.qbex.io/paypal?result=${base64encode(JSON.stringify(obj))}&amount=${this.getTotalPrice}`;
                    window.location.href = url_data;
                } else {
                    !error_boolean && this.toStore('error', 'You have not entered all the required fields.');
                    !this.payment.paypal && this.toStore('error', 'Only paypal is available');
                    this.errorRegister = error
                }
            },

            isAutorize() {
                if(!this.TOKEN.getToken()) {
                    this.$store.dispatch('cookie/action_cookie',{
                        name: 'token',
                        data: null
                    });
                    return false;
                }
                return true;
            },

            toggleQty(data, operation) {

                if (!data.basket.active)    return this.toStore('error', 'Not available warehouse');
                if (!data.basket.available) return this.toStore('error', 'Not available parts');
                if (data.basket.qty == data.basket.available && operation == '+'){
                    return this.toStore('error', 'Not available parts');
                }
                if (data.basket.qty == 0 && operation == '-'){
                    return this.toStore('error', 'Qty cannot be less than 0');
                }
                let basketContainer = this.BASKET.getThingByIndex(data.basket.unique_hashes);
                const basketItemIndex = this.getLocalStorageFindIndexThings(data.basket.unique_hashes);
                data.basket.qty = eval(`${data.basket.qty} ${operation} 1`);
                basketContainer&& basketContainer.basket && (basketContainer.basket.qty = data.basket.qty);
                if(basketContainer && basketItemIndex > -1){
                    this.BASKET.changeItemInBasketByIndex(basketItemIndex, basketContainer);
                    this.toStore('info', 'Successfully update basket');
                }
                this.getItems()
            },

            getLocalStorageFindIndexThings (id) {
                return this.BASKET.getIndexThing(id)
            },

            toStore(type, mes) {
                this.$store.commit('error/setValue', {
                    name: 'data',
                    data: {type: type, text: mes, active: true}
                });
            },

            getItems(){
                const items = this.BASKET.getAllThing() || this.$store.getters['cookie/getAllThing'];
                this.items = (typeof items == 'string' ? JSON.parse(items) : items) || []
            },

            methodToRunOnSelect(payload) {
                this.object = payload;
            },

            deleteThingsInBasket(index) {
                this.BASKET.deleteThing(index);
                this.$store.commit('error/setValue', {
                    name: 'data',
                    data: {type: 'red', text: 'Successfully removed from the basket', active: true}
                });
                this.items = this.getItems()
            },

            save(){

                let error = JSON.parse(JSON.stringify(this.errorRegister));

                action.forEach(item => {
                    error[item] = Validator.set(
                        this.dataRegister[item],
                        ['required'],
                        'This is a required field'
                    );
                });

                let error_boolean = !error.email.errors &&
                    !error.last_name.errors &&
                    !error.street_address.errors &&
                    !error.street_address_two.errors &&
                    !error.city.errors &&
                    !error.state.errors &&
                    !error.postal_code.errors&&
                    !error.country.errors &&
                    !error.phone.errors;

                if(error_boolean){
                    this.toStore('error', 'Wait ...');
                    Products.staticgetCareer(this.dataRegister, this.items)
                        .then(res=> {
                            this.errorRegister = {};
                            let data = res.body.rates.sort(() => Math.random() - 0.5).splice(0,5);

                            Object.keys(this.data).forEach((item, index) => {
                                if(index == 0) return;
                                this.data[item] = {
                                    ...data[index - 1],
                                    ...this.data[item]
                                };

                                this.data[item].value = data[index - 1].total_price;
                            })

                        })

                } else this.errorRegister = error

            }

        },
        destroyed() {
            window.removeEventListener('click', () => this.getItems())
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

    .check-out{
        width: 100%;
    }
    .check-product{
        width: 70%;
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
        /*height: 30px;*/
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
        /*height: 40px;*/
    }

    .table-products-items .post > div {
        padding: 20px 10px;
    }

    .post > div.item {
        font-weight: normal;
        font-size: 12px;
    }

    .post-1 {
        /*width: 100px;*/
        /*max-width: 100px;*/
        grid-area: post-1;
        grid-column: 1;
    }

    .post-2 {
        /*width: calc(124px + 57px);*/
        /*max-width: calc(124px + 57px);*/
        grid-area: post-2;
        grid-column: 2
    }

    .post-3 {
        /*width: 430px;*/
        /*max-width: 439px;*/
        grid-area: post-3;
        grid-column: 3
    }

    .post-4 {
        /*width: 105px;*/
        /*max-width: 105px;*/
        grid-area: post-4;
        grid-column: 4
    }

    .post-5 {
        /*width: 105px;*/
        /*max-width: 105px;*/
        grid-area: post-5;
        grid-column: 5
    }

    .post-6 {
        /*width: 145px;*/
        /*max-width: 145px;*/
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
    .coupon-system{
        margin-top: 25px;
    }
    .coupon-system .title-coupon{
        font-style: normal;
        font-weight: bold;
        font-size: 14px;
        letter-spacing: -0.12px;
        text-transform: uppercase;
        color: #32405B;
        margin: 14px 0;
    }

    .coupon-system > .coupon-system-form{
        display: flex;
    }
    .coupon-enter{
        background: #ECF0F3;
        width: 100%;
        padding: 11px 15px;
        border: none;
        margin-right: 20px;
    }
    .button-add-coupon{
        background: #32405B;
        padding: 10px 30px;
        color: #FFFFFF;
        text-transform: uppercase;
        font-weight: bold;
        font-size: 13px;
        line-height: 20px;
        width: 190px;
    }
    .container-shipping{
        box-shadow: 0px 6px 21px rgba(0, 0, 0, 0.15);
        margin-bottom: 40px;
    }
    .shipping{
        display: flex;
        align-items: center;
        background: #91A0BC;
        width: 100%;
        max-width: 100%;
        margin-top: 20px;
        padding: 10px 0;
    }
    .shipping div {
        padding: 14px;
        font-style: normal;
        font-weight: bold;
        font-size: 14px;
        letter-spacing: -0.12px;
        text-transform: uppercase;
        color: #FFFFFF;
    }
    .shipping input{
        padding: 8px 15px;
        padding-bottom: 7px;
        margin-left: 20px;
    }

    .table{
        display: flex;
        grid-template-columns: repeat(6, 1fr);
        background: #FFFFFF;
        font-weight: bold;
        font-size: 10px;
        line-height: 0px;
        letter-spacing: -0.0566328px;
        color: #32405B;
        padding: 17px 0;
    }
    .postt {
        display: flex;
        flex-direction: column;
        align-items: center;
        border-right: 1px solid #D4D7DE;
        width: calc(100% / 6);
        color: #32405B;
        font-weight: normal;
        font-size: 10px;
        line-height: 16px;
        letter-spacing: -0.07px;
    }

    .postt:last-child{
        border-right: none;
    }
    .styled-input-single label:before {
        margin: 0;
        margin-top: -3px;
    }
    .postt .image{
        width: 100%;
        height: 40px;
        background-image: url("./../../assets/gruz.png");
        background-position: center;
        background-repeat: no-repeat;
        background-size: contain;
        margin-bottom: 10px;
    }
    .postt .date{
        text-overflow: ellipsis;
        width: 100%;
        height: 30px;

        max-height: 30px;
        white-space: nowrap; /* Запрещаем перенос строк */
        overflow: hidden;
        display: flex;
        justify-content: center;
        align-items: center;
        background: #F3F6F8;
    }
    .postt .price{
        display: flex;
        justify-content: center;
        align-items: center;margin-top: 10px;
    }
    .all-total{
        width: 100%;
        display: flex;
        justify-content: flex-end;
    }
    .button-continue-checkout{
        width: 300px;
        height: 20px;
        padding: 10px 0;
        display: flex;
        justify-content: center;
        align-items: center;
        color: #FFFFFF;
        text-transform: uppercase;
        font-weight: bold;
        font-size: 13px;
        line-height: 20px;
        background: #32405B;
    }
    .button-continue-checkout-back-image{
        width: 20px;
        height: 20px;
        background-color: #CA4635;
        background-image: url("./../../assets/back-arrow.png");
        background-repeat: no-repeat;
        background-position: center;
        padding: 10px;
    }
    .button-continue-checkout-back{
        width: 200px;
    }
    .total-container{
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        margin-bottom: 100px;
    }
    .total-container .total{
        font-family: Montserrat;
        font-style: normal;
        font-weight: bold;
        font-size: 12px;
        letter-spacing: -0.0566328px;
        text-transform: uppercase;
        color: #32405B;
        margin-bottom: 20px;
    }
    .total-container .total span{
        font-weight: bold;
        font-size: 22px;
        letter-spacing: -0.123562px;
        text-transform: uppercase;
        color: #CA4635;
    }
    .product-image{
        width: 65px;
        height: 53px;
        padding: 0!important;
        background-image: url("./../../assets/test_cart.png");
    }
    .product-container{
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .key-delete{
        display: flex;
        justify-content: space-around;
    }
    .icon-delete{
        width: 11px;
        height: 11px;
        background-image: url("./../../assets/close.svg");
        background-repeat: no-repeat;
        cursor: pointer;
        background-position: center;
    }

    .personal-data-item {
        width: 100%;
    }

    .personal-data-item > label {
        display: block;
        width: 100%;
        color: #32405B;
        letter-spacing: -0.06px;
        text-transform: uppercase;
        font-weight: bold;
        font-size: 11px;
        margin-bottom: 10px;
        margin-top: 32px;
    }

    .personal-data-item > div input {
        background: #ECF0F3;
        padding: 13px;
        width: calc(100% - 26px);
        border: none;
        color: #BABABA;
    }

    .personal-data-item > div input.input-error{
        border: 1px solid #E3B1AB;
    }

    .personal-data-group{
        display: flex;
        align-items: flex-end;
    }

    .personal-data-group > .personal-data-item:first-child{
        margin-right: 15px;
    }

    .check-out{
        display: flex;
        justify-content: space-between;
    }

    .data{
        margin-right: 20px;
        box-shadow: 0px 6px 21px rgba(0, 0, 0, 0.15);

        width: 400px;
    }

    .data > div{
        padding: 20px;
    }
    .data > .products-all-header{
        padding: 0;
    }
    .sotial-login {
        width: 100%;
        display: flex;
        justify-content: space-between;
        margin-top: 30px;
    }

    .sotial-login > div {
        width: 214px;
        height: 40px;
        max-width: 214px;
        max-height: 40px;
        background: #FFFFFF;
        border: 1px solid #D4D7DE;
    }

    .sotial-login > div:first-child {
        margin-right: 20px;
    }

    .sotial-login > div.facebook {
        background: #3B5998;
        font-family: Montserrat;
        font-style: normal;
        font-weight: bold;
        font-size: 13px;
        line-height: 20px;
        text-transform: uppercase;
        color: #FFFFFF;
    }
    .badge-require{
        color: #CA4635!important;
        font-weight: normal;
        font-size: 14px;
        margin-left: 5px;
    }
    .check-out-total{
        background: #ECF0F3;
        display: flex;
        justify-content: flex-end;
        padding: 12px;
        font-weight: bold;
        font-size: 12px;
        letter-spacing: -0.0566328px;
        text-transform: uppercase;
        color: #32405B;
        align-items: center;
    }
    .check-out-total span{
        font-weight: bold;
        font-size: 22px;
        line-height: 0px;
        letter-spacing: -0.123562px;
        text-transform: uppercase;
        color: #CA4635;
        margin-right: 20px;
        margin-left: 10px;
    }
    .check-out-total div{
        display: flex;
        align-items: center;
    }

    .payments{
        box-shadow: 0px 6px 21px rgba(0, 0, 0, 0.15);
    }
    .payment-cards{
        display: flex;
        padding: 6px;
        justify-content: space-between;
    }
    .payment-cards > div{
        padding: 22px;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        font-style: normal;
        font-weight: normal;
        font-size: 12px;
        line-height: 16px;
        letter-spacing: -0.07px;
        color: #32405B;
    }
    .payment-cards .styled-input-single {
        margin-bottom: 10px;
    }
    .payment-cards > div:first-child{
        border-right:1px solid #D4D7DE
    }
    .checked{
        padding: 0;
        padding-left: 20px;
    }
    .styled-input-single label {
        font-family: Montserrat;
        font-style: normal;
        font-weight: normal;
        font-size: 12px;
        line-height: 16px;
        letter-spacing: -0.07px;
        color: #32405B;
    }
    .styled-input-single label:hover{
        text-decoration: underline;
    }
    .styled-input-single label.check:before{
        border-radius: 0;
        top: 33%
    }
    .styled-input-single label.check:after{
        content: '\2713';
        top: 2px;
        left: 3px;
        color: #CA4635;
        background: none;
    }
    .post-1{
        width: 90px;
        max-width: 90px;
    }
    .post-2{
        width: 100px;
        max-width: 100px;
    }
    .post-3{
        width: 180px;
        max-width: 180px;
    }
    .post-4{
        width: 90px;
        max-width: 90px;
    }
</style>

