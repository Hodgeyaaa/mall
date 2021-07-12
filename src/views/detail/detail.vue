<template>
  <div id="detail">
    <div class="content">
        <div class="con-left">
            <div><img :src="list[iid - 1].img1" alt=""></div>
            <div><img :src="list[iid - 1].img2" alt=""></div>
            <div><img :src="list[iid - 1].img3" alt=""></div>
            <div><img :src="list[iid - 1].img4" alt=""></div>
        </div>
        <div class="con-right">
            <div class="r-top">
                <span>{{list[iid - 1].type}}</span>
                <span>￥{{list[iid - 1].price}}</span>
            </div>
            <h3>{{list[iid - 1].name}}</h3>
            <div class="num-top">
                <span>选择尺码</span><span>尺码表</span>
            </div>
            <div class="num">
                <div v-for="(item,index) in num" :key=index @click="selected(index)">
                    {{item}}
                </div>
            </div>
            <div class="exact">
                您选择的尺码为：<span>{{selectNum}}</span>
            </div>
            <div class="add" @click="toCart">
                <div>加入购物车</div>
            </div>
            <div class="production">
                <p>Nike Waffle One 男子运动鞋革新演绎 Waffle 系列经典鞋款，
                    巧妙糅合 Nike 跑步经典传承元素及新颖创意构想。革新耐用塑料后跟夹，
                    营造活力外观；半透明网眼布和柔软翻毛皮混搭设计，助你做好准备迎接光彩夏日
                    。革新弹性中底采用经典楔型设计，改良版华夫格外底提供非凡支撑力和强劲抓地力。</p>
            </div>
            <div>
                <ul>
                    <li v-for="(item,index) in $store.state.cartList" :key = index>
                        {{item}}
                    </li>
                </ul>
            </div>

        </div>
    </div>
    <div class="tesmo">
        <img src="@/assets/img/base/consumer.png" alt="">
    </div>
    <myfooter/>
  </div>
</template>

<script>

import Myfooter from '../../components/content/myfooter.vue';
export default {
    
     data() {
        return {
            idd: null,
          list:[
            {
              iid: 1,name: 'Nike Air Force 1',
              
              img1: require('@/assets/img/vueimg/nike/nk1_1.jpg'),
              img2: require('@/assets/img/vueimg/nike/nk1_2.png'),
              img3: require('@/assets/img/vueimg/nike/nk1_3.png'),
              img4: require('@/assets/img/vueimg/nike/nk1_4.png'),
              produce: '介绍',
              price: '799',
              type: '男子运动鞋'
              },
           
            {
              iid: 2,name: 'Nike ZoomX Vaporfly',
              img1: require('@/assets/img/vueimg/nike/nk2_1.jpg'),
              img2: require('@/assets/img/vueimg/nike/nk2_2.png'),
              img3: require('@/assets/img/vueimg/nike/nk2_3.png'),
              img4: require('@/assets/img/vueimg/nike/nk2_4.png'),
              produce: '介绍',
              price: '1599',
              type: '男子跑步鞋'
              },
            {
              iid: 3,name: 'Nike Waflle One',
              img1: require('@/assets/img/vueimg/nike/nk3_1.jpg'),
              img2: require('@/assets/img/vueimg/nike/nk3_2.png'),
              img3: require('@/assets/img/vueimg/nike/nk3_3.png'),
              img4: require('@/assets/img/vueimg/nike/nk3_4.png'),
              produce: '介绍',
              price: '1299',
              type: '男子运动鞋'
              },
            {
              iid: 4,name: 'Air Jordan 1 Zoom Air',
              img1: require('@/assets/img/vueimg/nike/nk4_1.jpg'),
              img2: require('@/assets/img/vueimg/nike/nk4_2.png'),
              img3: require('@/assets/img/vueimg/nike/nk4_3.png'),
              img4: require('@/assets/img/vueimg/nike/nk4_4.png'),
              produce: '介绍',
              price: '999',
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
             
          ],
          num: [
              '38.5','39','39.5','40','40.5','41','41.5','42','42.5','43',
              '43.5','44','44.5','45','45.5','46'
          ],
          selectNum: '请选择合适的尺码'
        }
  },
    created() {
        this.iid = this.$route.params.iid;
    },
    methods: {
        toCart() {
            const product = {}
            product.image = this.list[this.iid - 1].img1
            product.name = this.list[this.iid - 1].name
            product.price = this.list[this.iid - 1].price
            product.shotNum = this.selectNum
            product.type = this.list[this.iid -1].type
            product.iid = this.iid

            this.$store.commit('addCart',product)

            //  this.$router.push('/cart');
        },
       
        selected(index) {
            var num = document.querySelector('.num');
            var divs = num.children;
            var exact = document.querySelector('.exact');
            for(var i = 0;i < divs.length;i++) {
                divs[i].style.backgroundColor = 'white';
                 divs[i].style.color = 'black';
            }
            divs[index].style.backgroundColor = 'black';
            divs[index].style.color = 'white';
            this.selectNum = this.num[index];
        }
    },
    components: {
        
        Myfooter,
    }

}
</script>

<style>
 .content {
        width: 100%;
        display: flex;
        justify-content: space-between;
        margin-top: 50px;
    }
    .content .con-left {
        width: 53%;
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        padding: 30px;
    }
    .content .con-left div {
        width: 320px;
        height: 380px;
        margin-bottom: 20px;
    }
    .content .con-left div img {
        width: 100%;
        height: 100%;
    }
    .content .con-right {
        width: 400px;
        padding: 30px;
    }
    .content .con-right .r-top {
        display: flex;
        justify-content: space-between;
    }
    .content .con-right .num-top {
        display: flex;
        justify-content: space-between;
       
    }
    .content .con-right .num {
        width: 380px;
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        padding: 10px;
    }
    .content .con-right .num div {
       width: 70px;
       height: 50px;
       text-align: center;
       line-height: 50px;
       border-radius: 6px;
       margin-bottom: 5px;
       border: 1px solid black;
       cursor: pointer;
    }
    .content .con-right .add {
        width: 100%;
        height: 60px;
        margin: 20px auto;
        cursor: pointer;
        text-align: center;
        line-height: 60px;
        background-color: black;
        border-radius: 30px;
        color: #fff;

    }
    .content .con-right .production p {
        padding-top: 50px;
        line-height: 35px;
        letter-spacing: 2px;
    }
    .tesmo {
        width:65%;
        margin: 50px auto;
    }

</style>