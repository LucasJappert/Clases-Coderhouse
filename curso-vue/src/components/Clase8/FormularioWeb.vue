<template>
    <div class="container">
        <img src="../../assets/logo.jpg" width="100" alt="">
        <form id="myForm" action="" @submit="ValidarCamposOnSubmit" method="post" v-show="true">
            <div class="row">
                <div class="col col-12 text-center">
                    <br>
                    <label for="inputNombre" class="text-start">Tu nombre</label>
                    <input @keyup="ValidarNombre" type="text" class="form-control" id="inputNombre" placeholder="Nombre completo" v-model="nombre.value">
                    <div :class="GetValidClass(nombre.isValid)"> {{nombre.message}} </div>
                    <br>
                    <p>Validar nombre: <span class="text-success fw-bold">{{ nombre.value.length }}</span></p>
                    <br>
                    <label for="inputEdad" class="form-label text-start">Edad</label>
                    <input type="number" class="form-control" id="inputEdad" placeholder="Edad" v-model.number="edad.value">
                    <p>Edad: <span class="text-success fw-bold">{{ typeof edad.value }}</span></p>
                    <br>
                    <label for="inputEmail" class="form-label text-start">Email</label>
                    <input type="email" class="form-control" id="inputEmail" placeholder="tu@email.com" v-model="email.value">
                    <div v-if="errors.length > 0">
                        <p>Errores detectados: </p>
                        <ul class="text-danger fw-bold">
                            <li v-for="error in errors" v-bind:key="error.index">{{ error }}</li>
                        </ul>
                    </div>
                    <br>
                    <div class="row">
                        <h4>Selecciona tu curso</h4>
                        <div class="col col-2 text-left">
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="JavaScript" id="checkJS" v-model="chequeados">
                                <label class="form-check-label" for="checkJS">
                                JavaScript
                                </label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="React" id="checkReact" v-model="chequeados">
                                <label class="form-check-label" for="checkReact">
                                React
                                </label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="Angular" id="checkNg" v-model="chequeados">
                                <label class="form-check-label text-start" for="checkNg">
                                Angular
                                </label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="Vue" id="checkVue" v-model="chequeados">
                                <label class="form-check-label" for="checkVue">
                                Vue
                                </label>
                            </div>
                        </div>
                        <div class="text-success">Chequeados: {{ chequeados }}</div>
                    </div>

                    <br>
                    <div class="row">
                        <select data-style="btn-danger" class="form-select form-select-lg mb-3"
                            aria-label="Default select example" v-model="pais">
                            <option value="" selected></option>
                            <option v-for="pais in listaPaises" :value="pais.pais" :key="pais.id" >{{ pais.pais }}</option>
                        </select>
                    </div>
                    <div class="text-success">Pais: {{ pais }}</div>

                    <br>
                    <label for="areaComentarios" class="form-label text-start">Comentarios</label>
                    <textarea class="form-control" id="areaComentarios" rows="3"></textarea>
                    <br>
                    <div class="row">
                        <h4>Tipo de documento</h4>
                        <div class="col">
                        <input type="radio" name="checkDNI" class="form-check-input">
                        <label for="checkDNI">DNI</label>
                        </div>
                        <div class="col">
                        <input type="radio" name="checkPass" class="form-check-input">
                        <label for="checkDNI">Pasaporte</label>
                        </div>
                        <div class="col">
                        <input type="radio" name="checkVisa" class="form-check-input">
                        <label for="checkDNI">VISA</label>
                        </div>
                    </div>
                    <hr>
                    <div class="row">
                        <br>
                        <div class="col-10"></div>
                        <br>
                        <div class="col-2">
                        <input type="submit" class="btn btn-primary" value="ENVIAR">
                        </div>
                        <br>
                    </div>


                </div>
            </div>
        </form>

        <div class="row" v-show="true">
            <br><br>
            Test eventos (capture, self):
            <div class="row bg-success" @click.self="Mensaje('1')">
                <div class="bg-warning col-6">Testing</div>
            </div>
        </div>
        <br>
        <div class="row" v-show="true">
            Test modificadores clave (enter, tab, delete, etc):
            <input placeholder="Probá presionando enter..." type="text" @keyup.enter="Mensaje('enter')">
            <input placeholder="Probá presionando alt + c..." type="text" @keyup.alt.c="Mensaje('alt + c')">
            <input placeholder="Probá presionando control + c..." type="text" @keyup.ctrl.c="Mensaje('ctrl + c')">
            <input placeholder="Probá presionando control + click..." type="text" @click.ctrl="Mensaje('ctrl + click')">
            <div class="row bg-success" @click.self="Mensaje('1')">
                <div class="bg-warning col-6">Click self</div>
            </div>
        </div>

    </div>
</template>

<script>
export default {
    name: 'FormularioWeb',
    data(){
        return{
            nombre: {
                value: "",
                isValid: true,
                message: ""
            },
            email: {
                value: "",
                isValid: false
            },
            edad: {
                value: 0,
                isValid: false
            },
            chequeados:[],
            pais: "",
            listaPaises: [
                {
                    id: 'A',
                    pais: 'Argentina'
                },
                {
                    id: 'B',
                    pais: 'Uruguay'
                },
                {
                    id: 'C',
                    pais: 'Perú'
                },
                {
                    id: 'D',
                    pais: 'Colombia'
                }
            ],
            errors:[],
        }
    },
    methods:{
        Mensaje(text){
            console.log(text);
        },
        ValidarCamposOnSubmit(e) {
            this.errors.length = 0;
            if (this.nombre.value && this.edad.value && this.email.value) return true;

            if (this.nombre.value === '') this.errors.push('El nombre es obligatorio.');
            if (this.email.value === '') this.errors.push('El correo electrónico es obligatorio.');
            if (this.edad.value <= 0) this.errors.push('La edad debe ser mayor a 0 (cero).');

            e.preventDefault();
        },
        ValidarNombre(){
            if (this.nombre.value === ''){
                this.nombre.isValid = false;
                this.nombre.message = "El nombre es obligatorio.";
            }else{
                this.nombre.isValid = true;
                this.nombre.message = "Correcto!";
            }
        },
        GetValidClass(isValid){
            return isValid ? "valid" : "inValid";
        },
    },
    watch:{
        //watch sobre objetos
        email: {
            // eslint-disable-next-line
            handler: function (newValue, oldValue) {
                // console.log(`Nuevo valor: ${newValue.value}`);
                // console.log(`Valor anterior: ${oldValue.value}`);
                // console.log(/(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/.test(newValue.value));
                console.log(newValue.value.indexOf("@") > -1);
                this.email.isValid = newValue.value.indexOf("@") > -1;
            },
            deep: true
        },

    }
}
</script>

<style scoped>
.container{
    width:100%;
    max-width:700px;
}
a {
  color: #42b983;
}
label {
  margin-left: 0.5em !important;
}
.valid{
    box-shadow: inset 0 0 1px solid rgba(0, 140, 0, 0.782);
    color:rgba(0, 140, 0, 0.782);
}
.inValid{
    box-shadow: inset 0 0 1px solid rgba(255, 0, 0, 0.5);
    color:rgba(255, 0, 0, 0.5);
}
</style>
