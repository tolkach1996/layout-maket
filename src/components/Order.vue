<script>
import Order_popup from "../components/Order-popup.vue"

export default {
    components: { Order_popup },
    data() {
        return {
            toggleOrderPopup: false,
        }
    },
    methods: {
        showOrderPopup() {
            this.toggleOrderPopup = !this.toggleOrderPopup
        }
    }
}
</script>


<template>
    <div class="order">
        <img src="../assets/img/img-purchase.svg" alt="">
        <div class="order-info">
            <div class="order-menu">
                <div class="order-menu__name">Закупка женской одежды</div>
                <div class="order-menu__popup"><img class="" src="../assets/img/icon-menu-order.svg" alt=""
                        @click="showOrderPopup">
                    <Order_popup v-if="this.toggleOrderPopup"></Order_popup>
                </div>
                <!--<img class="" src="../assets/img/icon-menu-order.svg" alt="" @click="showOrderPopup">-->
            </div>
            <div class="order-menu__status">Завершено</div>
            <div class="order-menu-info">
                <div class="order-menu-info__product"><b>41</b> Товар</div>
                <div class="order-menu-info__purchase"><b>1234</b> Заказа</div>
                <div class="order-menu-info__client"><b>312</b> Клиент</div>
            </div>
            <div class="order-menu-responsible">
                <img src="../assets/img/img-user-responsble.svg" alt="">
                <div class="order-menu-responsible__info">
                    <div class="order-menu-responsible__name">Игорь Прокопенко</div>
                    <div class="order-menu-responsible__status">Ответственный</div>
                </div>
            </div>
        </div>
    </div>
</template>


<style scoped>
.order {
    min-width: 380px;
    min-height: 430px;
    max-width: 380px;
    max-height: 430px;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    background-color: #fff;
    overflow: visible;
}

.order-info {
    padding: 17px;
    display: flex;
    flex-direction: column;
    gap: 15px;
}

.order-menu {
    display: flex;
    justify-content: space-between;
    font-weight: 600;
    font-size: 20px;
    line-height: 24px;
    color: #333333;
}

.order-menu__status {
    width: 94px;
    min-height: 26px;
    background: #CCF0E3;
    border-radius: 3px;
    font-weight: 500;
    font-size: 12px;
    line-height: 14px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #379C78;
}

.order-menu-info {
    width: 100%;
    display: flex;
    justify-content: space-between;
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    color: #696969;
}

.order-menu-responsible {
    display: flex;
}

.order-menu-responsible__info {
    margin-left: 10px;
}

.order-menu-responsible__name {
    font-weight: 500;
    font-size: 16px;
    line-height: 20px;
    color: #333333;
}

.order-menu-responsible__status {
    font-weight: 400;
    font-size: 14px;
    line-height: 16px;
    color: #898989;
}

.order-menu__popup {
    border-radius: 50%;
    cursor: pointer;
    position: relative;
}
</style>