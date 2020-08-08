<template>
    <div id="app">
        <main-page/>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component } from 'vue-property-decorator'
import MainPage from './views/MainPage.vue'

@Component({
  components: {
    MainPage
  }
})
export default class App extends Vue {

}
</script>

<style lang="scss">
@import '../assets/custom.scss';
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #000000;
}
</style>
