<template>
    <div id='dashboardMain'>
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
export default class DashboardMain extends Vue {

    // Data
    title = 'General Dashboard'

    // Lifecycle Hooks
    
}
</script>

<style lang="scss" scoped>

</style>