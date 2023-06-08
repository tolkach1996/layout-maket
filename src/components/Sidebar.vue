<script>
import ParagraphSidebar from '../components/ParagraphSidebar.vue'


export default {
    components: { ParagraphSidebar },
    data() {
        return {
            subparagraph: false,
            paragraphs: [
                { id: 1, name: 'Закупки', img: './src/assets/img/icon-purchase.svg', subparagraph: [{ id: 1, name: 'Создать' }, { id: 2, name: 'Список' }] },
                { id: 2, name: 'Товары', img: './src/assets/img/icon-products.svg', subparagraph: [{ id: 1, name: 'Создать' }, { id: 2, name: 'Список' }] },

                { id: 1, name: 'Сотрудники', img: './src/assets/img/icon-employees.svg', subparagraph: [{ id: 1, name: 'Создать' }, { id: 2, name: 'Список' }] },
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
    padding-top: 30px;
    min-width: 250px;
    max-width: 250px;
    display: flex;
    margin-left: 24px;
    border-right: 1px solid #D0DAE4;
    display: flex;
    flex-direction: column;
    gap: 10px;
    min-height: 100%;
}
</style>
