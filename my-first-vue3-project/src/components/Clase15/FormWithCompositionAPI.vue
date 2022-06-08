<template>
    <div class="container">
        <div class="SubTitulo">Ejemplo formulario, usando <b>vuelidate con Composition API</b>, agregando validaciones y mensajes personalizados con <b>helpers</b>:</div>
        <div class="root">
            <p>
                <input class="form-control" type="text" placeholder="Email" v-model="state.email" />
                <span class="invalid-feedback" v-for="(error, index) in v$.email.$errors" :key="index">
                    {{ error.$message }}
                </span>
            </p>
            <p>
                <input class="form-control" type="password" placeholder="Password" v-model="state.password.password"/>
                <span class="invalid-feedback" v-for="(error, index) in v$.password.password.$errors" :key="index">
                    {{ error.$message }}
                </span>
            </p>
            <p>
                <input class="form-control" type="password" placeholder="Confirm Password" v-model="state.password.confirm"/>
                <span class="invalid-feedback" v-for="(error, index) in v$.password.confirm.$errors" :key="index">
                    {{ error.$message }}
                </span>
            </p>
            <button @click="submitForm">Aceptar</button>
        </div>
    </div>
</template>

<script setup>
/* eslint-disable */
import useValidate from "@vuelidate/core";
import { required, email, minLength, sameAs, helpers } from "@vuelidate/validators";
import { reactive, computed } from "vue";

//Definimos nuestro modelo reactivo
const state = reactive({
    email: '',
    password: {
        password: '',
        confirm: '',
    },
});

//Definimos una función que luego utilizaremos para hacer una validación personalizada
const ShouldContainGmail = (input) => {
    return input.toLowerCase().includes("gmail");
}

//Definimos las reglas
const rules = computed(() => {
    return {
        email: {
            required: helpers.withMessage("El campo email es requerido!", required),
            email: helpers.withMessage("El email ingresado no es válido!", email),
            ShouldContainGmail: helpers.withMessage("Sólo se aceptan dominios 'gmail'", ShouldContainGmail)
        },
        password: {
            password: {
                required: helpers.withMessage("El campo password es requerido!", required),
                minLength: helpers.withMessage("Este campo debe contener al menos 6 caracteres!", minLength(6))
            },
            confirm: {
                required: helpers.withMessage("El campo confirm es requerido!", required),
                sameAs: helpers.withMessage("Las contraseñas ingresadas no coinciden!", sameAs(state.password.password))
            },
        }
    }
});

//Instanciamos un objeto con useValidate
const v$ = useValidate(rules, state);

const submitForm = () => {
    v$.value.$validate();
    if (!v$.value.$error)
        console.log('✔ Datos del formulario CORRECTOS!');
    else
        console.log('❌ Datos del formulario INCORRECTOS!');
}


</script>

<style>

</style>
