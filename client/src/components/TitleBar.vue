<template>
    <div id="TitleBar">
        {{title}}
        <button @click='login'>Log-in</button>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component, Watch } from 'vue-property-decorator'

@Component
export default class TitleBar extends Vue {
    
    // Data
    title = 'Write Life'

    // Methods
    login() {
        this.$router.push('login')
    }

    // Watchers

}
</script>

<style lang="scss" scoped>

</style>