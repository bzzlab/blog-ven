import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import BlogCreate from "./views/post/PostCreate.vue";
import BlogList from "./views/post/PostList";
import BlogEdit from "./views/post/PostEdit";
import BlogDelete from "./views/post/PostDelete";

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
            path: "/post/new",
            name: "post-create",
            component: BlogCreate
        }, {
            path: "/post",
            name: "post-list",
            component: BlogList
        }, {
            path: "/post/:id",
            name: "post-edit",
            component: BlogEdit
        }, {
            path: "/post/del/:id",
            name: "post-delete",
            component: BlogDelete
        },
        /*
        {
            path: "/about",
            name: "about",
            component: About,
        }, */{
            path: "*",
            redirect: "/"
        }
    ],
    linkActiveClass: 'active'
});

//export routes (aka navigation information)
export default routes;
