export default {
    data(){
        return{
            campoTestPrintHooks: 12
        }
    },
    beforeCreate(){
        console.log(`------>Hook "beforeCreate" del componente ${this.$options.name}.`);
        console.log(`Valor de "this.$el": ---> ${this.$el}`);
        console.log(`Valor de "this.$data": ---> ${this.$data}`);
    },
    created(){
        console.log(`------>Hook "created" del componente ${this.$options.name}.`);
        console.log(`Valor de "this.$el": ---> ${this.$el}`);
        console.log(`Valor de "this.$data": ---> ${this.$data}`);
    },
    beforeMount(){
        console.log(`------>Hook "beforeMount" del componente ${this.$options.name}.`);
        console.log(`Valor de "this.$el": ---> ${this.$el}`);
        console.log(`Valor de "this.$data": ---> ${this.$data}`);
    },
    mounted(){
        console.log(`------>Hook "mounted" del componente ${this.$options.name}.`);
        console.log(`Valor de "this.$el": ---> ${this.$el}`);
        console.log(`Valor de "this.$data": ---> ${this.$data}`);
    },
    beforeUpdate(){
        console.log(`------>Hook "beforeUpdate" del componente ${this.$options.name}.`);
        console.log(`Valor de "this.$el": ---> ${this.$el}`);
        console.log(`Valor de "this.$data": ---> ${this.$data}`);
    },
    updated(){
        console.log(`------>Hook "updated" del componente ${this.$options.name}.`);
        console.log(`Valor de "this.$el": ---> ${this.$el}`);
        console.log(`Valor de "this.$data": ---> ${this.$data}`);
    },
    beforeDestroy(){
        console.log(`------>Hook "beforeDestroy" del componente ${this.$options.name}.`);
        console.log(`Valor de "this.$el": ---> ${this.$el}`);
        console.log(`Valor de "this.$data": ---> ${this.$data}`);
    },
    destroyed(){
        console.log(`------>Hook "destroyed" del componente ${this.$options.name}.`);
        console.log(`Valor de "this.$el": ---> ${this.$el}`);
        console.log(`Valor de "this.$data": ---> ${this.$data}`);
        console.log(`Valor de "this.$data": ---> ${this.$data.campoTestPrintHooks}`);
    },
}
