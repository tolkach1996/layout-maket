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
            <div class="ParagraphSidebar-paragraph__title">
                <img class="ParagraphSidebar-paragraph__icon" :src="this.paragraph.img" alt="">
                <span>{{ this.paragraph.name }}</span>
            </div>
            <img src="../assets/img/icon-arrowdown.svg" alt="" v-if="subparagraph">
            <img src="../assets/img/icon-arrowright.svg" alt="" v-else>
        </div>
        <div class="ParagraphSidebar-subparagraph" v-for="subparagraph in this.paragraph.subparagraph" v-if="subparagraph">
            {{ subparagraph.name }}</div>
    </div>
</template>


<style scoped>
.ParagraphSidebar {
    width: 100%;
    gap: 15px;
}

.ParagraphSidebar-paragraph {
    margin-bottom: 15px;
    height: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-right: 25px;
}

.ParagraphSidebar-paragraph__title {
    display: flex;
}

.ParagraphSidebar-paragraph__icon {
    margin-right: 10px;
}

.ParagraphSidebar-subparagraph {
    margin: 0px 0px 15px 30px;
}
</style>