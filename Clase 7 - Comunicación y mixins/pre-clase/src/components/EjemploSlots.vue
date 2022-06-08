<template>
    <div>
        <slot name="slot1" :variable1="variable1"></slot>
        <slot></slot>
        <slot name="slot2"></slot>
    </div>
</template>

<script>
export default {
    data(){
        return {
            variable1: "asdasdsd"
        }
    }
};
</script>

<style>
</style>
