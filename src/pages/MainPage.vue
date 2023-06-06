<script>
import Header from "../components/Header.vue"
import Sidebar from "../components/Sidebar.vue"

export default {
    components: { Header, Sidebar }
}

</script>

<template>
    <div class="main">
        <Header></Header>
        <div class="content">
            <Sidebar></Sidebar>
            <router-view />
        </div>
    </div>
</template>

<style scoped>
.content {
    display: flex;
}
</style>
