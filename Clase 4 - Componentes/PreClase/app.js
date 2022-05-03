// Arrancando a crear mi primer componente...
Vue.component("mi-primer-componente", {
    template: `
    <div class="divExample fondoGris">
        <h3>Este es mi primer componente!</h3>
        <div>Incluye todo lo que está dentro del borde negro.</div>
        <div>En unos minutos vamos a proponerte hacerlo vos mismo, por ahora sigue prestando atención!</div>
    </div>
    `
});
//Empezamos a utilizar props...
Vue.component("producto-grilla", {
    props: ["titulo", "precio", "srcImg"],
    template: `
    <div class="GrillaProducto text-center">
        <div>
            <img alt="titulo" :src="srcImg" class="imagenProductoGrilla" />
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
        }
    },
    template: `
    <div class="GrillaProducto text-center">
        <div>
            <img alt="titulo" :src="srcImg" class="imagenProductoGrilla" />
        </div>
        <h3>{{titulo}}</h3>
        <div>$ {{precio}}</div>
    </div>
    `
});

//Seguimos el ejemplo completo de CODERMEALS desde las diapositivas
Vue.component('codermeals-card', {
    props: {
        titulo: String,
        portada: String,
        costo: Number
    },
    template: `<div align="center">
                    <div>
                        <img class="img-thumbnail img-cropped" :src="portada" :title="titulo">
                        <br><br>
                        <p>{{ titulo }}</p>
                        <p>$<strong>{{ costo }}</strong></p>
                    </div>
                </div>
            `
})

var app = new Vue({
    el: "#app",
    data: {
        productos: [
            {
                titulo: "Notebook HP",
                precio: 170000,
                srcImg: "./images/notebookHP.png"
            },
            {
                titulo: "Celular Motorola",
                precio: 53000,
                srcImg: "./images/celular-motorola.png"
            },
            {
                titulo: "Monitor Samsung",
                precio: 71000,
                srcImg: "./images/monitor-samsung.png"
            }
        ],
        ejemploPizza: {
            titulo: "Pizza Napoletana",
            portada: "https://static.cookist.it/wp-content/uploads/sites/21/2017/12/istock-480277738.jpg",
            costo: 675.00
        },
        codermeals: [
            {
                titulo: "Spaghetti alla puttanesca",
                costo: 575.00,
                portada: "https://4.bp.blogspot.com/-D5Wvi_gX_Kg/WLatk_GVnKI/AAAAAAAAA5M/-y0gB26R0Dkb01QmdgfZqQALtd9NMV2DACLcB/s1600/P70301-072354.jpg"
            },
            {
                titulo: "Pizza Napoletana ai carciofi",
                costo: 675.00,
                portada: "https://static.cookist.it/wp-content/uploads/sites/21/2017/12/istock-480277738.jpg"
            },
            {
                titulo: "Porchetta umbra a cottura lunga",
                costo: 845.00,
                portada: "https://www.fontecesia.it/wp-content/uploads/2018/11/porchetta-umbra-1920x1280.jpg"
            },
            {
                titulo: "Orecchiette alle cime di rapa",
                costo: 845.00,
                portada: "https://irepo.primecp.com/2016/03/259860/recipe-8673_ExtraLarge1000_ID-1461628.jpg"
            }
        ]

    },
    template: `
        <div>
            <div class="divExample">
                Mi componente "mi-primer-componente" seteando sólo el <b>template</b>:
                <mi-primer-componente></mi-primer-componente>
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
                            :src-img="item.srcImg">
                    </producto-grilla1>
                </div>
            </div>

            <div class="divExample">
                <div>Ejemplo filmina, card simple:</div>
                <h1 class="main-title">CODERMEALS 🍝</h1>
                <div class="contenedorProductos">
                    <codermeals-card class="card"
                        :portada="ejemploPizza.portada"
                        :titulo="ejemploPizza.titulo"
                        :costo="ejemploPizza.costo"
                    >
                    </codermeals-card>
                </div>
            </div>
            <div class="divExample">
                <div>Ejemplo filmina, iteración de cards:</div>
                <h1 class="main-title">CODERMEALS 🍝</h1>
                <div class="text-center">
                    <codermeals-card class="card" v-for="(item, i) in codermeals" :key="i"
                        :portada="item.portada"
                        :titulo="item.titulo"
                        :costo="item.costo"
                    >
                    </codermeals-card>
                </div>
            </div>
        </div>
    `
});

