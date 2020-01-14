<template>
    <header>
        <nav class="navbar navbar-expand-lg navbar-light fixed-top navbar-light custom-bg-dark">
<!--            <img :src="`${publicPath}blog.png`" alt="test image"/> -->
            <router-link to="/" class="navbar-brand">
                <img alt="Blog logo" class="logo" src="../assets/blog.png"/>Concert-Blog
            </router-link>
            <button aria-controls="navbarSupportedContent" aria-expanded="false"
                    aria-label="Toggle navigation"
                    class="navbar-toggler" data-target="#navbarSupportedContent"
                    data-toggle="collapse" type="button">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <!-- ml-auto for margin left auto of these links -->
                <!-- ml-1 align to first column which is left -->
                <ul class="navbar-nav ml-2">
                    <!-- Home -->
                    <li class="nav-item">
                        <router-link class="nav-link" to="/" exact>Home</router-link>
                    </li>
                    <!-- Blog -->
                    <li class="nav-item">
                        <router-link class="nav-link" to="/blog/new" exact>Blog</router-link>
                    </li>
                    <!-- registration menu -->
                    <!--<li v-if="!$store.state.isLoggedIn" class="nav-item">-->
                    <li class="nav-item">
                        <router-link to="/register" class="nav-link" exact>
                            Register
                        </router-link>
                    </li>
                    <!-- Authentication menu -->
                    <li class="nav-item">
                        <router-link to="/login" class="nav-link" exact>
                            Login
                        </router-link>
                    </li>
                    <li class="nav-item">
                        <!--<a v-on:click.prevent="logout()" class="nav-link" href="#">Logout</a>-->
                        <a class="nav-link" href="#">Logout</a>
                    </li>
                    <li class="nav-item">
                        <!-- Display the current user's username in the navbar -->
                        <!-- TODO: Instead of 'User' is it possible to add navigation item
                                in order to select the login button and when logged in then
                                the logged-in-user is shown.
                        -->
                        <a class="nav-link" href="#">
                            {{ this.$store.state.username ? this.$store.state.username : 'User' }}
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    </header>
</template>

<script>
    export default {
        name: "navbar",
        beforeEnter: (toolbar,from,next) => {
            console.log("Path" + process.env.BASE_URL);
            next();
        },
        data () {
            return {
                publicPath: "../"
            }
        },

    }
</script>
