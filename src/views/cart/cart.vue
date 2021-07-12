<template>
  <div>
      <h2>购物车</h2>
      <div class="cart-centent">
        <div class="itemCart">
          <cart-item v-for="(item,index) in $store.state.cartList" :key="index">
            <template v-slot:pic1>
              <img :src="item.image" alt="">
            </template>
            <template v-slot:detail>
              <h3>{{item.name}}</h3>
              <p>{{item.type}}</p>
              <div class="san">
                <span>尺码：{{item.shotNum}}</span>  <span>数量:{{item.count}}</span>
              </div>
              <span class="c-price">￥{{item.price * item.count}}</span>
              <span class="c-delete" @click="removeShot(index)">删除</span>
            </template>
        </cart-item>
        </div>
         <div class="pay">
        
        <div>
            <sapn>小计</sapn>
            <sapn>￥{{fullPrice}}</sapn>
        </div>
        <div>
            <sapn>预计运费和手续费</sapn>
            <sapn>￥0</sapn>
        </div>
        <div class="b-line">
            <sapn>总计</sapn>
            <span>￥{{fullPrice}}</span>
        </div>
        <div class="balance" @click="toPay">
          <span>结算</span>
        </div>
        
    </div>
      </div>

      <myfooter/>
  </div>
</template>

<script>

import CartItem from '../../components/content/cartItem.vue'
import myfooter from '@/components/content/myfooter'

export default {
  components: {
    myfooter,
    CartItem,
   
  },
  // computed: {
  //       shotNum() {
  //         var Num = 0;
  //         for(let item of this.$store.state.cartList) {
  //           Num += item.count;
  //         }
  //         return Num;
           
  //       }
  // },
  
  computed: {
    fullPrice() {
      var cartList = this.$store.state.cartList;
      var price = 0;
      for(let item of cartList) {
         price += item.price * item.count;
      }
      return price;
    }

  },
  methods: {
     removeShot(index) {
          var num = this.$store.state.cartList[index].count;
          
          if(num > 1) {
            --this.$store.state.cartList[index].count;
          }
          else if(num <= 1) {
            this.$store.state.cartList.splice(index,1);
          }

    },
   toPay() {
     this.$router.push("/noFind");
   }
  }

}
</script>

<style>
h2 {
  margin-top: 50px;
}
.cart-centent {
  display: flex;
  justify-content: space-between;
  margin-bottom: 50px;
}
.pay {
      /* position: absolute;
      top: 40px;
      right: 0; */
      width: 40%;
      padding: 20px;
    }
    .pay div {
        padding: 20px;
        display: flex;
        justify-content: space-between;
    }
    
    .pay .b-line {
        font-size: 20px;
        font-weight: 600;
        border-bottom: 1px solid #7f8c8d;
        border-top: 1px solid #7f8c8d;
    }
    .pay .balance {
        width: 180px;
        height: 20px;
        margin: 20px auto;
        border-radius: 30px;
        background-color: black;
        color: #fff;
        text-align: center;
        cursor: pointer;
    }
    .pay .balance span {
        width: 100%;
    }

    


</style>