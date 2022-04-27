var app = new Vue({
    el: "#app",
    data: {
        dibujoPrimerParrafo: false,
        tareas:[
            {
                id: 1,
                nombreImagen: "river",
                descripcion: "C.A. River Plate"
            },
            {
                id: 2,
                nombreImagen: "boca",
                descripcion: "C.A. Boca Junior"
            },
            {
                id: 3,
                nombreImagen: "independiente",
                descripcion: "C.A. Independiente"
            },
            {
                id: 4,
                nombreImagen: "racing",
                descripcion: "Racing Club"
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