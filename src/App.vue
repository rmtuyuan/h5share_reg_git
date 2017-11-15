<template>
  <div id="app">
    <div class="reg-box">

      <div class="reg-phone-box">
        <input type="tel" onkeypress="return event.keyCode>=48&&event.keyCode<=57" :maxlength="11" v-model.number="phoneNumber" placeholder="请输入手机号">
      </div>

      <div class="pin-box">
        <input type="text" v-model="pinNumber" placeholder="请输入验证码">
        <button v-if="getPinCodeState" type="primary" @click="phoneRegFun" class="get-pin-code">获取验证码</button>
        <button v-if="!getPinCodeState" class="time-btn">{{timeOut}}s</button>
      </div>
      <div class="submit-reg-btn-box">
        <button @click="handleSubmitFun" class="submit-reg-button" :class="{'active':phoneNumberOk&&pinNumber}">立即注册</button>
      </div>

    </div>

  </div>
</template>

<script>
  export default {
    name: 'app',
    data() {
      return {
        phoneNumber: '', //手机号
        pinNumber: '', //验证码
        phoneNumberOk: false, //手机号状态
        getPinCodeState: true, //获取验证码状态
        timeOut: 60 //获取验证码间隔
      }
    },
    created(){
      //获取Url后的参数 
        let key = this.$utils.getUrlKey('id');
        let vid = this.$utils.getUrlKey('vid');
        
    },
    methods: {
      phoneRegFun() {
        //验证手机号 
        let reg = /^1[34578]\d{9}$/;
        if (this.phoneNumber) {
          if (reg.test(this.phoneNumber)) {
            //正确 
            this.phoneNumberOk = true;
            this.getPinCodeState = !this.getPinCodeState;
            this.timeOutFun();
            //手机号 获取验证码 

          } else {
            //不是正确的手机号
            this.phoneNumberOk = false;
            this.$message({
              message: '手机号不正确',
              type: 'error',
              duration: 1000
            });
          }

        } else {
          //为空
          this.phoneNumberOk = false;
          this.$message({
            message: '手机号为空',
            type: 'error',
            duration: 1000
          });
        }
      },
      timeOutFun() {
        //定时器
        let vw = this;

        let timer = setInterval(function () {
          vw.timeOut--;
          if (vw.timeOut <= 0) {
            clearInterval(timer);
            timer = null;
            vw.timeOut = 60;
            vw.getPinCodeState = !vw.getPinCodeState;
          }
        }, 1000);

      },
      handleSubmitFun() {
         
          if (this.phoneNumberOk&&this.pinNumber) {
                 this.$message({
            message: '注册成功',
            type: 'success',
            duration: 1000
          });
          }else{
             this.$message({
            message: '手机号或验证码格式不正确',
            type: 'error',
            duration: 1000
          });
          }

        //提交事件 
        //判断手机是否正确
        //验证码是否为空
        //提交 手机号 和 验证码
     
        
      }

    }
  }

</script>

<style>
  body {
    background: #f5f8fa;
    padding: 0;
    margin: 0;
  }

  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: .4rem;
    width: 100%;
    background: #fff;
    padding-bottom: .3rem;
  }
  .el-message{
    min-width: 85%;
  }
  .reg-box {
    width: 80%;
    margin: 0 auto;
  }

  input,
  button {
    height: .8rem;
    outline: 0;
    border: 1px solid #999;
    border-radius: .1rem;
    font-size: .32rem;
   
  }
input{
   -webkit-appearance: none;
}
  .reg-phone-box input{
    width: 100%;
    padding-left: .1rem;
    background: #fff;
  }

  .reg-phone-box input:focus ,.pin-box input:focus{
    border-color: #fe416e;
  }
  .pin-box{
    margin-top: .4rem;
  }
  .pin-box::after{
     content: ' ';
    display: table;
    height: 0;
    clear: both;
  }
  .pin-box input{
    padding-left: .1rem;
    float: left;
    width: 65%;
     background: #fff;
  }
  .pin-box button {
      float: right;
      font-size: .24rem;
      background: #fe416e;
      color: #fff;
      border: 0;
      width: 32%;
  }
  .pin-box button.time-btn{
        background: #ffbece;
  }
  .submit-reg-btn-box button{
      width: 100%;
      background: #ffbece;
      color: #fff;
        border: 0;
  }
   .submit-reg-btn-box button.active{
        background: #fe416e;
  
  }
</style>
