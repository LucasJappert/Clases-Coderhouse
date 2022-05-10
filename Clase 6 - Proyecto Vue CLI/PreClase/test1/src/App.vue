<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <TestWatcher />
    <TestComponente1 />
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import TestWatcher from "./components/TestWatcher.vue";
import TestComponente1 from "./components/TestComponente1/index.vue";
/* eslint-disable */
export default {
  name: "App",
  components: {
    HelloWorld, TestWatcher, TestComponente1
  },
  mounted(){
  },
  methods: {
    test(){
      console.log("Hola soy el componente App");
    }
  }
};
</script>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.bgcBlack{background-color:black; padding:20px}
</style>
