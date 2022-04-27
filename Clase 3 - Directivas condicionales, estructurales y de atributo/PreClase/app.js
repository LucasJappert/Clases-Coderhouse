var app = new Vue({
    el: "#app",
    data: {
        dibujoPrimerParrafo: true,
        tareas:[
            {
                id: 1,
                descripcion: "Tarea 1"
            },
            {
                id: 2,
                descripcion: "Tarea 2"
            },
            {
                id: 3,
                descripcion: "Tarea 3"
            },
            {
                id: 4,
                descripcion: "Tarea 4"
            }
        ],
        cssClass: {
            "fondoGris": true,
            "letraAmarilla": true
        },
        estilos:{
            "padding": "20px",
            "box-shadow": "inset 0 0 10px gray"
        }
    },
    methods: {
        ClasesColumna(index){
            if (index % 2 == 0) return "fondo888";
            return "fondoCCC";
        }
    }
})