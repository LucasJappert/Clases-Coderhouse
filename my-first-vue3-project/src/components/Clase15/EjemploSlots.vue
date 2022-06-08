<template>
    <div class="container">
        <div class="SubTitulo">Ejemplo trabajando con <b>slots</b>:</div>
        <EjemploSlot>
            <template v-slot:slot1>
                <div>Ejemplo utilizando un slot como lo hacíamos también con vue 2</div>
            </template>

            <template #slot2>
                <div>Ejemplo utilizando un slot, llamándolo de manera reducida con el #</div>
            </template>

            <template #slot3="{ variable1 }">
                <span>Nueva funcionalidad vue 3 (❔): {{ variable1 }}</span>
            </template>
        </EjemploSlot>
    </div>
</template>

<script>
/* eslint-disable */
import EjemploSlot from "./EjemploSlot.vue";
export default {
    components: { EjemploSlot }
}
</script>

<style>

</style>
