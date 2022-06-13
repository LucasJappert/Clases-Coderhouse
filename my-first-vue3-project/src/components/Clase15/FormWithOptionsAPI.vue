<template>
    <div class="container">
        <div class="SubTitulo">Ejemplo formulario, usando <b>vuelidate con Options API</b>:</div>
        <div class="root">
            <p>
                <input class="form-control" type="text" placeholder="Email" v-model="email" />
                <span class="invalid-feedback" v-if="v$.email.$error">
                    {{ v$.email.$errors[0].$message }}
                </span>
            </p>
            <p>
                <input class="form-control" type="password" placeholder="Password" v-model="password.password"/>
                <span class="invalid-feedback" v-if="v$.password.password.$error">
                    {{ v$.password.password.$errors[0].$message }}
                </span>
            </p>
            <p>
                <input class="form-control" type="password" placeholder="Confirm Password" v-model="password.confirm"/>
                <span class="invalid-feedback" v-if="v$.password.confirm.$error">
                    {{ v$.password.confirm.$errors[0].$message }}
                </span>
            </p>
            <button @click="submitForm">Aceptar</button>
        </div>
    </div>

</template>

<script>
/* eslint-disable */
import useValidate from "@vuelidate/core";
import { required, email, minLength, sameAs } from "@vuelidate/validators";
export default {
    data() {
        return {
            v$: useValidate(),
            email: "",
            password: {
                password: "",
                confirm: "",
            }
        };
    },
    mounted(){
        console.log(this.v$);
    },
    methods:{
        submitForm(){
            this.v$.$validate();
            console.log(this.v$);
            if (!this.v$.$error)
                console.log('✔ Datos del formulario CORRECTOS!');
            else
                console.log('❌ Datos del formulario INCORRECTOS!');
        },
    },
    //Reglas de validación
    validations() {
  		return {
  			email: { required, email },
  			password: {
  				password: { required, minLength: minLength(6) },
  				confirm: { required, sameAs: sameAs(this.password.password) },
  			}
  		}
  	}
}
</script>

<style>

</style>
