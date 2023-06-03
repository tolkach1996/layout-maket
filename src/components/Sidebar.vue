<script>
import ParagraphSidebar from '../components/ParagraphSidebar.vue'


export default {
    components: { ParagraphSidebar },
    data() {
        return {
            subparagraph: false,
            paragraphs: [
                { id: 1, name: 'Закупки', img: './src/assets/img/icon-purchase.svg', subparagraph: [{ id: 1, name: 'Создать' }, { id: 2, name: 'Список' }] },/*
                { id: 2, name: 'Пункт 2', subparagraph: [{ id: 1, name: 'Подпункт 21' }, { id: 2, name: 'Подпункт 22' }, { id: 3, name: 'Подпункт 23' }] },
                { id: 3, name: 'Пункт 3', subparagraph: [{ id: 1, name: 'Подпункт 31' }, { id: 2, name: 'Подпункт 32' }, { id: 3, name: 'Подпункт 33' }] }*/
            ]
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
    <div class="Sidebar">
        <ParagraphSidebar v-for="paragraph in paragraphs" :paragraph="paragraph" :key="paragraph.id" />
    </div>
</template>

<style scoped>
.Sidebar {
    height: 100%;
    width: 250px;
    display: flex;
    margin-left: 24px;
    border-right: 1px solid #D0DAE4;
}
</style>
