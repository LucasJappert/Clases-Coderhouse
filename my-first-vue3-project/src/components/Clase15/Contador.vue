<template>
  {{ contadorProp }}
</template>

<script>
    /* eslint-disable */
    import { watchEffect } from "vue";
    export default {
        props:{
            contadorProp:{
                type: Number,
                required: true
            }
        },
        setup(props){
            watchEffect(() => {
                //console.log(props.contadorProp);
            })
        }
    }
</script>


<style setup>

</style>
