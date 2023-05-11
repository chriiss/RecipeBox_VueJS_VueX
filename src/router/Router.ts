import { createRouter, createWebHistory } from "vue-router"
import Home from "../components/home/Home.vue"
import Details from "../components/details/Details.vue"
import Favorite from "../components/favorite/Favorite.vue"


const routes = [
    {
        path: '/',
        name: 'home',
        component: Home
    },
    {
        path: '/details/:id',
        name: 'details',
        component: Details,
        props: true
    },
    {
        path: '/favorite',
        name: 'favorite',
        component: Favorite,
        props: true
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router