<template>
    <div id="home">
        <JumbotronF
                title="Concert"
                abstract="Early bird ticket order for the Frauenfeld festival 2020!"
        />
        <router-link class="nav-link" to="/order/new">
            <button type="button" class="btn btn-primary">{{title}}</button>
        </router-link>
    </div>
</template>
<script>
// @ is an alias to /src
//import MainContainer from "@/components/ContainerMain.vue";
import JumbotronF from "../components/JumbotronF.vue";
export default {
    name: "home",
    data: function () {
        return {
            title: "Proceed here for a new post!"
        }
    },
    components: {
        JumbotronF
    }
};
</script>
