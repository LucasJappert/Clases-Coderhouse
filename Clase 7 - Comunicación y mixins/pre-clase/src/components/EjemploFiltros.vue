<template>
    <div>
        {{ texto | toUpper }}
        <div :id="idEnMayusculas | toLower">Prueba filtro toLower</div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            texto: "Este texto originalmente contiene minúsculas!",
            idEnMayusculas: "MY-TEST"
        };
    },
    filters: {
        toUpper: function (input, parametro1) {
            //console.log(parametro1);
            if (!input) return "";
            return input.toString().toUpperCase();
        },
        toLower: function (input) {
            if (!input) return "";
            return input.toString().toLowerCase();
        },
    },
};
</script>

<style>
</style>
