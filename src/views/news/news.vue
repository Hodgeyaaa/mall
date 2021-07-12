<template>
  <div id="news">
      <h2>新品尝鲜</h2>
      <div class="cart-item">
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
     
   </div>
      </div>
      <myfooter/>
  </div>
</template>

<script>
import myfooter from '../../components/content/myfooter.vue';
import shotCart from '../../components/content/shotCart.vue';
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
              iid: 5,name: 'ZX 10000 低帮经典运动鞋',
              img1: require('@/assets/img/vueimg/ad/ad2_1.jpg'),
              img2: require('@/assets/img/vueimg/ad/ad2_2.jpg'),
              img3: require('@/assets/img/vueimg/ad/ad2_3.jpg'),
              img4: require('@/assets/img/vueimg/ad/ad2_4.jpg'),
              produce: '介绍',
              price: '999',
              type: '男子运动鞋'
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
              iid: 6,name: 'ZX 9000 低帮经典运动鞋',
              img1: require('@/assets/img/vueimg/ad/ad3_1.jpg'),
              img2: require('@/assets/img/vueimg/ad/ad3_2.jpg'),
              img3: require('@/assets/img/vueimg/ad/ad3_3.jpg'),
              img4: require('@/assets/img/vueimg/ad/ad3_4.jpg'),
              produce: '介绍',
              price: '999',
              type: '男子运动鞋'
              },
              {
              iid: 7,name: 'Chuck Taylor All Star 女款',
              img1: require('@/assets/img/vueimg/jordan/cv2_1.png'),
              img2: require('@/assets/img/vueimg/jordan/cv2_2.png'),
              img3: require('@/assets/img/vueimg/jordan/cv2_3.png'),
              img4: require('@/assets/img/vueimg/jordan/cv2_4.png'),
              produce: '介绍',
              price: '479',
              type: '女子帆布鞋'
              },
              {
              iid: 8,name: 'Chuck Taylor All Star CX 中性',
              img1: require('@/assets/img/vueimg/jordan/cv3_1.png'),
              img2: require('@/assets/img/vueimg/jordan/cv3_2.png'),
              img3: require('@/assets/img/vueimg/jordan/cv3_3.png'),
              img4: require('@/assets/img/vueimg/jordan/cv3_4.png'),
              produce: '介绍',
              price: '599',
              type: '女子帆布鞋'
              },
              {
              iid: 9,name: 'Air Jordan XXXV',
              img1: require('@/assets/img/vueimg/jordan/jd1_1.jpg'),
              img2: require('@/assets/img/vueimg/jordan/jd1_2.png'),
              img3: require('@/assets/img/vueimg/jordan/jd1_3.png'),
              img4: require('@/assets/img/vueimg/jordan/jd1_4.png'),
              produce: '介绍',
              price: '1499',
              type: '男子篮球鞋'
              },
              {
              iid: 10,name: 'Air Jordan 1 Centre Court',
              img1: require('@/assets/img/vueimg/jordan/jd3_1.jpg'),
              img2: require('@/assets/img/vueimg/jordan/jd3_2.png'),
              img3: require('@/assets/img/vueimg/jordan/jd3_3.png'),
              img4: require('@/assets/img/vueimg/jordan/jd3_4.png'),
              produce: '介绍',
              price: '899',
              type: '男女休闲鞋·'
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
    },
    components: {
      myfooter,
      shotCart,
    }

}
</script>

<style>
#news h2 {
  width: 100px;
  height: 50px;
  position: relative;
  top: 100px;
  left: 70px;
 
}

</style>