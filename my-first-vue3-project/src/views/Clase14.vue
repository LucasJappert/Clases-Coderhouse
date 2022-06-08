<template>
    <div class="container">
        <div class="Titulo">Clase 13 Presentación de Vue 3</div>

        <div class="SubTitulo">
            Primeros ejemplos en el setup():
        </div>
        <!-- {{ asd }} -->
        <br>
        <button @click="aumentarContador()">Aumentar contador</button>
        <br>
        {{ contador }}

        <!-- <teleport to="#carreras-ch">
            <p>Frontend Developer</p>
            <p>Backend Developer</p>
            <p>Producto</p>
            <p>Data & Analytics</p>
        </teleport> -->

        <br>
        {{ product.price }}


        <div class="container">
            <div class="SubTitulo">
                Ejemplo <b>teleport</b> con un modal:
            </div>
            <br>
            <button @click="showModal = true">Mostrar modal</button>
            <teleport to="body">
                <Modal :show="showModal" @close="showModal = false" />
            </teleport>
        </div>


        <div class="container" v-if="true">
            <div class="SubTitulo">
                Ejemplo consumiendo una api usando suspense:
            </div>
            <Suspense>
                <template #default>
                    <Users />
                </template>
                <template #fallback>
                    Loading...
                </template>
            </Suspense>
        </div>

    </div>

</template>

<script>
import Modal from "../components/Modal.vue";
import Users from "../components/Users.vue";
import { ref } from "vue";
import { reactive} from "vue";
// import { h } from "vue";
// import { onMounted } from "vue";
// import { onRenderTracked } from "vue";
// import { onRenderTriggered } from "vue";
export default {
    name: 'HelloWorld',
    components: { Modal, Users },
    props: {
        msg: String
    },
    // eslint-disable-next-line no-unused-vars
    setup(props, context) {
        //console.log(context);
        const asd = ref(props.msg);
        const showModal = ref(false);
        // Utilizar ref para valores primitivos
        let contador = ref(0);

        // Para usar la variable dentro del script, debemos usar el .value, ya que lo que
        // devuelve el ref es en realidad un proxy (target + handler)

        const aumentarContador = () => {
            contador.value += 1;
        }

        // Utilizar reactive para valores no primitivos, como objetos, arrays, etc.
        // Aunque si dejamos el ref funciona igual ya que vue hace el pasaje internamente.
        let product = reactive({
            name: "Product Name",
            price: 125
        });
        //console.log(product);


        // onMounted(() => {
        //     console.log("onMounted");
        // })
        // onRenderTracked(() => {
        //     //Se ejecuta por cada variable que renderizamos en la vista por primera vez
        //     console.log("onRenderTracked");
        // })
        // onRenderTriggered(() => {
        //     console.log("onRenderTriggered");
        // })

        // return () => h('div', [props.msg])

        return { asd, aumentarContador, contador, product, showModal };
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
