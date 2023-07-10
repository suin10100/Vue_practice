<template>
    <div>
      <header>
        <h1 v-on:click="changeTitle">{{ title }}</h1>
      </header>
    </div>
  </template>
  
  <script>
  import { bus } from '../main';

  export default {
    props: {
        title: {
            type: String
        }
    },
    data () {
      return {
        title: 'Vue Ninjas'
      }
    },
    methods: {
        changeTitle:function(){
            // this.$emit('changeTitle', 'vue wizards');
            // 원시 타입이라 포함되지 않음(이전)
            this.title = 'vue wizards';
            bus.$emit('titleChanged', 'Vue Wizards');
    }
  }
}
  </script>
  
  <style scoped>
  header{
    background: lightgreen;
    padding: 10px;
  }
  h1{
    color: #222;
    text-align: center;
  }
  </style>