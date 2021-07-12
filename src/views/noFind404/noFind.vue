<template>
<div id="noFind">
    <div class="wrap404">
        <div class="content404">
       <div class="text404">
        <div class="top">
            <h2>404</h2>
        </div>
        <div class="joker">
            {{joke}}
        </div>
        <div class="btn404">
            <div @click="backHome">返回首页</div>
            <div @click="getJoke">轻松一下</div>
        </div>
        <div class="toback">
            <a href="javascript:history.back(-1)">或者 返回上一页 ></a>
        </div>
       </div>
       <div class="img404">
           <img src="@/assets/img/base/404.jpg" alt="">
       </div>


    </div>
    </div>
</div>
  
</template>

<script>
import { getCompanyDetail } from '@/api/index.js';
export default {
    data() {
        return {
             joke:"点击轻松一下获取笑话",
        } 
        
    },
    mounted() {
        this.getJoke();
    },
    methods: {
        backHome() {
            this.$router.push('/home');
        },
        getJoke() {
            var that = this;
            getCompanyDetail().then(res=> {
                that.joke = res.data;
            })
            .catch(error=>{
                console.log(error)
            });
        }
    }

}
</script>

<style>

#noFind {
    width: 100wh;
    height: 100vh;
    background-color: white;
    position: relative;
    top: 0;
    z-index: 10;
}
 .content404 {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    width: 800px;
    display: flex;
    justify-content: space-around;
    padding: 50px;
}
.content404 .text404 {
    width: 400px;
    height: 300px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
}
.content404 .text404 .top h2 {
    margin: 0;
    letter-spacing: 10px;
    font-size: 50px;
    font-weight: 800;
}
.content404 .text404 .btn404 {
    width: 300px;
    display: flex;
    justify-content: space-between;
}
.content404 .text404 .btn404 div {
    width: 80px;
    height: 30px;
    background-color: #3498db;
    line-height: 30px;
    text-align: center;
    font-size: 14px;
    border-radius: 8px;
    color: white;
    cursor: pointer;
}
.content404 .img404 {
    width: 300px;
    height: 300px;
}
.content404 .img404 img {
    width: 100%;
    height: 100%;
}

</style>