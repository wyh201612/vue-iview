<template>
    <div @click='toNoticeDetail($event)'>
        <vue-seamless-scroll :data="noticeList" :class-option="optionLeft" class="seamless-warp">
            <ul class="item">
                <li v-for="(item,index) in noticeList" :key="index" class="text-cut text-sm" :data-id='item.id' data-isarticle='false' data-name='公告'>
                    <div :data-id='item.id' data-isarticle='false' data-name='公告'>
                        <img src="../../assets/images/notice-icon.png" alt="" class="icon" :data-id='item.id' data-isarticle='false' data-name='公告'>
                        <!-- <img src="../../assets/images/information-icon.png" alt="" class="icon"> -->
                        <span class="spanz" :data-id='item.id' data-isarticle='false' data-name='公告'>公告</span>
                        <span class="line" :data-id='item.id' data-isarticle='false' data-name='公告'></span>
                        <span :data-id='item.id' data-isarticle='false' data-name='公告'>{{item.title}}</span>
                    </div>
                </li>
            </ul>
        </vue-seamless-scroll>
    </div>
</template>
<script>
    export default {
        props:{
            noticeList:{
                type: Array,
                required: true
            }
        },
        data () {
            return {
                
            }
        },
        computed: {
            optionLeft () {
                return {
                    direction: 1, // 0：向下；1：向上；2：向左；3：向右
                    limitMoveNum: 1, // 滚动行数
                    step: 1, // 滚动速度
                    hoverStop: false, // 鼠标悬停关闭
                    singleHeight: 30, // 单行停顿高度
                    waitTime: 2500 // 单行停顿时间
                }
            }
        },
        methods: {
            toNoticeDetail(event) {
                console.log(event.target.dataset)
                this.$router.push({path: '/noticeDetail', query: {id: event.target.dataset.id, isArticle: event.target.dataset.isarticle, name: event.target.dataset.name}})
            }
        }
    }
</script>
<style lang="scss" scoped>
    .seamless-warp {
        overflow: hidden;
        width: 100%;
        height: 30px;
        ul {
            overflow: hidden;
            height: 100%;
            li {
                width: 100%;
                height: 30px;
                line-height: 30px;
                float: left;
                cursor: pointer;
                span {
                    vertical-align: middle;
                }
                .icon {
                    width: 22px;
                    height: 22px;
                    vertical-align: middle;
                    margin-right: 6px;
                }
                .line {
                    display: inline-block;
                    background: var(--darkGray);
                    margin: 0 6px;
                    width: 1px;
                    height: 12px;
                    vertical-align: middle;
                }
            }
        }
    }
</style>