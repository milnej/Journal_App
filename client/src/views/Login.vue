<template>
    <div id="login">
        Log-in Page
        <br><br>
        <login-box></login-box>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component } from 'vue-property-decorator'
import LoginBox from '../components/LoginBox.vue'

@Component({
    components: {
        LoginBox
    }
})
export default class Login extends Vue {
    
}
</script>

<style lang="scss" scoped>

</style>