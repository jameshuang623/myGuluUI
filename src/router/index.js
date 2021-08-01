import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import ButtonPage from "../views/ButtonPage";
import InputPage from "../views/InputPage";

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        redirect: '/home',
    },
    {
        path: '/home',
        component: Home
    },
    {
        path: '/button',
        component: ButtonPage
    },
    {
        path: '/input',
        component: InputPage
    }
]


const router = new VueRouter({
    routes
})

export default router
