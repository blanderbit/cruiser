<template>
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
</template>

<script>
    export default {
        name: "rightAside"
    }
</script>

<style scoped>
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
</style>
