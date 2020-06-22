<template>
    <!--全屏首页图片切换 -->
    <div class="AllSwiper">
        <swiper :options="swiperOption" ref="mySwiper">
            <swiper-slide v-for="(item, index) in imgUrl" :key="index">
                <img :src="item.imgUrl">
            </swiper-slide>
            <div class="swiper-pagination" slot="pagination"></div>
            <!-- <div class="swiper-button-prev swiper-button-white" slot="button-prev"></div>
            <div class="swiper-button-next swiper-button-white" slot="button-next"></div> -->
        </swiper>
    </div>
</template>

<script>
    export default {
        props:{
            imgUrl:{
                type: Array,
                required: []
            },
        },
        computed: {
            swiper() {
                return this.$refs.mySwiper.$swiper
            },
        },
        data () {
            let _vm = this;
            return {
                swiperOption: {
                    autoplay: {
                        delay: 5000,
                        disableOnInteraction: false,
                    },
                    loop: true,
                    // navigation: {
                    //     nextEl: '.swiper-button-next',
                    //     prevEl: '.swiper-button-prev',
                    // },
                    pagination: {
                        el: '.swiper-pagination',
                        clickable :true,
                    },
                    on: {
                        slideChangeTransitionEnd() {
                        },
                        slideChangeTransitionStart() {
                        },
                    },
                },
            }
        },
        created(){
        　　
        },
        watch:{
            
        },
        mounted(){
        },
        methods: {
            
            
        }
    }
</script>

<style lang="scss">
    .AllSwiper {

        .swiper-container {
            width: 100%;
            height: 100%;
        }

        .swiper-container .swiper-pagination {
            
        }

        .swiper-container .swiper-slide {
            position: relative;
            overflow: hidden;
            height: 380px;
        }

        .swiper-pagination-bullet {
            width: 10px;
            height: 10px;
            background: none;
            border: 1px solid #fff;
            opacity: 1;
        }

        .swiper-pagination-bullet-active {
            background: #fff;
        }

        img {
            width: 100%;
            height: 380px;
        }

    }
    
</style>