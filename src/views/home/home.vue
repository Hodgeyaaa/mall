<template>
  <div id="home">
    
  <swiper-img/>
      

  <section class="service">

    <div class="box-container">

        <div class="home-box">
            <img src="../../assets/img/base/kd.png" alt="">
            <h3>根据地址安排快递</h3>
            <p>
              快递是系统分配的，系统会自动选择最优配送公司为你安排配送
              争取在最快时间将鞋子送到
            </p>
        </div>

        <div class="home-box">
           <img src="../../assets/img/base/th.png" alt="">
            <h3>10天无理由退货</h3>
            <p>10天内，鞋子有任何质量问题或者不喜欢可任意退货，退货运费由买家自行承担</p>
        </div>

        <div class="home-box">
           <img src="../../assets/img/base/kf.png" alt="">
            <h3>24 x 7 小时客服</h3>
            <p>如果您对鞋子有任何疑问，随时都可以询问客服，我们24小时都有专属客服为您服务</p>
        </div>

    </div>  
</section>
   <div class="cart">
      
      <!-- <img :src="item.img1" alt="">
      {{item.img1}} -->
      <shot-cart v-for="(item,index) in list" :key="index">
       <template v-slot:img>
         <img :src="item.img1" alt="">
       </template>
        <template v-slot:name>
          
            <h3>{{item.name}}</h3>
          
        </template>
         <template v-slot:type>
         
            {{item.type}}
          
        </template>
         <template v-slot:price>
         
           ￥{{item.price}}
          
        </template>
        <template v-slot:btns>
          <div class="btn" @click="itemClick(index)">
            了解详情
          </div>
        </template>
      </shot-cart>
      <back-top @click.native="backTop"/>
     <!-- <h2 @click="backTop">回到顶部</h2> -->
   </div>

<section>
  
</section>
  <myfooter/>
  </div>
  
</template>

<script>

import SwiperImg from '../../components/content/swiperImg.vue';
import myfooter from '../../components/content/myfooter.vue';
import shotCart from '../../components/content/shotCart.vue';
import backTop from '../../components/content/backTop.vue';
// import mySwiper from 'components/content/mySwiper';


export default {

  data() {
        return {
          list:[
            {
              iid: 1,name: 'Nike Air Force 1',
              
              img1: require('@/assets/img/vueimg/nike/nk1_1.jpg'),
              img2: '../../assets/img/vueimg/nike/nk1_2.png',
              img3: '../../assets/img/vueimg/nike/nk1_3.png',
              img4: '../../assets/img/vueimg/nike/nk1_4.png',
              produce: '介绍',
              price: '799',
              type: '男子运动鞋'
              },
           
            {
              iid: 2,name: 'Nike ZoomX Vaporfly',
              img1: require('@/assets/img/vueimg/nike/nk2_1.jpg'),
              img2: '../../assets/img/vueimg/nike/nk2_2.png',
              img3: '../../assets/img/vueimg/nike/nk2_3.png',
              img4: '../../assets/img/vueimg/nike/nk2_4.png',
              produce: '介绍',
              price: '1599',
              type: '男子跑步鞋'
              },
            {
              iid: 3,name: 'Nike Waflle One',
              img1: require('@/assets/img/vueimg/nike/nk3_1.jpg'),
              img2: '../../assets/img/vueimg/nike/nk3_2.png',
              img3: '../../assets/img/vueimg/nike/nk3_3.png',
              img4: '../../assets/img/vueimg/nike/nk3_4.png',
              produce: '介绍',
              price: '1299',
              type: '男子运动鞋'
              },
            {
              iid: 4,name: 'Air Jordan 1 Zoom Air',
              img1: require('@/assets/img/vueimg/nike/nk4_1.jpg'),
              img2: '../../assets/img/vueimg/nike/nk4_2.png',
              img3: '../../assets/img/vueimg/nike/nk4_3.png',
              img4: '../../assets/img/vueimg/nike/nk4_4.png',
              produce: '介绍',
              price: '999',
              type: '男子运动鞋'
              },
             
          ]
        }
  },
  created(){
    
    
    
  },
    methods: {
      itemClick(index) {
        this.$router.push('/detail/' + this.list[index].iid)
        
      },
      cartShadow1() {
        var cart = document.querySelector('.btn');
        console.log("jis");
        cart.style.boxShadow = '0 5px 15px rgba(0,0,0,.2)';
        
      },
      cartShadow2() {
        var cart = document.querySelector('.btn');
        cart.style.boxShadow = '0 5px 10px rgba(0,0,0,.2)';
      },
      backTop() {
        console.log("hu");
        scrollTo(0,0);
      }
    },

 components: {
  //  mySwiper,
  
  SwiperImg,
  myfooter,
  shotCart,
  backTop

 }
}

</script>

<style>
 
  
.cart {
  width: 100%;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  margin: 100px auto;
  
}
  .btn {
    width: 120px;
    height: 35px;
    background-color: #00a8ff;
    border-radius: 17px;
    text-align: center;
    line-height: 35px;
    position: relative;
    color: white;
    font-size: 14px;
    cursor: pointer;
    left: 50%;
  }
.service .box-container{
 
  width: 90%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  background:#f9f9f9;
  border:2px solid rgba(0,0,0,.1);
  border-radius: 5px;
  padding:15px;
  margin: auto;
  margin-top: 100px;
}

.service .box-container .home-box{
  text-align: center;
  width: 25%;
}

.service .box-container .home-box img{
  width: 60px;
  height: 60px;
}

.service .box-container .home-box h3{
  font-size: 22px;
  color:black;
  
}

.service .box-container .home-box p{
  font-size:18px;
  color:#666;
  padding:5px 0;
}

</style>