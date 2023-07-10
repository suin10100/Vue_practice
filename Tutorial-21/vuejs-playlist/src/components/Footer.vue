<template>
    <div>
      <footer>
        <p>{{ copyright }} {{ title }}</p>
      </footer>
    </div>
  </template>
  
  <script>
  import { bus } from '../main';

  export default {
    props:{
        title:{
           type: String 
        }
    },
    data () {
      return{
        copyright: 'Copyright 2023'
      }
    },
    created(){
        bus.$on('titleChanged',(data)=> {
            this.title = data;
        })
    }
  }
  </script>
  
  <style>
  footer{
    background: #222;
    padding: 6px;
  }
  p{
    color: lightgreen;
    text-align: center;
  }
  </style>