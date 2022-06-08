<template>
  {{ contadorProp }}
</template>

<script>
    // export default {
    //     props:{
    //         contadorProp:{
    //             type: Number,
    //             required: true
    //         }
    //     }
    // }
</script>
<script setup>
    import { defineProps } from 'vue';

    defineProps({
        contadorProp:{
            type: Number,
            required: true
        }
    });
</script>

<style>

</style>
