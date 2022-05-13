<template>
    <div class="container">
        {{ productos.length }}
    </div>
</template>

<script>
export default {
    name: "Carrito",
    props: {
        productos: {
            type: Array,
            required:true
        }
    },
};
</script>

<style>
.container {
    position: fixed;
    top: 0;
    right: 0;
    padding: 10px 20px;
    background-color: black;
    color: yellow;
    font-size: 1.8em;
    font-weight: bold;
    width: 30px;
    height: 30px;
    border-radius: 0 0 0 40px;
    text-align: right;
}
</style>
