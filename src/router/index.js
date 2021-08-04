import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import ButtonPage from "../views/ButtonPage";
import InputPage from "../views/InputPage";
import TabPage from "../views/TabPage";
import ToastPage from "../views/ToastPage";

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        redirect: '/home',
    },
    {
        path: '/home',
        component: Home,
        children:[
            {path:'/home/button', component:ButtonPage},
            {path:'/home/input', component:InputPage},
            {path:'/home/tab', component:TabPage},
            {path:'/home/toast', component:ToastPage},
        ]
    },
]


const router = new VueRouter({
    routes
})

export default router
