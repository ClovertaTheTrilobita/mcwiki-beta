<template>
  <div class="container-fluid fixed-top bg-body-tertiary" style="background-color: #ffffff;">
    <div class="container">
      <nav class="navbar navbar-expand-lg navbar-light">
        <div class="container-fluid">

          <a class="navbar-brand" href="#/home">
            <img src="./home_components/images/Minecraft_logo.png" class="mb-1 img_title">
            Mincraft Wikipedia
          </a>

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
    </div>
  </div>
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

.img_title {
  width: 30px;
  height: 24px;
  margin-left: 12px;
}

</style>
