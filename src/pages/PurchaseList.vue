<script>
import Header from "../components/Header.vue"
import Sidebar from "../components/Sidebar.vue"
import Order from "../components/order.vue"

export default {
    components: { Header, Sidebar, Order }
}

</script>

<template>
    <div class="PurchaseList">
        <Header></Header>
        <div class="content">
            <Sidebar></Sidebar>
            <div class="PurchaseList-page">
                <div class="PurchaseList-page-header">
                    <div class="PurchaseList-page__title">Текущие закупки</div>
                    <div class="PurchaseList-page-navigation">
                        <span class="PurchaseList-page-navigation__title">Закупки</span><span
                            class="PurchaseList-page-navigation__subtitle"> / Текущие закупки</span>
                    </div>
                </div>
                <div class="PurchaseList-page-action">
                    <button class="PurchaseList-page-action__button"><img src="../assets/img/icon-plus-circle.svg"
                            alt="">Добавить новую закупку</button>
                    <select name="" id="" class="PurchaseList-page-action-select">
                        <option value="">Опция фильтра 1</option>
                        <option value="">Опция фильтра 2</option>
                    </select>
                </div>
                <Order></Order>
            </div>
        </div>
    </div>
</template>

<style scoped>
.PurchaseList {
    min-height: 100%;
}

.content {
    display: flex;
    min-height: 100%;
}

.PurchaseList-page {
    width: 100%;
    background: #F1F5F9;
    display: flex;
    flex-direction: column;
    gap: 30px;
    padding: 40px;
}

.PurchaseList-page-header {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.PurchaseList-page-action {
    width: 100%;
    display: flex;
    justify-content: space-between;
}

.PurchaseList-page__title {
    font-weight: 600;
    font-size: 32px;
    line-height: 42px;
    color: #333333;
}

.PurchaseList-page-navigation {
    font-weight: 600;
    font-size: 14px;
    line-height: 20px;
}

.PurchaseList-page-navigation__title {
    color: #585858;
}

.PurchaseList-page-navigation__subtitle {
    color: #999999;
}

.PurchaseList-page-action__button {
    width: 280px;
    padding: 12px 24px;
    background: #126CF3;
    border-radius: 3px;
    border: none;
    font-weight: 700;
    font-size: 16px;
    line-height: 24px;
    color: #FFFFFF;
    display: flex;
    align-items: center;
    gap: 10px;
}

.PurchaseList-page-action-select {
    width: 200px;
    height: 50px;
    background: #FFFFFF;
    border: 1px solid #BAC9D8;
    border-radius: 3px;
    font-weight: 500;
    font-size: 14px;
    line-height: 18px;
    color: #333333;
}
</style>
