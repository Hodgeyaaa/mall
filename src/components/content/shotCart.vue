<template>
  <div id="shotCart">
      <div class="product">
        <div class="logo">
            <img src="../../assets/img/base/logo.png" alt="">
            <img src="../../assets/img/base/cart.png" alt="">
        </div>
        <div class="shot-img">
            <slot name="img"></slot>
            <!-- <img src="../../assets/img/home/nike_top.jpg" alt=""> -->
        </div>
        <div class="detail">
            <slot name="name"></slot>
            <p>类型:<slot name="type"></slot></p>
            <p>价格:<slot name="price"></slot></p>
            <div class="star">
                <img src="../../assets/img/base/score.png" alt="">
                <img src="../../assets/img/base/score.png" alt="">
                <img src="../../assets/img/base/score.png" alt="">
                <img src="../../assets/img/base/score.png" alt="">
            </div>
            <slot name="btns"></slot>
             
        </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
body {
        padding: 0;
        margin: 0;
        
    }
    
.product {
        position: relative;
        width: 250px;
        z-index: 0;
        /* width: 100%; */
        background-color: #f6f6f6;
        margin: 20px auto;
        padding: 20px;
        border-radius: 25px;
        box-shadow: 0 5px 10px rgba(0, 0, 0, .2);
        overflow: hidden;
    }
    .product .logo {
        width: 100%;
        display: flex;
        justify-content: space-between;
    }
    .product .logo img {
        width: 25px;
        height: 25px;
    }
    .product .shot-img {
        width: 100%;
        height: 180px;
        position: relative;
        
    }
    .product .shot-img img {
        width: 80%;
        /* object-fit: cover; */
        position: absolute;
        top: -20%;
        left: 6%;
        transform: rotate(-18deg);
        z-index: -2;
        
    }
    .product .detail {
        position: relative;
    }
    .product .detail p {
        font-size: 14px;
    }
    .product .detail .star{
        display: flex;
    }
    .product .detail .star img {
        width: 16px;
        height: 16px;
        margin-right: 6px;
    }
    /* .product .detail .btn {
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
    } */
   

</style>