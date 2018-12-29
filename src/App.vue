<template>
  <div id="app">
    <b-container>
        <b-row class="title">
            <b-col><h4>Pizza-orders websockets debug tool</h4></b-col>
        </b-row>
        <b-row>
            <b-col><Token></Token></b-col>
        </b-row>
      <b-row>
        <b-col><Cook></Cook></b-col>
        <b-col><Client></Client></b-col>
      </b-row>
    </b-container>
  </div>
</template>


<script>
import Cook from './components/Cook.vue'
import Client from './components/Client.vue'
import Token from './components/Token.vue'

export default {
  name: 'app',
  components: {
    Cook, Client, Token
  }
}
</script>

<style>
    .title {
        margin: 20px;
    }
</style>
