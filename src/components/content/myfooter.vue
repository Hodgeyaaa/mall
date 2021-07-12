<template>
  <div id="footer">
      <div class="footer">
        <div class="top">
            <div class="content">
                <ul class="b_font">
                    <li>电子礼品卡</li>
                    <li>企业团购</li>
                    <li>附近商店</li>
                    <li>订阅电子邮件</li>
                    <li>注册U鞋会员</li>
                    <li>向我们发送反馈</li>
                </ul>
                <ul class="s_font">
                    <li class="b_font">获得帮助</li>
                    <li>订单状态</li>
                    <li>配送方式</li>
                    <li>退换货</li>
                    <li>付款选项</li>
                    <li>联系我们</li>
                </ul>
                <ul class="s_font">
                    <li class="b_font">关于U鞋</li>
                    <li>新闻</li>
                    <li>投资者</li>
                    <li>招贤纳士</li>
                    <li>新品预览</li>
                </ul>
            </div>
            <div class="third">
                <div class="third_img">
                    <img @mouseover="o_img" @mouseleave="l_img" src="../../assets/img/base/weixin.png" alt="">
                    <img src="../../assets/img/base/weibo.png" alt="">
                </div>
               <div class="ewm">
                <img src="../../assets/img/base/ewm.jpg" alt="">
               </div>
            </div>
        </div>
        <div class="down">
            <div class="left">
                <h3>19软件4班 何世波 1930413 </h3>
                <p>© 2021 U鞋, Inc. 保留所有权利</p>
            </div>
            <div class="right">
                <a href="javascript:;">分类浏览</a>
                <a href="javascript:;">使用条款</a>
                <a href="javascript:;">销售条款</a>
                <a href="javascript:;">隐私政策</a>
                <p class="plice">
                    <img src="../../assets/img/base/plice.png" alt="">
                    <a href="javascript:;">粤公网安备888888888号</a>
                </p>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
    methods: {
        o_img() {
            var ewm = document.querySelector('.ewm');
            ewm.style.display = 'block';
        },
        l_img() {
             var ewm = document.querySelector('.ewm');
            ewm.style.display = 'none';
        }
    }
}
</script>

<style>
    
    
    .footer {
    width: 100wh;
    height: 310px;
    background-color:#151718;
    padding: 20px;
}
.footer .top {
    box-sizing: border-box;
    width: 100%;
    height: 80%;
    padding: 20px;
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid #7f8c8d;
}
.footer .top .content {
    width: 50%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    position: relative;
    bottom: 40px;
    
}
.footer .top .content ul {
    height: 100%;
    margin: 0;
    padding: 0;
}
.footer .top .content ul li {
    margin: 12px auto;
    cursor: pointer;
}
.footer .top .content ul li:hover {
    color: white;

}
.footer .top .third {
   position: relative;
    width: 20%;
    height: 100%;
    
}
.footer .top .third .third_img {
    width: 100px;
    height: 30px;
    position: absolute;
    right: 30px;
    display: flex;
    justify-content: space-around;
   
}

.footer .top .third .ewm {
    display: none;
}
.footer .top .third .ewm img {
    width: 115px;
    height: 115px;
    position: absolute;
    right: 30px;
    top: 37px;
  
}
.footer .top .third .third_img img {
    
    width: 25px;
    height: 25x;
    border-radius: 50%;
    padding: 3px;
    background-color: #7f8c8d;
}
.footer .top .third .third_img img:hover {
    background-color: #fff;
}
.b_font{
    /* color: #fff; */
    font-size: 14px;
    color: #fff;
    

}
.s_font {
    color: #7f8c8d;
    font-size: 12px;
}
.down {
    width: 100%;
    height: 70px;
    font-size: 12px;
    color: #7f8c8d;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
}

.down .right {
    
    display: flex;
    justify-content: center;
    align-items: center;
}
.down .right a{
    margin-right: 10px;
    color: #7f8c8d;
}
.down .right a:hover {
    color: #fff;
}
.down .right .plice {
    display: flex;
}

</style>