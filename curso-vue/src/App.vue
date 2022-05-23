<template>
    <div id="app">
        <router-link class="btn btn-primary" to="/" v-if="this.$route.path != '/'">&#8592; Volver</router-link>
        <br><br>
        <router-view />
    </div>
</template>

<script>
export default {
    name: "App",
    components: {},
    beforeCreate(){
    },
    created(){

    },
    mounted(){
    }
};
</script>

<style lang="scss" scoped>
@import "./css/general.scss";
@import url("https://cdn.jsdelivr.net/npm/bootstrap-icons@1.8.2/font/bootstrap-icons.css");
</style>
