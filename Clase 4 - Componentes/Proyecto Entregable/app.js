Vue.component("mi-tabla", {
    props: {
        titulos: {
            type: Array,
            required: true
        },
        registros: {
            type: Array,
            required: true
        },
        //TODO: implementar props para cambiar color de letra y fondo de la tabla
    },
    template: `
        <div>
            <table class="table table-striped table-dark">
                <thead class="thead-light">
                    <tr>
                        <th v-for="(item, i) in titulos" :key="i" scope="col">{{ item }}</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(registro, i) in registros" :key="i">
                        <th>{{ i + 1 }}</th>
                        <th v-for="(row, r) in registro" :key="r">{{row}}</th>
                    </tr>
                </tbody>
            </table>
        </div>
    `
});
var app = new Vue({
    el: "#app",
    data: {
        tabla1: {
            titulos: ["ID", "Nombre", "Apellido", "Provincia"],
            registros: [
                ["Jose", "Velez", "San Luis"],
                ["Ramon", "Gomez", "Santa Fe"],
                ["Marcelo", "Godino", "Buenos Aires"],
                ["Ramiro", "Gimenez", "Salta"],
            ]
        },
        //TODO: acá habrá que crear 2 objetos nuevos: tabla2 y tabla 3, y luego reutilizar el componente cambiando los valores pasados como parámetro en las props
    },
    template: `
        <div>
            <mi-tabla :titulos="tabla1.titulos" :registros="tabla1.registros" ></mi-tabla>
            TODO: hacer que acá abajo se dibujen 2 tablas más, con su respectiva información.
        </div>
    `
});