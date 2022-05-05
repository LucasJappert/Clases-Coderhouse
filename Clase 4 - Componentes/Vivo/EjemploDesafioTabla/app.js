Vue.component("mi-tabla", {
    props:{
        titulos: {
            type: Array,
            required: true
        },
        registros:{
            type: Array,
            required: true
        },

    },
    template:`
        <div>
            <table class="table table-striped table-dark">
                <thead class="thead-light">
                    <tr>
                        <th v-for="(item, i) in titulos" :key="i" scope="col">{{ item }}</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(persona, i) in registros" :key="i">
                        <th>{{ i + 1 }}</th>
                        <th>{{ persona.nombre }}</th>
                        <th>{{ persona.apellido }}</th>
                        <th>{{ persona.Provincia }}</th>
                    </tr>
                </tbody>
            </table>
        </div>
    `
});



var app = new Vue({
    el:"#app",
    data:{
        tabla1: {
            titulos: ["ID", "Nombre", "Apellido", "Provincia"],
            registros: [
                {
                    nombre: "Jose",
                    apellido: "Velez",
                    Provincia: "San Luis" 
                },
                {
                    nombre: "Jose",
                    apellido: "Velez",
                    Provincia: "San Luis" 
                },
                {
                    nombre: "Jose",
                    apellido: "Velez",
                    Provincia: "San Luis" 
                }
            ]
        },
    }
})




