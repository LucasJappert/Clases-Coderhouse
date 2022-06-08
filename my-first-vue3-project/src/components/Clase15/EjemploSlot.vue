<template>
    <div>
        <slot name="slot1"></slot>
        <slot name="slot2"></slot>
        <slot name="slot3" :variable1="variable1">Slot 3</slot>
    </div>
</template>

<script>
/* eslint-disable */
export default {
    data(){
        return {
            variable1: "Hola, soy una variable del componente 'EjemploSlot'"
        }
    }
}
</script>

<style>

</style>
