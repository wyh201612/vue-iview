<template>
    <!-- 缓慢移动的图片切换 -->
    <div class="IphoneSwiper">
        <swiper :options="swiperOption" ref="mySwiper">
            <swiper-slide v-for="(item, index) in imgUrl" :key="index">
                <img :src="item.imgUrl" alt="">
            </swiper-slide>
            <div class="swiper-pagination" slot="pagination"></div>
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
                    speed: 700,
                    lazy: {
                        loadPrevNext: true,
                    },
                    // loop: true,
                    on: {
                        slideChangeTransitionEnd() {
                            _vm.swiper.autoplay.start();
                            // this.slides.transition(this.params.autoplay.delay+this.params.speed).transform('translate3d(-60px, 0, 0)');
                        },
                        slideChangeTransitionStart() {
                        //     this.slides.transition(this.params.speed).transform('translate3d(0, 0, 0)');
                        },
                    },
                    pagination: {
                        el: '.swiper-pagination',
                        clickable: true,
                        renderBullet(index, className) {
                            return '<div class="' + className + '"><span><i></i></span></div>';
                        },
                    },
                    navigation: {
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev',
                        hideOnClick: false,
                    }
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
    .IphoneSwiper {
        .swiper-button-next:after, .swiper-container-rtl .swiper-button-prev:after {
            content: '';
        }
        .swiper-button-prev:after, .swiper-container-rtl .swiper-button-next:after {
            content: '';
        }
        .swiper-container {
        }
        .swiper-wrapper {
        }
        .swiper-slide {
            width: 100%;
            height: 380px;
            transition-timing-function:linear;
            img {
                height: 380px;
            }
        }
        .swiper-slide img {
            width:100%;
            border-radius: 4px;
        }
        .swiper-pagination-bullet {
            background:none;
            opacity:1;
            margin:0 6px !important;
            width:50px;
            height:2px;
            position:relative;
            outline:none;
        }
        .swiper-pagination-bullet span {
            width:50px;
            height:2px;
            background:#CCC;
            display:block;
        }
        .swiper-pagination-bullet i {
            background: var(--orangeDark);
            height:2px;
            transform: scaleX(0);
            transform-origin: 0;
            display: block;
        }
        .swiper-pagination-bullet.swiper-pagination-bullet-active i {
            animation: first 5s;
        }			
        @keyframes first {
            0% {transform:scaleX(0.7);width:2px;}
            100% {transform:scaleX(1);width:50px;}
        }
    }
    
</style>