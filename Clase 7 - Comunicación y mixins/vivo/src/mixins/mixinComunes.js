export default {
    data() {
        return {
            cantidad: 0,
        }
    },
    mounted(){
        this.Saludar();
    },
    methods: {
        Saludar() {
          console.log(`Hola desde mixinComunes.js!`);
        },
        AumentarCantidad() {
            this.cantidad += 1;
        }
    }
};
