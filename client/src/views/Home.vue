<template>
    <div class="home">
        Home Page
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component } from 'vue-property-decorator'
import { Action } from 'vuex-class'

const namespace = 'profile'

@Component({
    components: {}
})
export default class Home extends Vue {
    
    @Action('updateAccountStatus', { namespace }) updateAccountStatus!: Function

    // lifecycle hooks
    created() {
        this.updateAccountStatus('false')
    }

}
</script>

<style lang="scss" scoped>
    
</style>