<template>
        <!-- 缓慢移动的图片切换 -->
    <div class="slowTransitionSwiper">
        <swiper :options="swiperOption">
            <swiper-slide v-for="(item, index) in imgUrl" :key="index">
                <img :src="item.imgUrl" alt="">
            </swiper-slide>
            <div class="swiper-pagination" slot="pagination"></div>
            <div class="swiper-button-prev swiper-button-black" slot="button-prev"></div>
            <div class="swiper-button-next swiper-button-black" slot="button-next"></div>
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
        data () {
            return {
                swiperOption:{
                    autoplay: {
                        delay: 5000,  
                        disableOnInteraction: false,
                    },
                    speed: 700,
                    allowTouchMove: false,
                    lazy: {
                        loadPrevNext: true,
                        loadPrevNextAmount: 3,
                    },
                    centeredSlides: true,
                    spaceBetween : 10,
                    slidesOffsetBefore: 40,
                    loop: true,
                    slidesPerView : 'auto',
                    on: {
                        slideChangeTransitionEnd: function(){
                            this.slides.transition(this.params.autoplay.delay+this.params.speed).transform('translate3d(-60px, 0, 0)');
                        },
                        slideChangeTransitionStart: function(){
                            this.slides.transition(this.params.speed).transform('translate3d(0, 0, 0)');
                        },
                    },
                    pagination: {
                        el: '.swiper-pagination',
                        clickable :true,
                        renderBullet: function (index, className) {
                            return '<div class="' + className + '"><span></span><i></i></div>';
                        },
                    },
                    navigation: {
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev',
                        hideOnClick: false,
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
    .slowTransitionSwiper {
        .swiper-button-next:after, .swiper-container-rtl .swiper-button-prev:after {
            content: '';
        }
        .swiper-button-prev:after, .swiper-container-rtl .swiper-button-next:after {
            content: '';
        }
        .swiper-container {
            padding-bottom:40px;
        }
        .swiper-wrapper {
        }
        .swiper-slide {
            width:978px;
            transition-timing-function:linear;
            img {
                height: 380px;
            }
        }
        .swiper-slide img {
            width:100%;
            border-radius: 4px;
        }
        .swiper-slide .title {
            position:absolute;
            transform:rotate(90deg);
            transform-origin:left top;
            left:-3px;
            font-size:11px;
            color: rgb(102, 102, 102);
        }	
        .swiper-button-next, .swiper-button-prev {
            width:86px;
            height:112px;
            background-size:86px 112px;
            margin-top:-88px;
            outline:none;
        }
        .swiper-button-next {
            background-image:url(../../assets/images/cursor-next.png);
        }
        .swiper-button-prev{
            background-image:url(../../assets/images/cursor-prev.png);
        }		
        .swiper-pagination-bullet {
            background:none;
            opacity:1;
            margin:0 6px !important;
            width:9px;
            height:9px;
            position:relative;
            outline:none;
            vertical-align:middle;
        }
        .swiper-pagination-bullet span {
            width:3px;
            height:3px;
            background:#CCC;
            display:block;
            border-radius:50%;
            margin-top:3px;
            margin-left:3px;
        }
        .swiper-pagination-bullet i {
            background: var(--orangeDark);
            height:1px;
            width:20px;
            position:absolute;
            top:4px;
            transform:scaleX(0);
            transform-origin:left;
            z-index:3;
            transition-timing-function:linear;
        }
        .swiper-pagination-bullet-active span,.swiper-pagination-bullet:hover span {
            width:9px;
            height:9px;
            margin-top:0;
            margin-left:0;
            background:var(--orangeDark);
            position:relative;
            z-index:1;
        }
        .swiper-pagination-bullet-active i {
            animation:middle1 6s;
        }
        .swiper-pagination-bullet:first-child.swiper-pagination-bullet-active i {
            animation:first1 6s;
        }
        .swiper-pagination-bullet:last-child.swiper-pagination-bullet-active i {
            animation:last1 6s;
        }			
        @keyframes first1 {
            0% {transform:scaleX(0.5);left:0px;}/*091*/
            100% {transform:scaleX(1);left:2px;} /*0915*/
        }
        @keyframes last1 {
            0% {transform:scaleX(0.7);left:-10px;}/*1090*/
            20% {transform:scaleX(0.3);left:2px;} /*090*/
            100% {transform:scaleX(0.3);left:0px;} /*090*/
        }		
        @keyframes middle1 {
            0% {transform:scaleX(0.7);left:-10px;}/*1091*/
            20% {transform:scaleX(0.45);left:2px;}/*092*/
            100% {transform:scaleX(1);left:2px;} /*0913*/
        }	
    }
    
</style>