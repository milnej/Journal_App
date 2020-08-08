<template>
    <div id="titleBar" class='container'>
        <div class='row'>
            <div class='col-sm'></div>
            <div id='title' class='col-sm'>{{title}}</div>
            <div class='col-sm'>
                <button v-if='displayLogin' @click='login' type='button' class='btn btn-primary'>Log-in</button>
                <button v-if='displayLogout' @click='logout' type='button' class='btn btn-primary'>Log-out</button>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component, Watch } from 'vue-property-decorator'
import { Getter, Action } from 'vuex-class'

const namespace = 'profile' //the folder that all the state functions are in

@Component
export default class TitleBar extends Vue {

    // Vuex Imports (! - definite assignment operator)
    @Getter('getAccountStatus', { namespace }) accountStatus!: string
    @Action('updateAccountStatus', { namespace }) updateAccountStatus!: Function
    
    // Data
    title = 'Write Life'
    displayLogin = true
    displayLogout = false

    // Methods
    login() {
        this.$router.push('account')
        this.updateAccountStatus('pending')
    }

    logout() {
        this.$router.push('/')
        this.updateAccountStatus('false')
    }

    // Watchers
    @Watch('accountStatus')
    onChangeAccountStatus() {
        if (this.accountStatus === 'false') {
            this.displayLogin = true
            this.displayLogout = false
        } else if (this.accountStatus === 'true') {
            this.displayLogout = true
            this.displayLogin = false
        } else if (this.accountStatus === 'pending' || this.accountStatus === 'creating') {
            this.displayLogout = false
            this.displayLogin = false
        } else {
            console.log('Incorrect Account Status, cannot render part of the page correctly.')
        }
    }

}
</script>

<style lang="scss" scoped>
@import '../../assets/custom.scss';
#titleBar {
    background-color: $title-blue;
    padding: 10px;
    margin: 0px;
    width: 100%;
    max-width: 100%;
}
#title {
    float: center;
    font-size: large;
}
.btn {
    float: right;
}
</style>