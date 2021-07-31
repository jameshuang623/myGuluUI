import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Button from "../components/Button";

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
        component: Button,
    }
]


const router = new VueRouter({
    routes
})

export default router
