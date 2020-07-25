<template>
    <div id='dashboard'>
        {{title}}
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component, Watch } from 'vue-property-decorator'
import { Getter, Action } from 'vuex-class'

const namespace = 'profile'

@Component({
    components: {}
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