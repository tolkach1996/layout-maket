<script>
export default {
    props: {
        paragraph: {
            type: Object,
            required: true,
        }
    },
    data() {
        return {
            subparagraph: false,
        }
    },
    methods: {
        showSubsubparagraph() {
            this.subparagraph = !this.subparagraph
            console.log(this.subparagraph)
        }
    }
}
</script>


<template>
    <div class="ParagraphSidebar">
        <div class="ParagraphSidebar-paragraph" @click="showSubsubparagraph">
            <div class="">
                <img :src="this.paragraph.img" alt="">
                <span>{{ this.paragraph.name }}</span>
            </div>
            <img src="../assets/img/icon-arrowdown.svg" alt="">
        </div>
        <div class="ParagraphSidebar-subparagraph" v-for="subparagraph in this.paragraph.subparagraph" v-if="subparagraph">
            {{ subparagraph.name }}</div>
    </div>
</template>


<style scoped>
.ParagraphSidebar {
    width: 100%;
    margin: 30px 0px;
}

.ParagraphSidebar-paragraph {
    height: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-right: 25px;
}
</style>