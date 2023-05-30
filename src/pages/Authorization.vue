<script>

</script>

<template>
    <div class="authorization">
        <div class="authorization-content">
            <div class="authorization-header">Вход в личный кабинет</div>
            <div class="authorization-info">Введите данные для входа в личный кабинет администратора</div>
            <div class="authorization-login">
                <div class="authorization-login-content">
                    <span>Введите номер телефона</span>
                    <input class="authorization-login-content__input" type="text">
                </div>
            </div>
            <input type="password" class="authorization-pass" placeholder="Пароль">
            <!--<div class="authorization-pass">parol</div>-->
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
    font-weight: 700;
    font-size: 31.4955px;
    line-height: 39px;
    text-align: center;
    color: #0E0E0E;
}

.authorization-info {
    width: 70%;
    height: 50px;
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

.authorization-login-content {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    text-align: left;
    margin: 7.5px 18px;
    font-weight: 400;
    font-size: 12px;
    line-height: 15px;
    color: #585858;
}

.authorization-login-content__input {
    width: 100%;
    font-size: 13.4981px;
    line-height: 18px;
}

.authorization-pass {
    width: 100%;
    height: 50px;
    border-radius: 3px;
    margin-bottom: 15px;
    background: #F1F5F9;
    border: none;
}

.authorization-pass::-webkit-input-placeholder {
    padding: 10px;
}

.authorization-pass::placeholder {
    padding: 15px 20px;
}

.authorization-button {
    width: 100%;
    height: 55px;
    background: #126CF3;
    color: white;
    border-radius: 5px;
}
</style>
