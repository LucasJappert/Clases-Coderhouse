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
            <table :class="table table-striped table-dark">
                <thead class="thead-light">
                    <tr>
                        <th v-for="(item, i) in titulos" :key="i" scope="col">{{ item }}</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(datosPersona, i) in registros" :key="i">
                        <th>{{ i + 1}}</th>
                        <th v-for="(dato, d) in datosPersona" :key="d">{{ dato }}</th>
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
                ["Jose", "Velez", "San Luis"],
                ["Ramon", "Gomez", "Santa Fe"],
                ["Marcelo", "Godino", "Buenos Aires"],
                ["Ramiro", "Gimenez", "Salta"],
            ]
        },
        // tabla2:{

        // },
        // tabla3: {

        // }
    }
})




