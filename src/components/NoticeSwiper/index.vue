<template>
    <!-- 广告切换 -->
    <div class="NoticeSwiper">
        <div class="pc-slide">
            <div class="view">
                <a class="arrow-left" href="javascript:" @click="arrowLeft"></a>
                <a class="arrow-right" href="javascript:" @click="arrowRight"></a>
                <swiper :options="swiperOption1" ref="mySwiper1">
                    <swiper-slide v-for="(item, index) in imgUrl" :key="index">
                        <img :src="item" alt="">
                    </swiper-slide>
                </swiper>
            </div>
            <div class="preview">
                <a class="arrow-left" href="javascript:" @click="arrowLeft"></a>
                <a class="arrow-right" href="javascript:" @click="arrowRight"></a>
                <swiper :options="swiperOption2" ref="mySwiper2">
                    <swiper-slide v-for="(item, index) in imgUrl" :key="index" :class="activeIndex2==index?'active-nav':''" :ref='activeIndex2==index?"nav":""'>
                        <img :src="item" alt="" @mouseover="change(index)">
                    </swiper-slide>
                </swiper>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'NoticeSwiper',
        props:{
            imgUrl:{
                type: Array,
                required: []
            },
        },
        components: {
        },
        computed: {
            swiper1() {
                return this.$refs.mySwiper1.$swiper
            },
            swiper2() {
                return this.$refs.mySwiper2.$swiper
            }
        },
        data () {
            let _vm = this
            return {
                swiperOption1:{
                    on:{
                        slideChangeTransitionStart() {
                            _vm.activeIndex2 = this.activeIndex;
                        }
                    }
                },
                activeIndex2: 0,
                swiperOption2:{
                    slidesPerView: 'auto',
                    allowTouchMove: false,
                    on:{
                        init: function(){
                            _vm.activeIndex2 = this.activeIndex;
                        },
                        click() {
                            _vm.activeIndex2 = this.clickedIndex;
                            _vm.swiper1.slideTo(this.clickedIndex,1000);
                        }
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
            arrowRight() {
                if(this.swiper1.activeIndex + 1>2) {
                    this.activeIndex2 = 0;
                } else {
                    this.activeIndex2 = this.swiper1.activeIndex + 1;
                }
                if (this.swiper1.activeIndex == this.swiper1.slides.length - 1) {
                    this.swiper1.slideTo(0, 1000);
                    return
                }
                this.swiper1.slideNext()
            },
            arrowLeft() {
                if(this.swiper1.activeIndex - 1<0) {
                    this.activeIndex2 = 2;
                } else {
                    this.activeIndex2 = this.swiper1.activeIndex - 1;
                }
                if (this.swiper1.activeIndex == 0) {
                    this.swiper1.slideTo(this.swiper1.slides.length - 1, 1000);
                    return
                }
                this.swiper1.slidePrev()
            },
            change(index) {
                this.swiper1.slideTo(index, 1000);
            }
        }
    }
</script>

<style lang="scss">
    .NoticeSwiper {
        .pc-slide {
            width: 350px;
            margin: 0 auto;
        }
        .view {
            position: relative;
            img {
                width: 100%;
            }
        }
        .view .swiper-container {
            width: 350px;
            height: 350px;
        }

        .view .arrow-left {
            background: url(../../assets/images/index_tab_l.png) no-repeat left top;
            position: absolute;
            left: 10px;
            top: 50%;
            margin-top: -25px;
            width: 28px;
            height: 51px;
            z-index: 10;
        }

        .view .arrow-right {
            background: url(../../assets/images/index_tab_r.png) no-repeat left bottom;
            position: absolute;
            right: 10px;
            top: 50%;
            margin-top: -25px;
            width: 28px;
            height: 51px;
            z-index: 10;
        }

        .preview {
            width: 100%;
            margin-top: 10px;
            position: relative;
        }

        .preview .swiper-container {
            width: 270px;
            height: 82px;
            margin-left: 35px;
        }

        .preview .swiper-slide {
            width: 87px;
            height: 82px;
            cursor:pointer;
        }

        .preview .arrow-left {
            background: url(../../assets/images/feel3.png) no-repeat left top;
            position: absolute;
            left: 10px;
            top: 50%;
            margin-top: -9px;
            width: 9px;
            height: 18px;
            z-index: 10;
        }

        .preview .arrow-right {
            background: url(../../assets/images/feel4.png) no-repeat left bottom;
            position: absolute;
            right: 10px;
            top: 50%;
            margin-top: -9px;
            width: 9px;
            height: 18px;
            z-index: 10;
        }

        .preview img {
            width: 80px;
            height: 80px;
            padding: 1px;
        }

        .preview .active-nav img {
            padding: 0;
            border: 1px solid #F00;
        }
    }
</style>