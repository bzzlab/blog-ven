import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import BlogCreate from "./views/blog/BlogCreate.vue";
import Register from "./views/authentication/Register";
import Login from "./views/authentication/Login";
import * as auth from './services/AuthService'
Vue.use(Router);

//assigned to a constant in post to access properties
const routes = new Router({
    mode: "history",
    base: process.env.BASE_URL,
    routes: [
        {
            path: "/",
            name: "home",
            component: Home
        }, {
            path: "/blog",
            name: "blog-create",
            component: BlogCreate,
            beforeEnter: (toolbar,from,next) => {
                if (auth.isLoggedIn){
                    next();
                } else {
                    next('/login');
                }
            }
        }, {
            path: "/login",
            name: "login",
            component: Login,
            beforeEnter: (toolbar,from,next) => {
                if (!auth.isLoggedIn){
                    next();
                } else {
                    next('/');
                }
            }
        },{
            path: "/register",
            name: "register",
            component: Register,
            beforeEnter: (toolbar,from,next) => {
                if (!auth.isLoggedIn){
                    next();
                } else {
                    next('/');
                }
            }
        }, {
            path: "*",
            redirect: "/"
        }
    ],
    linkActiveClass: 'active'
});

//export routes (aka navigation information)
export default routes;
