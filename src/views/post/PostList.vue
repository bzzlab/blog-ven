<template>
    <div id="order_list">
        <h1>Your orders</h1>
        <p>List of your submitted orders.</p>
        <h4>Order information</h4>
        <mark>Under construction</mark>
    </div>
</template>

<script>
    //const API_URL = "http://localhost:3000";
    const API_URL = store.state.apiUrl;
    export default {
        name: "OrderList",
        mounted() {
            //later replace by fetch(this.$store.state.apiUrl);
            fetch(API_URL +'/api/post', {method: 'GET'})
                .then(res => console.log(res.json()));
        },
        data: () => ({
            orders: [],
            order: {
                email: "",
                password: "",
                street: "",
                city: "",
                zip:"",
                numOfTickets:""
            }
        })
    }
</script>
