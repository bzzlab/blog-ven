import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import BlogCreate from "./views/post/BlogCreate.vue";
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
            path: "/blog/new",
            name: "blog-create",
            component: BlogCreate
        }, {
            path: "*",
            redirect: "/"
        }
    ],
    linkActiveClass: 'active'
});

//export routes (aka navigation information)
export default routes;
