<template>
    <div class="back-top">
        <img src="@/assets/img/base/backTop.png" alt="回到顶部">
    </div>
</template>

<script>
export default {
    mounted(){
	    // 滚动监听：背景/图片动画
	   
    },
    methods:{
	    
    }
}
</script>

<style>
 .back-top {
     position: fixed;
     right: 10px;
     top: 400px;
    display: block;

 }
    .back-top img {
        width: 40px;
        height: 40px;
    cursor: pointer;
    }
</style>