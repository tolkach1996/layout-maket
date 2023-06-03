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
            <div class="content-main">12345</div>
        </div>
    </div>
</template>

<style scoped>
.content {
    display: flex;
}
</style>
