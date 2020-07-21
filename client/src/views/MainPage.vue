<template>
    <div id='mainPage'>
        <title-bar></title-bar>
        <router-view/>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component } from 'vue-property-decorator'
import TitleBar from '../components/TitleBar.vue'

@Component({
    components: {
        TitleBar
    }
})
export default class MainPage extends Vue {
    
}
</script>

<style lang="scss" scoped>

</style>