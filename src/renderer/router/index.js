import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import Home from "@/pages/home";
import UserRegister from "@/pages/User/register"

export default new Router({
    routes: [{
        path: '/user/home',
        component: Home
    }, {
        path: '/user/register',
        component: UserRegister
    }]
})