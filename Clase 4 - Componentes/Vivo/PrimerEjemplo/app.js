// Arrancando a crear mi primer componente...
Vue.component("mi-primer-componente", {
    template:/* html */`
    <div class="divExample fondoGris">
        <h3>Este es mi primer componente!</h3>
        <div>Incluye todo lo que está dentro del borde negro.</div>
        <div>En unos minutos vamos a proponerte hacerlo vos mismo, por ahora sigue prestando atención!</div>
        <span></span>
    </div>
    `
});
//Empezamos a utilizar props...
Vue.component("producto-grilla", {
    props: ["titulo", "precio", "srcImg"],
    template: `
        <div class="GrillaProducto text-center">
            <div>
                <img :alt="titulo" :src="srcImg" class="imagenProductoGrilla" />
            </div>
            <h3 class="text-center">{{titulo}}</h3>
            <div class="text-center">$ {{precio}}</div>
        </div>
    `
});

//Seguimos utilizando props pero tipadas...
Vue.component("producto-grilla1", {
    props: {
        titulo: {
            type: String,
            required: true
        },
        srcImg: {
            type: String,
            required: true
        },
        precio: {
            type: Number,
            required: true
        },
        mostrarBoton: {
            type: Boolean
        }
    },
    template: `
    <div class="GrillaProducto text-center">
        <div>
            <img v-bind:alt="titulo" v-bind:src="srcImg" class="imagenProductoGrilla" />
        </div>
        <h3>{{titulo}}</h3>
        <div>$ {{precio}}</div>
        <button v-if="mostrarBoton" class="btn btn-success btn-rounded">Agregar</button>
    </div>
    `
});




var app = new Vue({
    el:"#app",
    data: {
        productos: [
            {
                titulo: "Notebook HP",
                precio: 170000,
                srcImg: "./images/notebookHP.png",
                stock: 0
            },
            {
                titulo: "Celular Motorola",
                precio: 53000,
                srcImg: "./images/celular-motorola.png",
                mostrarBoton: false,
                stock:1
            },
            {
                titulo: "Monitor Samsung",
                precio: 71000,
                srcImg: "./images/monitor-samsung.png",
                mostrarBoton: false
            }
        ],
    },
    template:`
        <div>
            <div>
                <div class="divExample">
                    Mi componente "mi-primer-componente" seteando sólo el <b>template</b>:
                    <mi-primer-componente></mi-primer-componente>
                </div>
            </div>

            <div class="divExample">
                Mi componente "producto-grilla" seteando el <b>template</b> y las <b>props</b> con []:
                <div class="contenedorProductos">
                    <producto-grilla 
                            titulo="Notebook HP" 
                            precio="170000"
                            src-img="./images/notebookHP.png">
                    </producto-grilla>
                </div>
            </div>

            <div class="divExample">
                Mi componente "producto-grilla1" seteando el <b>template</b> y las <b>props tipadas</b> (determinando el type y el required):
                <div class="contenedorProductos">
                    <producto-grilla1
                            titulo="Notebook HP" 
                            :precio="170000"
                            src-img="./images/notebookHP.png">
                    </producto-grilla1>
                </div>
            </div>

            <div class="divExample">
                <div>Reutilizando mi componente "producto-grilla1":</div>
                <div class="contenedorProductos">
                    <producto-grilla1 v-for="(item, i) in productos" :key="i"
                            :titulo="item.titulo" 
                            :precio="item.precio"
                            :src-img="item.srcImg"
                            :mostrar-boton="item.stock > 0">
                    </producto-grilla1>
                </div>
            </div>

        </div>
    `
});
