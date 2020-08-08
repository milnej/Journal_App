<template>
    <div id='navPane'>
        <ul>
            <li>All Entries</li>
            <li>Activities</li>
            <li>Statistics</li>
            <li>Import</li>
        </ul>
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
export default class NavPane extends Vue {

    

    // Data

    // Lifecycle Hooks
    
}
</script>

<style lang="scss" scoped>
ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
    text-align: left;
}
#navPane {
    left: 0;
    position: fixed;
    text-align: center;
    height: 100%;
    width: 100px;
    background-color: #c9c9c9;
    padding-top: 20px;
    padding-left: 30px;
}
</style>