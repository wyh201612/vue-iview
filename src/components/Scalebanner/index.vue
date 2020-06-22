<template>
    <!-- 缩放的banner图切换 -->
    <div class="scalebanner">
        <swiper :options="swiperOption" ref="mySwiper" :style="activeIndexs?'background-color:'+bgColo[activeIndexs]:''">
            <swiper-slide v-for="(item, index) in imgUrl" :key="index" class="swiper-slide">
                <!-- <div class="title" data-swiper-parallax="-130%">
                    <h3>Adidas NMD</h3>
                </div> -->
                <div class="img-box">
                    <img :src="item.imgUrl" :style="index==0?'transform:translateX(0);':''">
                </div>
            </swiper-slide>
        </swiper>
        <!--左箭头-->
        <div class="button-prev button" @click="prev">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 350 160 90">
                <g id="arrow-svg-home">
                    <g id="circ" class="cls-1">
                        <circle cx="42" cy="42" r="40" class="cls-4"></circle>
                    </g>
                    <g id="arrow">
                        <path id="arrow-trg" d="M.983,6.929,4.447,3.464.983,0,0,.983,2.482,3.464,0,5.946Z"></path>
                    </g>
                    <path id="line" d="M120,0H0" class="cls-3" ></path>
                </g>
            </svg>
        </div>
        <!--右箭头-->
        <div class="button-next button" @click="next">
            <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 350 160 90">
                <g id="arrow-svg-home">
                    <g id="circ" class="cls-1">
                        <circle  cx="42" cy="42" r="40" class="cls-4"></circle>
                    </g>
                    <g id="arrow">
                        <path id="arrow-trg" d="M.983,6.929,4.447,3.464.983,0,0,.983,2.482,3.464,0,5.946Z" class="cls-2"></path>
                    </g>
                    <path id="line" d="M120,0H0" class="cls-3" ></path>
                </g>
            </svg>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'scalebanner',
        props:{
            imgUrl:{
                type: Array,
                required: []
            },
        },
        components: {
        },
        computed: {
            swiper() {
                return this.$refs.mySwiper.$swiper
            },
        },
        data () {
            let _vm = this;
            let slides = '';
            let imgBox = '';
            let imgPrev = '';
            let imgActive = '';
            let derection = '';
            return {
                imgList: [require('../../assets/images/banner_image.png'),require('../../assets/images/sc_banner_image.png'),require('../../assets/images/aqbz_banner_image.png')],
                lock: false,
                bgColo: ["rgb(179, 189, 196)","rgb(180, 183, 166)","rgb(140, 152, 187)"], //背景色
                activeIndexs: '',
                swiperOption:{
                    speed: 1300,
                    autoplay: {
                        delay: 5000,
                        stopOnLastSlide: false,
                        disableOnInteraction: false,
                    },
                    // loop: true,
                    allowTouchMove: false,//禁止触摸滑动
                    parallax : true,  //文字位移视差
                    on:{
                        transitionStart: function(){
                            _vm.lock = true;//锁住按钮
                            slides = this.slides;
                            _vm.activeIndexs = this.activeIndex;
                            imgBox = slides.eq(this.previousIndex).find('.img-box'); //图片包装器
                            imgPrev = slides.eq(this.previousIndex).find('img');  //当前图片
                            imgActive = slides.eq(this.activeIndex).find('img');  //下一张图片
                            derection = this.activeIndex-this.previousIndex;
                            
                            imgBox.transform('matrix(0.6, 0, 0, 0.6, 0, 0)');
                            imgPrev.transition(1000).transform('matrix(1.2, 0, 0, 1.2, 0, 0)');//图片缩放视差
                            this.slides.eq(this.previousIndex).find('h3').transition(1000).css('color','rgba(255,255,255,0)');//文字透明动画
                            
                            imgPrev.transitionEnd(function () {
                                imgActive.transition(1300).transform('translate3d(0, 0, 0) matrix(1.2, 0, 0, 1.2, 0, 0)');//图片位移视差
                                imgPrev.transition(1300).transform('translate3d('+60*derection+'%, 0, 0)  matrix(1.2, 0, 0, 1.2, 0, 0)');
                            });
                        },
                        transitionEnd: function(){
                            this.slides.eq(this.activeIndex).find('.img-box').transform('matrix(1, 0, 0, 1, 0, 0)');
                            imgActive = this.slides.eq(this.activeIndex).find('img')
                            imgActive.transition(1000).transform(' matrix(1, 0, 0, 1, 0, 0)');
                            this.slides.eq(this.activeIndex).find('h3').transition(1000).css('color','rgba(255,255,255,1)');
                            
                            imgActive.transitionEnd(function () {
                                _vm.lock = false
                            });
                            //第一个和最后一个，禁止按钮
                            if(this.activeIndex == 0){
                                this.$el.find('.button-prev').addClass('disabled');
                            }else{
                                this.$el.find('.button-prev').removeClass('disabled');
                            }
                            
                            if(this.activeIndex == this.slides.length - 1){
                                this.$el.find('.button-next').addClass('disabled');
                            }else{
                                this.$el.find('.button-next').removeClass('disabled');
                            }
                        },
                        init:function(){
                            this.emit('transitionEnd');//在初始化时触发一次transitionEnd事件
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
            prev() {
                if(!this.lock){
                    this.swiper.slidePrev();
                }
            },
            next() {
                if(!this.lock){
                    this.swiper.slideNext();
                }
            },
        }
    }
</script>

<style lang="scss">
    .scalebanner {
        position: relative;
        height: 380px;
        .swiper-container {
            width: 100%;
            height: 100%;
            background-color: rgb(179, 189, 196);
            transition: 1s background-color 1.3s;
        }
        .swiper-wrapper {
            transition-delay: 1s;
            transition-timing-function: cubic-bezier(0.5, 0, 0, 1);
        }
        .swiper-slide {
            text-align: center;
            font-size: 18px;
            /* Center slide text vertically */
            display: -webkit-box;
            display: -ms-flexbox;
            display: -webkit-flex;
            display: flex;
            -webkit-box-pack: center;
            -ms-flex-pack: center;
            -webkit-justify-content: center;
            justify-content: center;
            -webkit-box-align: center;
            -ms-flex-align: center;
            -webkit-align-items: center;
            align-items: center;
        }
        .title {
            transition-delay: 1s;
            z-index: 10;
        }
        .title h3 {
            font-weight: 700;
            font-size: calc(55px + 54 * ((53vw + 53vh) - 520px) / 820);
            letter-spacing: -1px;
            color: rgba(255,255,255,0);
            -webkit-text-stroke: 2px #fff;
        }
        .img-box {
            width: 100%;
            height: 100%;
            position: absolute;
            transform: scale(0.6, 0.6);
            transition-duration: 1s;
            transition-property: transform;
            transition-timing-function: cubic-bezier(0.5, 0, 0, 1);
            opacity: 0.9;
            overflow: hidden;
        }
        .img-box img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            transform: scale(1.2, 1.2) translateX(50%);
            transition-timing-function: cubic-bezier(0.5, 0, 0, 1);
            transition-property: transform;
        }
        .button-prev, .button-next {
            transition: 0.5s;
            outline: none;
            position: absolute;
            width: 140px;
            z-index: 10;
            top: 320px;
            transform: translateY(-34px);
            cursor: pointer;
        }
        .button-prev {
            left: 4vw;
        }
        .button-next {
            right: 4vw;
        }
        .button.disabled {
            opacity: 0.2;
            cursor: default;
        }
        #arrow-svg-home {
            transform: translateY(353px);
        }
        .button-next #arrow-svg-home {
            transform: translateY(353px) rotateY(180deg);
            transform-origin: 80px 0px 0px;
        }
        svg {
            transition: 0.5s;
        }
        .cls-1 {
            transition: 0.5s;
            opacity: 0.4;
            transform-origin: -20px 40px;
            opacity: 1;
        }
        .cls-4 {
            transition: 0.5s;
            stroke-width: 2px;
            stroke: #fff;
            fill: none;
            stroke-dasharray: 1;
            stroke-dashoffset: 1;
            opacity: 0.4;
            transform-origin: 0px 0px 0px;
        }
        #arrow-trg {
            transition: 0.5s;
            fill: #fff;
            transform: rotateY(180deg) translate(-53px, 39px);
        }
        #line {
            transition: 0.5s;
            stroke: #fff;
            transform: translate(50px, 42px);
        }
        .button-prev:not(.disabled):hover svg {
            transform: translateX(-25px);
        }
        .button-next:not(.disabled):hover svg {
            transform: translateX(25px);
        }
        .button:not(.disabled):hover .cls-1 {
            transform: scale(1.1);
        }
        .button:not(.disabled):hover .cls-4 {
            stroke-dasharray: 2px;
            stroke-dashoffset: 2px;
            opacity: 1;
        }
        .button:not(.disabled):hover #arrow-trg {
            transform: rotateY(180deg) translate(-37px, 39px);
        }
        .button:not(.disabled):hover #line {
            transform: translate(35px, 42px) scaleX(0.33);
        }
    }
</style>