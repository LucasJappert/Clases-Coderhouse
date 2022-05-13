<template>
  <div class="Titulo">
      <h1>CoderHouse</h1>
      <h2>
          <slot></slot>
      </h2>
  </div>
</template>

<style scoped>
h1 {
    font-size: 3em;
    padding:10px;margin:0;
}
.Titulo {
    padding: 10px;
    background-color: #ccc;
    margin-bottom:10px;
}
</style>
