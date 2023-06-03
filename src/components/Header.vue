<script>

</script>

<template>
    <div class="Header">
        <div class="Header-logo"><img src="../assets/img/logo.svg" alt=""></div>
        <div class="Header-userprofile">
            <img class="Header-userprofile__notification" src="../assets/img/notification.svg" alt="">
            <img class="Header-userprofile__userphoto" src="../assets/img/user.svg" alt="">
            <div class="Header-userprofile-userinfo">
                <div class="Header-userprofile-userinfo__username"><b>Михаил Авдеев</b></div>
                <div class="Header-userprofile-userinfo__usertype">Администратор</div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.Header {
    background-color: #E5E5EA;
    width: 100%;
    height: 70px;
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.Header-logo {
    height: 100%;
    width: 250px;
    display: flex;
    align-items: center;
    margin-left: 24px;
    border-right: 1px solid #D0DAE4;
}

.Header-userprofile {
    display: flex;
    align-items: center;
    margin-right: 32px;
}

.Header-userprofile__notification {
    margin-right: 35px;
}

.Header-userprofile__userphoto {
    width: 100%;
    height: 100%;
    margin-right: 10px;
    background-color: #fff;
    border-radius: 50%;
}

.Header-userprofile-userinfo {
    min-width: 120px;
}

.Header-userprofile-userinfo__username {
    font-size: 16px;
    line-height: 20px;
}

.Header-userprofile-userinfo__usertype {
    font-size: 12px;
    line-height: 14px;
}
</style>
