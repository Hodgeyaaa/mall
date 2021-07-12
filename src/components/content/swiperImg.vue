<template>
    <div>
        <swiper class="re" :options="swiperOption" ref="mySwiper" @someSwiperEvent="callback">
        <swiper-slide class="img1"></swiper-slide>
        <swiper-slide class="img2"></swiper-slide>
        <swiper-slide class="img3"></swiper-slide>
        <swiper-slide class="img4"></swiper-slide>
        
        <div class="swiper-pagination" slot="pagination"></div>
        <div class="swiper-button-prev" slot="button-prev"></div>
        <div class="swiper-button-next" slot="button-next"></div>
    </swiper>
    </div>
  
</template>

<script>
import 'swiper/dist/css/swiper.css'
import {swiper,swiperSlide} from 'vue-awesome-swiper'
export default {
    data() {
        return {
            swiperOption: {
                loop: true,
                pagination: {
                    el: ".swiper-pagination",
                    type: "bullets",
                    clickable: true,
                    dynamicBullets: false
                },
                speed:2000,
                autoplay: {
                    delay: 3000,
                    disableOnInteraction: false
                },
                effect: 'slide',
                navigation: {
                    nextE1: '.swiper-button-next',
                    prevE1: '.swiper-button-prev',
                }
            }
        }
    },
    computed: {
        swiper() {
            return this.$refs.mySwiper
        }
    },
    mounted() {
        // this.swiper.slideTo(3,1000,false)
    },
    components: {
        swiper,
        swiperSlide
    }
}
</script>

<style>
.re {
    width: 100wh;
    height: 100vh;
    
}
.img1 {
    background: url('../../assets/img/vueimg/top/jd_top.jpg');
    background-size: cover;
    
}
.img2 {
     background: url('../../assets/img/vueimg/top/ad_top.jpg');
    background-size: cover;

}
.img3 {
     background: url('../../assets/img/vueimg/top/at_top.jpg');
    background-size: cover;

}
.img4 {
     background: url('../../assets/img/vueimg/top/Nike_top.jpg');
    background-size: cover;

}
</style>