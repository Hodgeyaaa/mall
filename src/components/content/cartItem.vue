<template>
   <div class="cartItem">
        <div class="image">
            <slot name="pic1"></slot>
        </div>
        <div class="shotDetail">
           <slot name="detail"></slot>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style>
    .cartItem {
        display: flex;
        justify-content: flex-start;
        position: relative;
        width: 52%;
        min-width: 550px;
        padding: 20px;
        border-bottom: 1px solid #7f8c8d;
    }
    .cartItem .image {
        width: 120px;
        height: 120px;
        margin-right: 20px;
    }
    .cartItem .image img {
        width: 100%;
        height: 100%;
    }
    .cartItem .shotDetail {
       color: #7f8c8d;
       font-size: 16px;
       display: flex;
       flex-direction: column;
       justify-content: space-around;
    }
    .cartItem .shotDetail h3 {
        color: black;
        font-size: 20px;
        font-weight: 400;
        padding: 0;
        margin: 0;

    }
    .cartItem .shotDetail p {
        margin: 0;
    }
    .cartItem .shotDetail .c-price {
        position: absolute;
        top: 20px;
        right: 20px;
    }
    .cartItem .shotDetail .c-delete {
        position: absolute;
        bottom: 20px;
        right: 20px;
        cursor: pointer;
    }

</style>