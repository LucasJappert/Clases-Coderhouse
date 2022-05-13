<template>
    <div class="container">
        {{ productos.length }}
    </div>
</template>

<script>
export default {
    name: "Carrito",
    data() {
        return {
            productos: [],
        };
    },
    mounted() {
        //console.info(`El data de este componente es: `, this.$data);
        //console.info(`Las options personalizadas de este componente son: `, this.$options);
        //console.info(`Los attrs establecidos por el componente padre son: `, this.$attrs);
    },
    opcionPersonalizada: "Esta es una opción personalizada",
    methods: {
        AgregarProducto(producto) {
            //TODO: Ver de sumar productos iguales
            let i = this.productos.findIndex((prod) => prod.id == producto.id);
            if (i >= 0) this.productos[i].cantidad += 1;
            else {
                producto.cantidad = 1;
                this.productos.push(producto);
            }
            console.log(`Producto "${producto.titulo}" agregado!`);
        },
    },
    filters: {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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
