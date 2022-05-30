<template>
    <div class="container">
        <div class="renglon" v-for="(item, index) in $store.getters.getMessageHistory" :key="index">
            {{ item }}
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style>

</style>
