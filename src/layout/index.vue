<template>
    <Layout>
        <Header :style="{position: 'fixed', width: '100%'}">
            <Menu mode="horizontal" theme="dark" active-name="1">
                <div class="layout-logo"></div>
                <div class="layout-nav">
                    <MenuItem name="1">
                        <Icon type="ios-navigate"></Icon>
                        Item 1
                    </MenuItem>
                    <MenuItem name="2">
                        <Icon type="ios-keypad"></Icon>
                        Item 2
                    </MenuItem>
                    <MenuItem name="3">
                        <Icon type="ios-analytics"></Icon>
                        Item 3
                    </MenuItem>
                    <MenuItem name="4">
                        <Icon type="ios-paper"></Icon>
                        Item 4
                    </MenuItem>
                </div>
            </Menu>
        </Header>
        <Content :style="{margin: '88px 20px 20px', background: '#fff'}">
            <app-main />
        </Content>
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
