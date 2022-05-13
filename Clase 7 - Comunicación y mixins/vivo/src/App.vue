<template>
    <div id="app">
        <Carrito :productos="productosEnCarrito" />
        <Titulo>
            Clase 7: Probando props, events, slots, filters y mixins
        </Titulo>

        <img alt="CH" src="./assets/coderhouse.png" />

        <div class="contenedorProductos">
            <Producto
                attr1="attr1"
                attr2="attr2"
                v-bind="$attrs"
                v-for="(item, i) in productos"
                :key="i"
                :id="item.id"
                :titulo="item.titulo"
                :precio="item.precio"
                :nombre-imagen="item.nombreImagen"
                :destacado="item.destacado"
                @agregar-al-carrito="AgregarAlCarrito"
            >
            </Producto>
        </div>

        <br /><br />
        <PruebasSlots>
            <template v-slot:slot1>
                <h3>Aquí podría ir un título de página</h3>
            </template>

            <p>Un párrafo para el contenido principal.</p>
            <p>Y otro más.</p>

            <template v-slot:slot2>
                <h3>Aquí podría ir un footer</h3>
            </template>
        </PruebasSlots>

        <br><br>
        <!-- <EjemploFiltros></EjemploFiltros> -->


        <br><br>
        <EjemploMixins></EjemploMixins>
    </div>
</template>


<script>
import Producto from "./components/Producto.vue";
import Carrito from "./components/Carrito.vue";
import Titulo from "./components/Titulo.vue";
import PruebasSlots from "./components/PruebasSlots.vue";
import EjemploFiltros from "./components/EjemploFiltros.vue";
import EjemploMixins from "./components/EjemploMixins.vue";
export default {
    name: "App",
    components: {
        Producto,
        Carrito,
        Titulo,
        PruebasSlots,
        EjemploFiltros,
        EjemploMixins
    },
    data() {
        return {
            productos: [
                {
                    id: 1,
                    titulo: "Notebook HP",
                    precio: 170000,
                    nombreImagen: "notebookHP.png",
                    destacado: false,
                },
                {
                    id: 2,
                    titulo: "Celular Motorola",
                    precio: 53000,
                    nombreImagen: "celular-motorola.png",
                    destacado: false,
                },
                {
                    id: 3,
                    titulo: "Monitor Samsung",
                    precio: 71000,
                    nombreImagen: "monitor-samsung.png",
                    destacado: true,
                },
            ],
            productosEnCarrito: [],
        };
    },
    mounted() {},
    methods: {
        AgregarAlCarrito(id) {
            let result = this.productos.find((prod) => {
                return prod.id == id;
            });
            this.productosEnCarrito.push(result);
            // if (result) {
            //     this.$refs.miCarrito.AgregarProducto(result);
            // }
        },
    },
};
</script>


<style>
body {
    margin: 0;
}
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #111;
}

.contenedorProductos {
    display: flex;
    align-items: center;
    justify-content: center;
}
</style>
