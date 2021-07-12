<template>
<div id="login">
     <div class="box">
        
        <div class="register">
           
            <div class="login_l">
                <h3><a>登录</a>/
                <a style="color: #576574;" @click="up" class="up">注册</a></h3>
              <div><input type="text" placeholder="请你输入用户名" class="user"></div>
              <div><input type="text" placeholder="请输入密码" class="pass"></div>
              <div><button>登录</button><button @click="up">注册</button></div>
              <div class="text">
                  <a href="javascript:;">《用户协议》</a>
                  <span>和</span>
                  <a  href="javascript:;">《用户隐私》</a>
                  <a href="javascript:;">忘记密码</a>
              </div>
              </div>
            <div class="login_r">
                    <div class="h3"><a>注册</a>/<a @click="down">登录</a></div>
                    <div><input type="text" placeholder="请你输入用户名" class="user"></div>
                    <div><input type="text" placeholder="请输入密码" class="pass"></div>
                    <div><input type="text" placeholder="请确认密码" class="pass"></div>
                    <div><button>注册</button><button @click="down">登录</button></div>
                    <div class="text">
                        <a href="javascript:;">《用户协议》</a>
                        <span>和</span>
                        <a  href="javascript:;">《用户隐私》</a>
                        <a href="javascript:;">忘记密码</a>
                    </div>
            </div>
        </div>
       
    </div>
</div>
  
</template>

<script>
export default {
    
  methods: {
      up() {
          
          var reg = document.querySelector(".register");
            reg.style.transform = "translate("+0+"px,"+-301+"px)";
        
      },
      down() {
           var reg = document.querySelector(".register");
           reg.style.transform = "translate("+0+"px," + 0 + "px)";
      }
  }
    

}
</script>

<style>
    #login {
        width: 100wh;
        height: 100vh;
    background: url('../../assets/img/vueimg/top/jd_top.jpg') no-repeat;
    background-size: cover;
}
.box {
    width: 280px;
    height: 290px;
    padding: 20px;
    position:absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    background-color: #fff;
    box-shadow: 5px 5px 25px rgba(0,0,0,0.4);
    /* backdrop-filter: blur(3px); */
    overflow: hidden;
}
.box .register h3 {
    cursor: pointer;
    width: 100%;
    display: flex;
    justify-content: center;
    margin-bottom: 20px;
    font-size: 22px;
}
.box .register {
    width: 100%;
    transition: all 0.2s ease-out;
    /* transform: translate(0px,-301px); */
}
.box .login_l {
    width: 100%;
    font-size: 14px;
    margin-bottom: 60px;
}
.box input {
    width: 200px;
    height: 30px;
    margin: 10px 0 10px 30px;
    border: 1px solid #636e72;
}
.box button {
    margin:10px 30px 20px 30px;
    width: 70px;
    height: 33px;
   border: none;
    cursor: pointer ;
    border-radius: 5px;
    color: seashell;
}
.box button:hover {
    box-shadow: 2px 2px 10px rgba(0,0,0,0.3);
}
.login_l button:first-child {
    background-color: #00a8ff;

}
.login_l button:last-child {
    background-color: #ee5253;
}
.text {
    display: flex;
    justify-content: end;
}
.text a {
    color: #636e72;
}
.text a:hover {
    color: #0984e3;
}
.text a:last-child {
    margin-left: 20px;
}
.box .login_r {
    width: 100%;
    font-size: 14px;
}
.box .login_r .h3 {
    cursor: pointer;
    width: 100%;
    display: flex;
    justify-content: center;
    text-align: center;
    margin-bottom: 20px;
    font-size: 22px;
  font-weight: bold;
}

.box .login_r .h3 a:last-child {
    color: #636e72;
}
.login_r button:first-child {
    background-color: #00a8ff;

}
.login_r button:last-child {
    background-color: #ee5253;
}
</style>