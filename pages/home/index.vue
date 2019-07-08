<template>
    <div>
        <carusel-component></carusel-component>
        <div class="tab">
            <div class="container-tabs">
                <tab-component
                    :width="187"
                    :tabs="tabCards"
                    :default="currentCardIndex"
                    :propsCurrent="'currentCardIndex'"
                    @currentCardIndex="getIndexCard($event,'currentCardIndex')">
                </tab-component>
            </div>
        </div>
        <div class="container-cards">
            <div>
                <carousel
                    :interval="10000"
                    :data="setData">
                </carousel>
            </div>
        </div>
        <div class="about-cruiser-addiction">
            <div class="about-cruiser-addiction-background"></div>
            <div class="container-about-cruiser-addiction">
                <div class="about-cruiser-addiction-title">About Cruiser Addiction</div>
                <div class="about-cruiser-addiction-tab-content">
                    <div class="about-cruiser-addiction-tab-car-bg"></div>
                    <div class="about-cruiser-addiction-tab">
                        <tab-component
                                :width="187"
                                :tabs="tabAbout"
                                :propsCurrent="'tabIndexAbout'"
                                @tabIndexAbout="getIndexCard($event,'tabIndexAbout')">
                        </tab-component>
                    </div>
                    <div class="about-cruiser-addiction-content">
                        <div style="width: 400px;height: 70px; float: right; margin-left: 30px; margin-bottom: 30px"></div>
                        <div v-html="cardsTest.info[tabIndexAbout]"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import tab from '../../common/mainElements/tabComponent/index'
    import firstElement from '../../components/homePage/first-element'
    import {CookieHelper} from "../../helpers/cookie";
    import {Products} from "../../api/products";
    import {Basket} from "../../helpers/basket";

    export default {
        fetch({req, store}){
            const isHeader = req && req.headers && req.headers.cookie;
            const options =  {
                store: store,
                req: req
            };
            return CookieHelper.setCookieDataInStore(isHeader, options)
                .then(res => console.log(res))
        },
        asyncData(){
             return Products.getRandomParts().then(res => ({items: res.body}))
        },
        name: "index",
        components:{
            "tab-component": tab,
            "carusel-component": firstElement,
        },
        computed:{
            setData:{
                set(){
                    this.set_Data = [1,2,3].map(count => {
                        switch (count) {
                            case 1: const data1 = this.setHtmlCard(0);
                                return `<div class="containerCard">${data1}</div>`;
                            case 2: const data2 = this.setHtmlCard(0);
                                return `<div class="containerCard">${data2}</div>`;
                            case 3: const data3 = this.setHtmlCard(0);
                                return `<div class="containerCard">${data3}</div>`;
                        }
                    });

                },
                get(){
                    return this.set_Data
                }
            }
        },
        watch:{
            'setData'(v){
                setTimeout(() => {
                    try {
                        this.removeClick();
                        this.addClick();
                    } catch (e){}
                },0)
            }
        },
        data(){
            return{
                tabCards: [
                    'sales products',
                    'best selling products',
                    'top rated',
                    'most viewed products',
                    'recent products',
                    'feature products'
                ],
                set_Data:[],
                tabAbout:[
                    'Easy to USE',
                    'Online catalogue',
                    'BEST PRICES'
                ],
                currentCardIndex: Math.floor(Math.random() * 8),
                tabIndexAbout: 0,
                BASKET: new Basket(this.$store),
                allProducts:[],
                cardsTest:{
                    id:0,
                    items:[
                        {
                            price:'56.51',
                            description:'OEM Toyota Land Cruiser \n' +
                                '40 Series FJ40 Rear Body Reflector Set of 2',
                            starCount:4,
                            image:''
                        }, {
                            price:'56.51',
                            description:'OEM Toyota Land Cruiser2wwwwwwwwwwwwwww \n' +
                                '40 Series FJ40 Rear Body Reflector Set of ',
                            starCount:5,
                            image:''
                        }, {
                            price:'56.51',
                            description:'OEM Toyota Land Cruiser \n' +
                                '40 Series FJ40 Rear Body Reflector Set of 2 wwwwwwwwwwwwwwwwwwww',
                            starCount:1,
                            image:''
                        }, {
                            price:'56.51',
                            description:'OEM Toyota Land Cruiser \n' +
                                '40 Series FJ40 Rear Body Reflector Set of 2 wwwwwwwwwwwwwwwwwwwww',
                            starCount:3,
                            image:''
                        },
                    ],
                    info:[
                        '<p>First of all we take care of comfort for our customers. With Cruiser Addiction purch' +
                        'asing OEM body parts, engine parts, etc. will be fluent and pleasant process. It will be no ' +
                        'problem for you to find and order, for example, OEM Toyota parts or any aftermarket brands. ' +
                        'If you need bearings, for instance, it will be easy for you to find the necessary ones in our ' +
                        'Toyota catalog or catalogs of other manufacturers</p>' +
                         '<p>Why it is so easy to buy with Cruiser Addiction? Easy-to-use online catalogue will help you ' +
                        'quickly find needed parts. Making order on our website is easy and intuitive. For your information' +
                        ' we have prepared FAQ section where you can find replies to the most popular questions. ' +
                        'If necessary, our online consultants will personally help you. We are not limited by the stock ' +
                        'of products kept on our warehouses as we have large chain of sub-suppliers who immediately supply' +
                        ' ordered items available at their warehouses. Flexible logistics allows us to deliver goods to ' +
                        'our buyers within shortest time. We also accept online payments so it will be easy for our' +
                        ' clients not only to order but also to pay for the order staying at home and using only Internet.</p>' +
                        '<p>Range of genuine auto parts will not disappoint you as well. With Cruiser Addiction you will' +
                        ' not have to order one spare part in one shop and another spare part in another shop. You will ' +
                        'likely find here all you need to purchase.</p>' +
                        'Convenient online catalog will let you quickly find necessary parts. For example, if you are' +
                        ' owner of Mitsubishi, genuine parts can be easily bought on our website. Buying Mitsubishi ' +
                        'parts online is great solution in contemporary conditions. If you sort our catalogue by "Brand" ' +
                        'category, you will see full list of available Mitsubishi car parts. For all Mitsubishi auto ' +
                        'parts you will see title, description, price, availability and number of ship in days. It is ' +
                        'very convenient when complete information about OEM Mitsubishi parts is gathered in one table. ' +
                        'You will find not only Mitsubishi engine parts and body parts but also spare parts for electrical ' +
                        'system, finishing, gearbox, etc. as well as wide range of accessories. When dealing with repair ' +
                        'of a car, time is usually of great importance. Our online catalogue allows you to see how long you ' +
                        'will have to wait for ordered Mitsubishi parts (OEM). Other Japanese car brands are also well' +
                        ' represented on our website; therefore it will be no problem for you to order them as well.',
                    ]
                }
            }
        },
        created(){
            this.allProducts = this.getProducts();
            this.setData = []
        },
        mounted(){
           this.$nextTick(() => this.addClick())
        },
        methods:{
            getIndexCard(index, type){
                this.getRandomParts().then(() => {
                    this.removeClick();
                    this.addClick();
                    this[type] = index;
                })
            },
            getRandomParts(){
                return Products.getRandomParts().then(res => this.items = res.body)
            },
            addCard(event){
                const currentCard = this.items
                    .find(data => data.unique_hash === event.target.previousElementSibling.textContent);
                if(currentCard){
                    if (this.allProducts.indexOf(currentCard.unique_hash) > -1)  {
                        const index = this.getLocalStorageFindIndexThings(currentCard.unique_hash);
                        const activeRemove = index > -1;
                        activeRemove && this.BASKET.deleteThing(index);
                        this.allProducts = this.getProducts();
                        this.setData = [];
                        if(activeRemove) return this.toStore('info', 'Successfully removed from the basket');
                    }
                    const regex = /\d+/g;
                    const warehouses = currentCard.warehouse ? currentCard.warehouse.split(' ') : [];
                    currentCard.basket = {
                        active: true,
                        available: currentCard.qty,
                        qty: 1,
                        prices: currentCard.price,
                        unique_hashes: currentCard.unique_hash,
                    };

                    if(!currentCard.basket.warehousesNumber) {
                        currentCard.basket.warehousesNumber = warehouses[0] && warehouses[0].match(regex);
                        currentCard.basket.warehousesNumber = !currentCard.basket.warehousesNumber ? 1
                            : currentCard.basket.warehousesNumber[0];
                    }
                    !currentCard.basket.warehousesDay &&
                    (currentCard.basket.warehousesDay = this.dataDayFormat(warehouses[1]));

                    if (!currentCard.basket.active)    return this.toStore('error', 'Not available warehouse');
                    if (!currentCard.basket.available) return this.toStore('error', 'Not available parts');
                    if (currentCard.basket.qty < 1) return this.toStore('error', 'Not available parts');
                    this.BASKET.addThing(currentCard);
                    this.toStore('info', 'Successfully added to basket');
                    this.allProducts = this.getProducts();
                    this.setData = [];
                }

            },
            dataDayFormat(data) {
                if(!data) return '';
                const statics = data;
                const regex = /\d+/g;
                data && (data = data.match(regex));
                data && (data = data[data.length - 1]);
                if (data && data.indexOf(1) > -1) return `${statics} day`;
                return `${statics} days`;
            },
            setHtmlCard(count){
                return [...this.items].splice(count,4).map((item, index) => {
                    let data = {...item};
                    return `<div class="card" >
                                <div class="card-image"></div>
                                <div class="card-description">
                                    ${data.description_english}
                                </div>
                                <div class="card-star">
                                <app-star :count="2"></app-star>
                                <!--data.starCount-->
                                </div>
                                <hr class="card-line">
                                <div class="card-price">
                                    <span>$</span>${data.price}
                                </div>
                                <div class="disabledHash" id="customId${index}">${data.unique_hash}</div>
                                <button
                                     class="button-card-add all-center
                                    ${this.allProducts.indexOf(data.unique_hash) > -1 && 'active'}">
                                    add to card
                                </button>
                            </div>`
                    }).join(' ')
            },
            toStore(type, mes) {
                this.$store.commit('error/setValue', {
                    name: 'data',
                    data: {type: type, text: mes, active: true}
                });
            },
            addClick(){
                document
                    .querySelectorAll('.button-card-add')
                    .forEach(item => item.addEventListener('click',this.addCard));
            },
            removeClick(){
                document
                    .querySelectorAll('.button-card-add')
                    .forEach(item => item.removeEventListener('click',this.addCard));
            },
            getProducts(){
                return (this.BASKET.getAllThing() || [])
                    .map(item => item && item.basket && item.basket.unique_hashes)
                    .filter(item => item)
            },
            getLocalStorageFindIndexThings (id) {
                return this.BASKET.getIndexThing(id)
            },
        },
        destroyed() {
            this.removeClick()
        }
    }
