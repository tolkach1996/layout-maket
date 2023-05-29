<script>

</script>

<template>
    <div class="authorization">
        <div class="authorization-content">
            <div class="authorization-header">Вход в личный кабинет</div>
            <div class="authorization-info">Введите данные для входа в личный кабинет администратора</div>
            <div class="authorization-login">телефон</div>
            <div class="authorization-pass">parol</div>
            <button class="authorization-button">Войти в кабинет</button>
        </div>
    </div>
</template>

<style scoped>
.authorization {
    height: 365px;
    width: 500px;
    border-radius: 6px;

    border: 1px solid #126CF3;
}

.authorization-content {
    margin: 31.5px;
    display: flex;
    flex-direction: column;
    align-items: center;

}

.authorization-header {
    width: 100%;
    height: 40px;
    margin-bottom: 10px;
    font-family: 'Manrope';
    font-style: normal;
    font-weight: 700;
    font-size: 31.4955px;
    line-height: 39px;
    text-align: center;
    color: #0E0E0E;
}

.authorization-info {
    width: 70%;
    height: 50px;
    font-family: 'Manrope';
    font-style: normal;
    font-weight: 400;
    font-size: 14.9979px;
    line-height: 24px;
    text-align: center;
    color: #333333;
    margin-bottom: 25px;
}

.authorization-login {
    width: 100%;
    height: 50px;
    border: 0.75px solid #9E9E9E;
    border-radius: 3px;
    margin-bottom: 15px;
}

.authorization-pass {
    width: 100%;
    height: 50px;
    background: #F1F5F9;
    border-radius: 3px;
    margin-bottom: 15px;
}

.authorization-button {
    width: 100%;
    height: 55px;
    background: #126CF3;
    color: white;
    border-radius: 5px;
}
</style>
