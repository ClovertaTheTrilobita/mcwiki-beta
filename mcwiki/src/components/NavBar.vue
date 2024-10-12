<template>
  <nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container-fluid">
      <img src="../assets/Minecraft_logo.png" class="img_title">
      <a class="navbar-brand" id="WebHeader" href="#/home">Minecraft Wikipedia</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a class="nav-link" aria-current="page" href="#/home">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#/blogs">Blogs</a>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#/messages" role="button" data-bs-toggle="dropdown"
              aria-expanded="false">
              Messages
            </a>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="#/sysmessage">System Message</a></li>
              <li><a class="dropdown-item" href="#/accmessage">Account Message</a></li>
              <li>
                <hr class="dropdown-divider">
              </li>
              <li><a class="dropdown-item" href="#/contact">Contact Us</a></li>
            </ul>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#/account" role="button" data-bs-toggle="dropdown"
              aria-expanded="false">
              Account
            </a>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="#/space">Space</a></li>
              <li><a class="dropdown-item" href="#/switch">Switch Account</a></li>
              <li>
                <hr class="dropdown-divider">
              </li>
              <li><a class="dropdown-item" href="#/logout" style="color:brown">Log Out</a></li>
            </ul>
          </li>
        </ul>
        <form class="d-flex" role="search" >
          <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" clearable id="myInput">
          <button class="btn btn-outline-success" type="submit" @click="SearchPushed">Search</button>
        </form>
      </div>
    </div>
  </nav>
</template>

<script>


export default {
  name: "NavBar",
  methods: {
    SearchPushed() {
      window.location.href = "#/search"
    }
  }
}

</script>

<style>
#WebHeader {
  /* display: inline;
    color: rgb(89, 85, 85);
    font-style: italic; */
  margin-left: 10px;
}

.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 70px;
  background-color: white;
  color: #ffffff;
  border: 1px solid #2c2c2c;
}

.box {
  display: flex;
  align-items: center;
}

h1 {
  display: flex;
  align-items: center;
  font: normal 30px Cookie;
  padding: 0px 20px;
  color: #2c2c2c;
  font-family: "Microsoft YaHei";
}

.img_title {
  width: 40px;
  height: 40px;
  margin-left: 12px;
}

.nav_link {
  display: flex;
  align-items: center;
  padding: 0 30px;
}

.link_btn {
  text-decoration: none;
  color: #7F7F7F;
  font-size: 25px;
  font-weight: normal;
}

.img_btn {
  width: 30px;
  height: 30px;
}
</style>
