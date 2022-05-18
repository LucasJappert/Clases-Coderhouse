export default {
    template:`
        {{ contador1 }}
    `,
    data(){
        return{
            contador1: 0,
            idInterval1: 0
        }
    },
    mounted(){
        this.idInterval1 = setInterval(this.AumentarContador, 1000);
        console.log(`Intervalo corriendo. Id: ${this.idInterval1}`);
    },
    beforeDestroy(){
        console.log(this.idInterval1);
        //console.log(this.$data);
        console.log(`Limpiamos el intervalo id: ${this.idInterval1}`);
        clearInterval(this.idInterval1);
    },
    destroyed(){
        console.log(this.idInterval1);
        //console.log(this.$data);
    },
    methods:{
        AumentarContador1(){
            this.contador1++;
        }
    }
}
