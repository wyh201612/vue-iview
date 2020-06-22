<template>
    <Layout>
        <Header>Header</Header>
        <Content><app-main /></Content>
        <Footer>Footer</Footer>
    </Layout>
</template>

<script>
import Vue from 'vue'
import { getCookie, setCookie, removeCookie } from '@/utils/auth'
import { AppMain } from './components'
import ResizeMixin from './mixin/ResizeHandler'

export default {
    name: 'Layouts',
    data() {
        return {
            eventHub: new Vue(),
        }
    },
    provide() {
        return {
            eventHub: this.eventHub
        };
    },
    filters: {
    },
    components: {
        AppMain
    },
    mixins: [ResizeMixin],
    computed: {
        
    },
    created() {

    },
    mounted() {
        
    },
    watch: {
        
    },
    methods: {
        
    },
    distroyed: function() {
        
    }
}
</script>

<style lang="scss" scoped>
    
</style>
