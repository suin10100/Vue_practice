<template>
  <div id="app">
    <h1>{{ title }}</h1>
    <p>{{ greeting() }}</p>
    <ninjas></ninjas>
  </div>
</template>


<script>

import Ninjas from './Ninja.vue'

export default {
  components: {
    'ninjas': Ninjas
    // locally
  },
  data () {
    return {
      title: 'Ninja App'
      
      }
    },
    methods: {
      greeting: function(){
        return ' whao';
      }
    }
}
</script>

<style>
h1{
  color:purple
  /* scoped */
}
</style>