</script>

<style scoped lang="scss">
    .tab{
        display: flex;
        justify-content: center;
        box-shadow: 0px 6px 21px rgba(0, 0, 0, 0.15);
        width: 100%;
        margin: 10px 0;
    }
    .container-tabs{
        width:1000px
    }
    .container-cards{
        display: flex;
        justify-content: center;
        width: 100%;
        margin-top: 72px;
        margin-bottom: 144px;
    }
    .container-cards div{
        display: flex;
     }
    .about-cruiser-addiction{
        position: relative;
        display: flex;
        justify-content: center;
    }
    .container-about-cruiser-addiction{
        width: 1110px;
        margin-top: 57px;
        margin-bottom: 95px;
        z-index: 10;
    }
    .about-cruiser-addiction-title{
        font-style: normal;
        font-weight: normal;
        font-size: 36px;
        line-height: 0px;
        color:#32405B;
        margin-bottom: 49px;
    }
    .about-cruiser-addiction-tab-content{
        background: white;
        box-shadow: 0px 8px 25px rgba(0, 0, 0, 0.15);
    }
    .about-cruiser-addiction-tab{
        box-shadow: 0px 8px 25px rgba(0, 0, 0, 0.07);
    }
    .about-cruiser-addiction-content{
        position: relative;
        padding: 47px;
        font-size: 13px;
        font-style: normal;
        font-weight: normal;
        line-height: 16px;
        color: #32405B;
    }
    .about-cruiser-addiction-background{
        width: 100%;
        height: 300px;
        background: #ECF0F3;
        position: absolute;
        top: 0;
        z-index: 0;

    }
    .about-cruiser-addiction-tab-car-bg{
        width: 576px;
        height: 200px;
        background-image: url("../../assets/test-car.png");
        background-repeat: no-repeat;
        background-position: center;
        background-size: contain;
        position: absolute;
        top: 18px;
        right: 300px;
    }

</style>
