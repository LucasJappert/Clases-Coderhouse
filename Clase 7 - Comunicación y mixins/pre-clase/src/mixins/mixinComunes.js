// --> /src/mixins/mixinComunes.js
export default {
    data() {
        return {
            cantidad: 0
        }
    },
    methods: {
        Saludar(nombre) {
          console.log(`Hola ${nombre}! Mucho gusto en conocerte!`);
        },
        AumentarCantidad() {
            this.cantidad += 1;
        }
    }
};
