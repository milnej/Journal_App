<template>
    <div id="loginBox">
        <input v-model="username" placeholder="Enter Username"><br>
        <input type="password" v-model="password" placeholder="Enter Password"><br>
        <button @click="login">Log-in</button>
        <button @click="createAccount">Create Account</button>
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
    
    // Data
    username = ''
    password = ''
    errorDisplay = false

    // Methods
    login() {
        const payload: any = {
            username: this.username,
            password: this.password
        }
        this.verifyAccount(payload)
    }

    createAccount() {
        console.log('unimplemented')
    }

    // Watchers
    @Watch('accountStatus')
    onChangeAccountStatus() {
        if (this.accountStatus === "failed") {
            // display some error message
            this.errorDisplay = true
        } else if (this.accountStatus === "true") {
            this.$router.push('dashboard')
        } else if (this.accountStatus === "creating") {
            this.$router.push('account-creation')
        } else if (this.accountStatus === "pending" || this.accountStatus === "false") {
            console.log("Idk yet")
        } else {
            console.log('Invalid account status.')
        }
    }
}
</script>

<style lang="scss" scoped>

</style>