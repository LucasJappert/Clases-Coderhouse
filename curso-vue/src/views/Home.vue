<template>
    <div class="containerHome">

        <div class="h1">Bienvenidos</div>
        <div>
            Aquí detallamos el contenido de bienvenida dedicado al usuario que accede a esta SPA.
        </div>

        <br><br>

        <router-link class="btn btn-success buttonClases" :to="{ name: 'Clase8' }">
            Clase 8 - Formularios y validaciones
        </router-link>
        <router-link class="btn btn-success buttonClases" :to="{ name: 'Clase9' }">
            Clase 9 - Router y life cycle hooks
        </router-link>
        <router-link class="btn btn-success buttonClases" :to="{ name: 'Clase10' }">
            Clase 10 - Consumo de APIs
        </router-link>
        <router-link class="btn btn-success buttonClases" :to="{ name: 'Clase11' }">
            Clase 11 - Introducción a Vuex
        </router-link>
        <router-link class="btn btn-success buttonClases" :to="{ name: 'Clase12' }">
            Clase 12 - Vuex en Vue
        </router-link>
        <!-- <router-link class="btn btn-success buttonClases" to="/Clase10/12">
            Clase 10 - Dinamico
        </router-link> -->

    </div>
</template>

<script>
export default {};
</script>

<style>
.containerHome{
    font-size:1.2em;
}
.h1, h1{
    font-size: 1.5em;
}
.h2, h2{
    font-size: 1em;
}
</style>
