<template>
  <div id="nav">
      <header>
          <div class="me" @click="toggle_img" >
           <div v-if="showimg">
                <img src="../../assets/img/nav/menu_img1.png" alt="">
           </div>
           <img v-else src="../../assets/img/nav/menu_img2.png" alt="">
        </div>
          <div class="logo">
          <a href="javascript:;">U鞋</a>
        </div>
        
     <div class="nav">
         <ul>
                <li><router-link to="/home">首页</router-link></li>
                <li><router-link to="/news">新品尝鲜</router-link></li>
                <li><router-link to="/selected">精选折扣</router-link></li>
                <li><router-link to="/summer">夏日专属</router-link></li>
                <li> <router-link to="/noFind">联系我们</router-link></li>
    
         </ul>

     </div>
     <div class="icon">
          <div class="search" @mouseover="sbt" @mouseleave="lbt">
              <input type="text" :class="{active:isShow}">
              <img src="../../assets/img/base/search.png" @click="test" alt="">
            </div>
                 <cart v-if="hideCart" ref="cart"/>
              <router-link to="/cart" tag="div" class="icon_img">
              <img src="../../assets/img/base/cart.png" alt="">
              <div v-show="shotNum > 0">{{shotNum}}</div>
              </router-link>
          
         <img src="../../assets/img/base/login.png" alt="" @click="toLogin">
        
     </div>
    
      </header>
      
      
    
      
  </div>
</template>

<script>
import Cart from '../../../../tabbar/src/views/cart/cart.vue'
import router from '../../router'

export default {
   data() {
       return {
           showimg: true,
           isShow: true,
           hideCart: false,
           shotNums: 77
       }
       
   },
   computed: {
        shotNum() {
          var Num = 0;
          for(let item of this.$store.state.cartList) {
            Num += item.count;
          }
          return Num;
           
        }
  },
   mounted() {
    //    shotNum = this.$refs.cart.test();
       console.log(this.shotNum);
   },
methods: {
    toggle_img() {
        // console.log(this.showimg);
        this.showimg = !this.showimg;
        var nav = document.querySelector('.nav');
        nav.style.transition = 'all .8s';
       if(this.showimg) {
            nav.style.left = '-100%';
       }
       else{
           nav.style.left = '0';
       }
        
    },
    sbt() {
        var inp = document.querySelector('.search input');
        inp.style.borderBottom = '1px solid #636e72';
        // this.isShow = !this.isShow;
        // console.log(this.isShow);
    },
    lbt() {
      var inp = document.querySelector('.search input');
        inp.style.border = 'none';
    },
    toLogin() {
        this.$router.push('/login');
    },
    test() {
        // var tt = this.$refs.cart.test();
        // console.log(tt);
    }
},
components: {
    router,
    Cart,

},


}


</script>

<style>

header {
    height: 35px;
    background-color: white;
    position: fixed;
    left: 0;
    top: 0;
    right: 0;
    z-index: 2;
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-shadow: 0 .5rem .8rem rgba(0,0,0,.2);
}
header .logo a {
    padding-left: 50px;
    font-size: 18px;
    color: black;
}
header .me{
    display: none;   
}
header .me img {
    width: 35px;
    height: 100%;
}

 
.nav ul {
    
    margin: 0;
    height: 100%;
    display: flex;
    align-items: center;
    
}
.nav ul li{
    margin: 0 25px;
}
.nav ul li a:hover {
    color: black;
}
.icon {
    display: flex;
    align-items: center;
    height: 35px;
    line-height: 35px;
    
}
.icon .icon_img {
    height: 100%;
    margin: 0 15px;
    display: flex;
    align-items: center;
}
.icon img {
    
    width: 25px;
    height: 25px;
}
.icon .search {
    height: 100%;
    display: flex;
    align-items: center;
}
.icon .search input {
    width: 150px;
    height: 25px;
    background-color: transparent;
    border: none;
    /* border-bottom: 1px solid red; */
    
}


</style>