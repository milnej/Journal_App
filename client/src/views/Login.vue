<template>
    <div id="login">
        <title-bar></title-bar>
        Log-in Page
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
export default class Login extends Vue {
    
}
</script>

<style lang="scss" scoped>

</style>