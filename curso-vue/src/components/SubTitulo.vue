<template>
    <div class="SubTitulo">
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: "SubTitulo"
};
</script>

<style lang="scss">
.SubTitulo{
    padding: 10px;
    background-color: #ddd;
    font-size: 1em;
    box-shadow: inset 0 0 5px #666;
    border-radius: 5px;
    text-decoration: underline;
}
</style>
