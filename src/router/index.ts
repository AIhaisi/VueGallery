import { createRouter, createWebHistory } from 'vue-router'

import Main from '../pages/main.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            redirect: '/main'
        },
        {
            path: '/main',
            component: () => import('../pages/main.vue')
        },
        {
            path: '/content',
            component: () => import('../pages/content.vue')
        },
        {
            path: '/girlsband',
            component: () => import('../pages/girlsband.vue')
        },
        {
            name: 'east',
            path: '/east',
            component: () => import('../pages/east.vue')
        },
        {
            path: '/diancipao',
            component: () => import('../pages/diancipao.vue')
        },
        {
            path: '/pixivanime',
            component: () => import('../pages/pixivanime.vue')
        },
        {
            path: '/test',
            component: () => import('../pages/test.vue')
        },
        {
            path: '/roomfour',
            component: () => import('../pages/roomfour.vue')
        },
        {
            path: '/fetchjm',
            component: () => import('../pages/fetchjm.vue')
        }
    ]
})

export default router