import { createRouter, createWebHistory, type RouteRecordRaw } from "vue-router";
import AnimeListPage from "../features/anime/pages/AnimeListPage.vue";

const routes: RouteRecordRaw[] = [
    {
        path: '/',
        name: 'home',
        component: AnimeListPage
    },
]

export const router = createRouter({
    history: createWebHistory(),
    routes
})

