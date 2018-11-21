import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import Home from "@/pages/Home";
import UserRegister from "@/pages/User/UserRegister"

export default new Router({
    routes: [{
        path: '/',
        component: Home
    }, {
        path: '/register',
        component: UserRegister
    }]
})