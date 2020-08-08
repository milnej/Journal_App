<template>
    <div id="loginBox" class='form-group'>
        <input type='username' class='inputText' v-model="username" v-on:keyup.enter="login" placeholder="Enter Username"><br>
        <input type='password' class='inputText' v-model="password" v-on:keyup.enter="login" placeholder="Enter Password"><br>
        <button id='loginButton' @click="login" type='button' class='btn btn-info'>Log-in</button>
        <button id='createAccountButton' @click="createAccount" type='button' class='btn btn-info'>Create Account</button>
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
        this.updateAccountStatus('creating')
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
@import '../../assets/custom.scss';
#loginBox {
    margin-left: 35%;
    margin-right: 35%;
}
#loginButton {
    float: left;
}
#createAccountButton {
    float: right;
}
.inputText {
    width: 100%;
}
</style>