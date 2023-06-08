<script>

</script>


<template>
    <div class="order-popup">
        <div class="order-popup__point">Просмотр</div>
        <div class="order-popup__point">
            <img src="../assets/img/icon-edit.svg" alt="">
            <span>Редактировать</span>
        </div>
        <div class="order-popup__point"><img src="../assets/img/icon-delite.svg" alt=""><span>Удалить</span></div>
    </div>
</template>


<style scoped>
.order-popup {
    width: 159px;
    height: 102px;
    padding: 12px 16px;
    background: #FFFFFF;
    box-shadow: 0px 1px 7px rgba(0, 0, 0, 0.11);
    border-radius: 3px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    font-weight: 500;
    font-size: 14px;
    line-height: 18px;
    position: absolute;

}

.order-popup__point {
    display: flex;
    align-items: center;
    gap: 7px;
}

.order-popup__point:hover {
    color: #126CF3;
}
</style>