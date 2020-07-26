<template>
    <div id="createAccountBox">
        <input v-model="username" placeholder="Enter Unique Username"><br>
        <input type="password" v-model="password" placeholder="Enter Password"><br>
        <input type="password" v-model="passwordCheck" placeholder="Confirm Password"><br>
        <label v-if="errorDisplay">{{errorMsg}}</label><br>
        <button @click="createNewAccount" :disabled="!readyToCreate">Create Account</button><br>
        <button @click="login">Already have an account?</button><br>
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
    @Action('createAccount', { namespace }) createAccount!: Function
    @Action('updateAccountStatus', { namespace }) updateAccountStatus!: Function
    
    // Data
    username = ''
    password = ''
    passwordCheck = ''
    errorDisplay = false
    errorMsg = ''
    readyToCreate = false

    // Methods
    createNewAccount() {
        const payload: any = {
            username: this.username,
            password: this.password
        }
        this.createAccount(payload)
    }

    login() {
        this.updateAccountStatus('pending')
    }

    // Watchers
    @Watch('passwordCheck')
    validatePasswordMatch() {
        if (this.password !== this.passwordCheck) {
            this.errorDisplay = true
            this.errorMsg = 'Passwords do not match'
            this.readyToCreate = false
        } else {
            this.errorDisplay = false
            this.readyToCreate = true
        }
    }

    @Watch('username')
    validateUsername() {
        if (this.username.length <= 5) {
            this.errorDisplay = true
            this.errorMsg = 'Username does not adhere to our standards.'
            this.readyToCreate = false
        } else {
            this.errorDisplay = false
            this.readyToCreate = true
        }
    }

    @Watch('password') 
    validatePassword() {
        if (this.password.length <= 5) {
            this.errorDisplay = true
            this.errorMsg = 'Password does not adhere to our standards.'
            this.readyToCreate = false
        } else {
            this.errorDisplay = false
            this.readyToCreate = true
        }
    }
}
</script>

<style lang="scss" scoped>

</style>