import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    {
        path: '/authorization',
        name: 'authorization',
        component: () => import('../pages/Authorization.vue'),
    },
    {
        path: '/',
        name: 'mainpage',
        component: () => import('../pages/MainPage.vue'),
    }
]


const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router