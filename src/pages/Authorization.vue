<script>

</script>

<template>
    <div class="authorization">
        <div class="authorization-content">
            <div class="authorization__title">Вход в личный кабинет</div>
            <div class="authorization__info">Введите данные для входа в личный кабинет администратора</div>
            <form action="" class="authorization-login">
                <input id="authorization-input-number" class="authorization__pass" type="text" v-phone placeholder=" ">
                <label for="authorization-input-number" class="placeholder">Введите номер телефона</label>
                <input type="password" id="authorization-input-pass" class="authorization__pass" placeholder=" ">
                <label for="authorization-input-pass" class="placeholder">Пароль</label>
            </form>





            <!--
    <div class="authorization-login">
<div class="authorization-login-content">
                    <span>Введите номер телефона</span>
                    <input id="authorization-input-number" class="authorization-login-content__input" type="text" v-phone
                        placeholder=" ">
                    <label for="authorization-input-number">Введите номер телефона</label>
                </div>
</div>
            <input type="password" class="authorization__pass" placeholder="Пароль">-->

            <button class="authorization__button">Войти в кабинет</button>
        </div>
    </div>
</template>

<style scoped>
.authorization {
    height: 365px;
    width: 500px;
    margin: 0 auto;
    border-radius: 6px;
    border: 1px solid #126CF3;
}

.authorization-content {
    margin: 31.5px;
    display: flex;
    flex-direction: column;
    align-items: center;

}

.authorization__title {
    width: 100%;
    height: 40px;
    margin-bottom: 10px;
    font-weight: 700;
    font-size: 31.4955px;
    line-height: 39px;
    text-align: center;
    color: #0E0E0E;
}

.authorization__info {
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
    border-radius: 3px;
    margin-bottom: 15px;
}

.authorization-login-content {
    width: 100%;
    height: 100%;
    padding: 10px 25px;
    display: flex;
    flex-direction: column;
    font-weight: 400;
    font-size: 12px;
    line-height: 15px;
    color: #585858;
}

.authorization-login-content__input {
    font-size: 14px;
    line-height: 18px;
    border: none;
}

.authorization__pass {
    width: 100%;
    height: 50px;
    border-radius: 3px;
    margin-bottom: 15px;
    background: #F1F5F9;
    border: none;
    padding: 15px 20px;
}

.placeholder {
    color: #65657b;
    left: 20px;
    line-height: 14px;
    pointer-events: none;
    transform-origin: 0 50%;
    transition: transform 200ms, color 200ms;
    top: 20px;
}

.authorization__pass:focus~.label,
/* фокус на input */
.authorization__pass:not(:placeholder-shown)~.label

/* в input есть значение */
    {
    transform: translateY(-30px) translateX(10px) scale(0.75);
}

.authorization__pass:hover {
    background-color: #E2EAF1;
}

.authorization__pass:focus {
    background: #FFFFFF;
    border: 1px solid #9E9E9E;
}

.authorization__button {
    width: 100%;
    height: 55px;
    background: #126CF3;
    color: white;
    border-radius: 5px;
}





.authorization__pass:focus~.placeholder,
.authorization__pass:not(:placeholder-shown)~.placeholder {
    transform: translateY(-30px) translateX(10px) scale(0.75);
}

.authorization__pass:not(:placeholder-shown)~.placeholder {
    color: #808097;
}

.authorization__pass:focus~.placeholder {
    color: #dc2f55;
}
</style>
