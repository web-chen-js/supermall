<template>
  <div>
    <nav-bar class="nav-bar">
      <div slot="left3"> </div>
      <div slot="center3"> 我的档案</div>
      <div slot="right3"> </div>
    </nav-bar>


    <div class="login-all">
      <img src="http://pic234.nipic.com/pic/20190815/22636788_104026758083_4.jpg" alt="">
      <div class="login">
        <a href="">登录</a>
        <a href="">注册</a>
      </div>
    </div>

    <div class="profile-message">
      <div class="profile-message-item">
        <div>0.0元</div>
        <div>我的余额</div>
      </div>
         <div class="profile-message-item">
        <div>0个</div>
        <div>我的积分</div>
      </div>
    </div>

  
  <div> <i slot="a" class="iconfont">&#xe656;</i>身份更新</div>
  <div> <i slot="a" class="iconfont">&#xe654;</i>我的消息</div>
  <div> <i slot="a" class="iconfont">&#xe605;</i>关于我们</div>
  

  </div>

</template>

<script>
  import NavBar from "components/common/navbar/NavBar";
  export default {
    name: 'Profile',
    components: {
      NavBar
    }
  }

</script>

<style scoped>
  .nav-bar {
    background-color: pink
  }

  .login-all {
    background-color: pink;
    width: 100%;
    height: 30%;
    display: flex;
  }


  img {
    height: 100px;
    width: 100px;
    border-radius: 50%;
    -webkit-border-radius: 50%;
    -moz-border-radius: 50%;
    margin-top: 15px
  }


  .login {
    background-color: pink;
    flex: 1
  }

  .profile-message{
    width: 100%;
    display:flex;
    border-bottom: 10px solid #eee;
  }

  .profile-message-item{
    flex:1
  }
 
</style>
