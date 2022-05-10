<template>
  <div>
    <div class="bgcBlack">{{ titulo }}</div>

    <p>
      Hacé una pregunta que tenga una respuesta de SI/NO:
      <input v-model="question" />
    </p>
    <p>{{ answer }}</p>
  </div>
</template>
<script>
export default {
  data() {
    return {
      titulo: "Titulo 1",
      question: "",
      answer: "Las preguntas suelen terminar con el signo ? ;-)",
    };
  },
  mounted() {
    //Cambiamos el
    setTimeout(() => {
      this.titulo = "Titulo 2";
    }, 2000);
    setTimeout(() => {
      this.titulo = "Titulo 3";
    }, 4000);

    //Cambiamos titulo con prop computada
    setTimeout(() => {
      this.Titulo = "Actualizado prop computada";
    }, 7000);
  },
  watch: {
    titulo: function (newVal, oldVal) {
      console.log(`El título ha cambiado de "${oldVal}" a ${newVal}!`);
    },
    question(newQuestion, oldQuestion) {
      if (newQuestion.indexOf("?") > -1) {
        this.getAnswer();
      }
    },
  },
  methods: {
    async getAnswer() {
      this.answer = "Procesando pregunta...";
      try {
          let result = await new Promise((resolve) =>{
              setTimeout(()=>{
                  resolve("SI!")
              }, 2000);
          })
          .then(e => e);
        this.answer = result;
      } catch (error) {
        this.answer = error;
      }
    },
  },
  computed: {
      Titulo: {
          get() {
              return this.titulo;
          },
          set(nuevoValor) {
              this.titulo = nuevoValor;
          }
      }
  }
};
</script>
<style>
</style>
