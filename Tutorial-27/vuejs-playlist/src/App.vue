<template>
  <div id="app">
    <!-- <form-helper> -->
      <!-- pass down to form Helper -->
      <!-- <h2 slot="title">{{ title }}</h2> 
      <p slot = "text">i am the paragraph text </p> -->

      <!-- <div slot ="form-header">
        <h3>This is the Title of the form</h3>
        <p> information about the form</p>
      </div>
      <div slot ="form-fields">
        <input type="text" placeholder="name" required />
        <input type="password" placeholder="password" required/>
      </div>
      <div slot="form-controls">
        <button v-on:click="handleSubmit">Submit</button>
      </div>
    </form-helper> -->
    <KeepAlive>
    <component v-bind:is="component">
      <!-- output - form-one -->
    </component>
  </KeepAlive>
    <button v-on:click="component = 'form-one'">Show form one</button>
    <button v-on:click="component = 'form-two'">Show form two</button>
    
  </div>
</template>

<script>
// import formHelper from './components/formHelper.vue'
import formOne from './components/formOne.vue';
import formTwo from './components/formTwo.vue';
export default {
  components: {
    // 'form-helper': formHelper
    'form-one': formOne,
    'form-two': formTwo
  },
  data () {
    return {
      
        component:'form-two'
      }
  },
  methods: {
        // handleSubmit: function(){
        //     alert('thanks for submitting');
        // }
  }
}
</script>

<style scoped>

</style>
