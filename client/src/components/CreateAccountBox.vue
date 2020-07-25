<template>
    <div id="createAccountBox">
        <input v-model="username" placeholder="Enter Unique Username"><br>
        <input type="password" v-model="password" placeholder="Enter Password"><br>
        <input type="password" v-model="passwordCheck" placeholder="Confirm Password"><br>
        <button @click="createAccount">Create Account</button><br>
        <button @click="login">Already have an account?</button>
        <label v-if="errorDisplay"></label>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component, Watch } from 'vue-property-decorator'
import { Getter, Action } from 'vuex-class'

const namespace = 'profile'

@Component
export default class LoginBox extends Vue {

    @Getter('getAccountStatus', { namespace }) accountStatus!: string
    @Action('verifyAccount', { namespace }) verifyAccount!: Function
    @Action('updateAccountStatus', { namespace }) updateAccountStatus!: Function
    
    // Data
    username = ''
    password = ''
    passwordCheck = ''
    errorDisplay = false

    // Methods
    createAccount() {
        const payload: any = {
            username: this.username,
            password: this.password
        }
        this.verifyAccount(payload)
    }

    login() {
        this.updateAccountStatus('pending')
    }
}
</script>

<style lang="scss" scoped>

</style>