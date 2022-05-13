<template>
    <div>
        {{ this.cantidad }}
    </div>
</template>

<script>
import mixinComunes from "../mixins/mixinComunes";
export default {
    data(){
        return {
            mensaje: "Hola"
        }
    },
    mixins: [mixinComunes],
    mounted() {

        //Usamos método del mixinComunes
        this.AumentarCantidad();
        setInterval(() => { this.AumentarCantidad() }, 1000);
        //console.info(`El elemento raíz de este template, es: `, this.$el);
        //console.info(`Las props de este componente son: `, this.$props);
    },
};
</script>

<style>
</style>
