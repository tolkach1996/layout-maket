import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    {
        path: '/authorization',
        name: 'authorization',
        component: () => import('../pages/Authorization.vue'),
    }
]


const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router