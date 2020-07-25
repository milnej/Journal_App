<template>
    <div id="login">
        {{title}}
        <br><br>
        <login-box v-if="loginFlag"></login-box>
        <create-account-box v-if="createAccountFlag"></create-account-box>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component, Watch } from 'vue-property-decorator'
import { Getter, Action } from 'vuex-class'
import LoginBox from '../components/LoginBox.vue'
import CreateAccountBox from '../components/CreateAccountBox.vue'

const namespace = 'profile'

@Component({
    components: {
        LoginBox,
        CreateAccountBox
    }
})
export default class Login extends Vue {
    
    @Getter('getAccountStatus', { namespace }) accountStatus!: string

    // Data
    loginFlag = true
    createAccountFlag = false
    errorDisplay = false
    title = 'Log into an existing Account'

    // Watchers
    @Watch('accountStatus')
    onChangeAccountStatus() {
        if (this.accountStatus === "failed") {
            // display some error message
            this.errorDisplay = true
        } else if (this.accountStatus === "true") {
            this.$router.push('dashboard')
        } else if (this.accountStatus === "creating") {
            this.loginFlag = false
            this.createAccountFlag = true
            this.title = 'Create a new account'
        } else if (this.accountStatus === "pending") {
            this.loginFlag = true
            this.createAccountFlag = false
            this.title = 'Log into an existing Account'
        } else if (this.accountStatus === "false") {
            console.log("Idk yet")
        } else {
            console.log('Invalid account status.')
        }
    }
}
</script>

<style lang="scss" scoped>

</style>