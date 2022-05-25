<template>
    <div class="Titulo">
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: "Titulo"
};
</script>

<style lang="scss">
.Titulo{
    padding: 20px;
    background-color: #999;
    font-weight: bold;
    font-size: 1.5em;
    box-shadow: inset 0 0 10px #000;
    border-radius: 10px;
}
</style>
