<template>
    <div id="app">
        <Titulo>Clase 7: Probando props, events, slots, filters y mixins</Titulo>
        <img alt="CH" src="./assets/coderhouse.png" />
        <Carrito
            ref="miCarrito"
            v-bind="$attrs"
            attr1="attr1"
            class="sinefecto"
        />

        <div class="contenedorProductos">
            <Producto
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
        <EjemploSlots>
            <template v-slot:slot1>
                <h3>Aquí podría ir un título de página</h3>
            </template>

            <p>Un párrafo para el contenido principal.</p>
            <p>Y otro más.</p>

            <template v-slot:slot2>
                <h3>Aquí podría ir un footer</h3>
            </template>
        </EjemploSlots>

        <br /><br />
        <EjemploFiltros />

        <br /><br />
        <EjemploMixins />



        <br /><br />
    </div>
</template>

<script>
import Carrito from "./components/Carrito.vue";
import Producto from "./components/Producto.vue";
import Titulo from "./components/Titulo.vue";
import EjemploSlots from "./components/EjemploSlots.vue";
import EjemploFiltros from "./components/EjemploFiltros.vue";
import EjemploMixins from "./components/EjemploMixins.vue";

export default {
    name: "App",
    props: ["asd"],
    components: {
        Carrito, Producto, Titulo, EjemploSlots, EjemploFiltros, EjemploMixins
    },
    mounted() {
        //console.info(`El elemento raíz de este template, es: `, this.$el);
        //console.info(`Las props de este componente son: `, this.$props);
        this.SaludarGlobal();
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
        };
    },
    methods: {
        AgregarAlCarrito(id) {
            let result = this.productos.find((prod) => {
                return prod.id == id;
            });
            if (result) {
                this.$refs.miCarrito.AgregarProducto(result);
            }
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
