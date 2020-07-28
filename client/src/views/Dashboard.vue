<template>
    <div id='dashboard'>
        {{title}}
        <nav-pane></nav-pane>
        <router-view/>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component, Watch } from 'vue-property-decorator'
import { Getter, Action } from 'vuex-class'
import NavPane from '../components/NavPane.vue'

const namespace = 'profile'

@Component({
    components: {
        NavPane
    }
})
export default class Dashboard extends Vue {

    @Getter('getUsername', { namespace }) username!: string
    @Getter('getAccountStatus', { namespace }) accountStatus!: string

    // Data
    title = ''

    // Lifecycle Hooks
    created() {

        // reroute to home page if not logged in
        if (this.accountStatus !== 'true') {
            this.$router.push('/')
        }

        this.title = 'Welcome ' + this.username
    }
}
</script>

<style lang="scss" scoped>

</style>