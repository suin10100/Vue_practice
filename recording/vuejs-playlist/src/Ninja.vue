<template>
    <div id="app">
      <h1>List of ninjas</h1>
      <!-- style의 h1 태그의 보라색도 바뀐다. -->
      <ul>
        <li v-for="ninja in ninjas">{{ ninja }}</li>
      </ul>
    </div>
  </template>
  
  <script>
  export default {
    data () {
      return {
        ninjas: ['Yoshi', 'Mario', 'Ryu']
        
        }
      }
  }
  </script>
  
  <style>
h1{
  color:green;
  /* 해당 h1 태그가 green 으로 바뀐다. */
}
  </style>
  