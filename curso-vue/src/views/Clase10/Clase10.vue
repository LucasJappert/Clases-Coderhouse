<template>
  <div class="container">
    <div>
        Testing with <strong>Fetch</strong>
        <div class="mT10">
            <button @click="GetUsers()" class="btn btn-success">Obtener Usuarios</button>
        </div>
        <div class="mT20">
        <button @click="GetUsersWithAbortController()" class="btn btn-success">Test GetUsers with AbortController</button>
        </div>
        <hr>
        <strong>DESAFÍO + BREAK</strong>
        <hr>
        <div class="mT20">
            <button @click="GetCoursesWithFetch()" class="btn btn-success">Obtener Cursos</button>
        </div>
    </div>
    <div>
        <!-- users -->
        <ul>
            <li v-for="item in users" :key="item.id">
                {{ `${item.lastName}, ${item.name}` }}
            </li>
        </ul>

        <!-- courses -->
        <ul v-if="true">
            <li v-for="item in courses" :key="item.id">
                {{ item.name }}
            </li>
        </ul>
        <ol class="list-group list-group-numbered" v-else>
            <li v-for="item in courses" :key="item.id" class="list-group-item d-flex justify-content-between align-items-start">
                <div class="ms-2 me-auto">
                    <div class="fw-bold">{{ item.name }}</div>
                </div>
                <span class="badge bg-primary rounded-pill">{{ item.hours }}</span>
                <i class="bi bi-trash mL20 hP" @click="DeleteCourse(item.id)"></i>
            </li>
        </ol>
    </div>
    <div v-show="true">
        <hr>
        Testing with <strong>Fetch</strong>
        <br>
        <button @click="TestPOSTCourseUsingFetch()" class="btn btn-success">Test - POST</button>
        <button @click="TestPUTCourseUsingFetch()" class="btn btn-success mL20">Test - PUT</button>
        <button @click="TestDELETECourseUsingFetch()" class="btn btn-success mL20">Test - DELETE</button>
    </div>
    <div v-show="true">
        <hr>
        Testing with <strong>Axios</strong>
        <br>
        <button @click="GetCoursesWithAxios()" class="btn btn-primary" type="button">Test - GET</button>
        <button @click="TestPOSTCourseUsingAxios()" class="btn btn-primary mL20" type="button">Test - POST</button>
        <button @click="TestPUTCourseUsingAxios()" class="btn btn-primary mL20" type="button">Test - PUT</button>
        <button @click="TestDELETECourseUsingAxios()" class="btn btn-primary mL20" type="button">Test - DELETE</button>
    </div>

  </div>
</template>

<script>
import printHooks from "../../mixins/printHooks";
const axios = require('axios')
export default {
    name: "Clase10",
    // mixins:[printHooks],
    data(){
        return{
            users:[],
            courses:[]
        }
    },
    mounted(){
        //this.GetUsers();
        //this.GetCoursesWithAxios();
    },
    methods:{
        async GetUsers(){
            await fetch(`${process.env.VUE_APP_API_URL}/api/users`)
            .then(response => {
                //console.log(response);
                return response.json();
            })
            .then(data => {
                console.table(data);
                //this.users = data;
            })
            .catch(err => console.log(err))
            .finally(() => console.log("Finalizó la petición de datos remotos..."));
        },
        async GetUsersWithAbortController(){
            const controller = new AbortController();
            const signal = controller.signal;
            setTimeout(() => {
                controller.abort()
            }, 200);
            let start = performance.now();
            await fetch(`${process.env.VUE_APP_API_URL}/api/users`, { signal })
            //.then(this.Sleeper(1100))
            // fetch(`${process.env.VUE_APP_API_URL}/api/users`)
            .then(response => {
                //console.log(response);
                console.log(performance.now() - start);
                return response.json();
            })
            .then(data => {
                //console.table(data);
                this.users = data;
            })
            .catch(err => {
                err.name == 'AbortError'
                            ? console.log('Manejo el error...')  //Función o manejo de error
                            : console.log(`${err}`)              //Veo el error real
            })
            .finally(() => {
                console.log("Finalizó la petición de datos remotos...")
            });
        },
        async GetCoursesWithFetch(){
            await fetch(`${process.env.VUE_APP_API_URL}/api/courses`)
            .then(response => { return response.json(); })
            .then(json => {
                //console.table(json);
                this.courses = json;
            })
            .catch(error => console.log(error))
            .finally(() => console.log("Finalizó la petición de datos remotos..."));
        },
        async TestPOSTCourseUsingFetch(){
             const cursoData = {
                name: "React",
                hours: 31
            }
             const encabezado = {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(cursoData)
            }
            await fetch(`${process.env.VUE_APP_API_URL}/api/courses`, encabezado)
            .then(response => response.json())
            .then(json => console.log(json))
            .catch(error => console.log(error));
        },
        async TestPUTCourseUsingFetch(){
             const cursoData = {
                name: "Angular",
                hours: 31
            }
             const encabezado = {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(cursoData)
            }
            await fetch(`${process.env.VUE_APP_API_URL}/api/courses/4`, encabezado)
            .then(response => response.json())
            .then(json => console.log(json))
            .catch(error => console.log(error));
        },
        async TestDELETECourseUsingFetch(id = 4){
             const encabezado = {
                method: "DELETE"
            }
            await fetch(`${process.env.VUE_APP_API_URL}/api/courses/${id}`, encabezado)
            .then(response => response.json())
            .then(json => console.log(json))
            .catch(error => console.log(error));
        },

        async GetCoursesWithAxios(){
            //console.log(1);
            await axios.get(`${process.env.VUE_APP_API_URL}/api/courses`)
            .then(response => {
                //console.log(response);
                return response.data;
            })
            .then(data => {
                this.courses = data;
                //console.log(2);
            })
            .catch(err => { console.log(`${err}`) })
            .finally(() => { console.log("Finalizó la petición de datos remotos...") });
            //console.log(3);
        },
        async TestPOSTCourseUsingAxios(){
             const cursoData = {
                name: "React",
                hours: 31
            }
            await axios.post(`${process.env.VUE_APP_API_URL}/api/courses`, cursoData)
            .then(response => {
                console.log("Registro agregado!", response.data)
                this.GetCoursesWithAxios();
            })
            .catch(error => console.log(error));
        },
        async TestPUTCourseUsingAxios(){
             const cursoData = {
                name: "Angular",
                hours: 35
            }
            await axios.put(`${process.env.VUE_APP_API_URL}/api/courses/4`, cursoData)
            .then(response => {
                console.log("Registro actualizado!", response.data)
                this.GetCoursesWithAxios();
            })
            .catch(error => console.log(error));
        },
        async TestDELETECourseUsingAxios(id = 4){
            await axios.delete(`${process.env.VUE_APP_API_URL}/api/courses/${id}`)
            .then(response => {
                console.log("Registro eliminado!", response.data)
                this.GetCoursesWithAxios();
            })
            .catch(error => console.log(error));
        },
        DeleteCourse(idCourse){
            this.TestDELETECourseUsingAxios(idCourse);
        },
        Sleeper(ms) {
            return function(x) {
                return new Promise(resolve => setTimeout(() => resolve(x), ms));
            };
        }
    }
}
</script>

<style>
</style>
