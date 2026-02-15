import { createRouter, createWebHistory, type RouteRecordRaw } from "vue-router";
import AnimeCardPage from "../features/anime/pages/AnimeCardPage.vue";
import AnimeListPage from "../features/anime/pages/AnimeListPage.vue";

const routes: RouteRecordRaw[] = [
    {
        path: '/anime',
        name: 'home',
        component: AnimeListPage
    },
    {
        path: '/anime/:id',
        name: 'anime-details',
        component: AnimeCardPage,
        props: true
    }
]

export const router = createRouter({
    history: createWebHistory(),
    routes
})

