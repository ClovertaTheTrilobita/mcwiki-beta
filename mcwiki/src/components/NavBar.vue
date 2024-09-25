<template>
  <div>
      <div class="header">
          <div class="box">
              <h1>
                  <img src="../assets/logo.svg" class="img_title">
                  <span>Sun</span>
              </h1>
          </div>
          <div class="box">
              <nav class="nav_link">
                  <!-- <img src="../assets/home.png" class="img_btn"> -->
                  <router-link class="link_btn" active-class="active" to="/home">首页</router-link>
              </nav>
              <nav class="nav_link">
                  <!-- <img src="../assets/data.png" class="img_btn"> -->
                  <router-link class="link_btn" active-class="active" to="/data">个人介绍</router-link>
              </nav>
              <nav class="nav_link">
                  <!-- <img src="../assets/work.png" class="img_btn"> -->
                  <router-link class="link_btn" active-class="active" to="/work">作品介绍</router-link>
              </nav>
              <nav class="nav_link">
                  <!-- <img src="../assets/power.png" class="img_btn"> -->
                  <router-link class="link_btn" active-class="active" to="/power">能力介绍</router-link>
              </nav>
          </div>
      </div>
  </div>
</template>

<script>
  export default {
      name: "NavBar"
  }
</script>

<style>
  .header{
      display: flex;
      align-items: center;
      justify-content: space-between;
      height: 70px;
      background-color:#ffffff;
      color: #ffffff;
      border: 1px solid #2c2c2c;
  }
  .box{
      display: flex;
      align-items: center;
  }
  h1{
      display: flex;
      align-items: center;
      font: normal 30px Cookie;
      padding: 0px 20px;
      color:#2c2c2c;
      font-family:"Microsoft YaHei";
  }
  .img_title{
      width: 40px;
      height: 40px;
  }

  .nav_link{
      display: flex;
      align-items: center;
      padding: 0 30px;
  }
  .link_btn{
      text-decoration:none;
      color: #7F7F7F;
      font-size: 25px;
      font-weight: normal;
  }
  .img_btn{
      width: 30px;
      height: 30px;
  }
</style>
