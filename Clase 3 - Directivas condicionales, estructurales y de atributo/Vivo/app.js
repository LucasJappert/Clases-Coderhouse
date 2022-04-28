var app = new Vue({
    el: "#app",
    data: {
        dibujoPrimerParrafo: false,
        caso: 1,
        TituloBoton: "Ocultar párrafo!",
        MostrarParrafo1: true,
        equiposDeFutbol:[
            {
                id: 1,
                nombreImagen: "river",
                descripcion: "C.A. River Plate",
                jugadores: ["Jugador1", "Jugador2", "Jugador3"]
            },
            {
                id: 2,
                nombreImagen: "boca",
                descripcion: "C.A. Boca Junior",
                jugadores: ["Jugador4", "Jugador5", "Jugador6"]
            },
            {
                id: 3,
                nombreImagen: "independiente",
                descripcion: "C.A. Independiente",
                jugadores: ["Jugador7", "Jugador8", "Jugador9"]
            },
            {
                id: 4,
                nombreImagen: "racing",
                descripcion: "Racing Club",
                jugadores: ["Jugador10", "Jugador11", "Jugador12"]
            }
        ],
        cssParrafo:{
            "fondoGris": false,
            "letraAmarilla": false
        },
        estilosParrafo: {
            'background-color': 'green',
            'color': 'black'
        }
    },
    methods:{
        MostrarOcultarBoton(){
            this.MostrarParrafo1 = !this.MostrarParrafo1;
            if (this.MostrarParrafo1){
                this.TituloBoton = "Ocultar párrafo!";
            } 
            else {
                this.TituloBoton = "Mostrar párrafo!";
            } 
        },
        ClasesParrafo1DesdeMetodo(){
           if (this.caso == 1){
               return "letraAmarilla";
           } else{
            return "fondoGris";
           }
        },
        EstilosParrafoDesdeMetodo() {
            return {
                'background-color': 'green',
                'color': 'black'
            };
        },
        ClasesColumna(i){
            if(i % 2 == 0) return "filaTabla fondoCCC";
            else return "filaTabla fondo444";
        },

    },
    computed: {
        clasesParrafo1DesdeComputed(){
           if (this.caso == 1){
               return "letraAmarilla";
           } else{
            return "fondoGris";
           }
        },
        obtenerClaseParrafoLucas(){
            return "letraAmarilla fondoGris";
        }
    }
});