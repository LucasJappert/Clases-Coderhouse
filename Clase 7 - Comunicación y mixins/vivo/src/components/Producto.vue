<template>
  <div class="grillaProducto text-center">
        <img
            v-if="destacado"
            src="../assets/images/destacado.png"
            alt="destacado"
            class="imagenDestacado"
        />
        <div>
            <img
                :alt="titulo"
                :src="getImgUrl()"
                class="imagenProductoGrilla"
            />
        </div>
        <h3>{{ titulo }}</h3>
        <div>$ {{ precio }}</div>
        <button type="button" class="botonComprar" @click="AgregarAlCarrito()">
            Agregar
        </button>
    </div>
</template>

<script>
export default {
    name: "Producto",
    props:{
        titulo:{
            type:String,
            required: true,
        },
        precio:{
            type: Number,
            required: true,
        },
        nombreImagen: {
            type: String,
            required: true,
        },
        destacado: {
            type: Boolean,
        },
        id: {
            type: Number,
            required: true,
        },
    },
    mounted(){
    },
    methods: {
        getImgUrl() {
            return require(`@/assets/images/${this.nombreImagen}`);
        },
        AgregarAlCarrito() {
            this.$emit("agregar-al-carrito", this.id);
        },
    },
}
</script>

<style scoped>
.grillaProducto {
    position: relative;
    width: 300px;
    /* height: 250px; */
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
    background-color: rgba(255, 255, 255, 0.5);
    color: black;
    padding: 5px;
    margin: 10px;
    border-radius: 10px;
    cursor: pointer;
}
.imagenDestacado {
    position: absolute;
    top: 5px;
    left: 5px;
    width: 40px;
}

.imagenProductoGrilla {
    max-width: 70%;
    max-height: 100px;
    height: 100%;
}

.grillaProducto:hover {
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.7);
}
.botonComprar {
    background-color: #d9ff01d7;
    width: 100px;
    border-radius: 10px;
    margin-top: 10px;
    font-size: 1.1em;
    padding: 5px 0;
    border: 1px solid rgba(0, 0, 0, 0.5);
    cursor: pointer;
}
.botonComprar:hover {
    background-color: #d4de07d0;
}
</style>
