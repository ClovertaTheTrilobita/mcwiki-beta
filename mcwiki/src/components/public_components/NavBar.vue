<template>
  <div class="container-fluid sticky-top" style="background-color: #2d7054;">
    <!-- wdf? Why is that? sticky->fixed->sticky??? No way... It just fking works -->
    <div class="container">
      <nav class="navbar navbar-expand-lg navbar-dark">
        <div class="container-fluid">

          <a class="navbar-brand" href="#/home">
            <img src="../images/Minecraft_logo.png" class="mb-1 img_title" alt="logo">
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
                <a class="nav-link" href="#/category" @click="categroyClicked">Category</a>
              </li>

              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#/messages" role="button" data-bs-toggle="dropdown"
                  aria-expanded="false">
                  Messages
                </a>
                <ul class="dropdown-menu">
                  <li><a class="dropdown-item" href="#/sysmessage">System Message</a></li>
                  <li><a class="dropdown-item" href="#/test">Account Message</a></li>
                  <!-- TestIndex -->
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

            <div class="avater-container">
              <img src="../home_components/images/95122414.jpg" alt="Avater" class="avater">
              <div class="menu">
                <div class="container text-center mt-4 mb-3">
                  <p>{{ username }}</p>
                </div>
                <div class="Bottom">
                  <nav class="nav flex-column">
                    <a class="nav-link btn btn-light avater-link" href="#" style="--bs-nav-link-color: #000000a8; --bs-nav-link-hover-color: #000000a8">个人中心</a>
                    <a class="nav-link btn btn-light avater-link" href="#" style="--bs-nav-link-color: #000000a8; --bs-nav-link-hover-color: #000000a8">收藏</a>
                    <hr>
                    <a class="nav-link btn btn-light avater-link" href="#" style="--bs-nav-link-color: #000000a8; --bs-nav-link-hover-color: #000000a8">退出登录</a>
                  </nav>
                </div>
              </div>
            </div>

            <form class="d-flex" role="search" >
              <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" clearable id="myInput">
              <button class="btn btn-outline-light" type="submit" @click="SearchPushed">Search</button>
            </form>

          </div>
        </div>
      </nav>
    </div>
  </div>
</template>

<script>
import Category from '../category_components/Category.vue';


export default {
  name: "NavBar",
  methods: {
    SearchPushed() {
      window.location.href = '#/search'
    },
    categroyClicked(){
      Category.methods.categoryClicked()
    }
  },
  data() {
    return {
      username: 'Welcome'
    };
  }
}

</script>

<style scoped>

.img_title {
  width: 30px;
  height: 24px;
}

.avater {
  position: absolute;
  top: 8px;
  right: 298px;
  max-width: 40px;
  max-height: 40px;
  border-radius: 50%;
  margin-right: 10px;
  object-fit: cover;
  border: 2px solid #fafafa;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  cursor: pointer;
  z-index: 2;
}

.menu {
  position: absolute;
  top: 50px;
  right: 224px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  height: 245px;
  width: 230px;
  background-color: #fff;
  border: 1px solid #ccc;
  padding: 10px;
  border-radius: 5px;
  opacity: 0;
  transition: opacity 0.3s ease;
  cursor: pointer;
  z-index: 1;
}

.avater-container:hover .avater {
  transform: translateY(10px) translateX(-11px) scale(1.5);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
}

.avater-container:hover .menu {
  transform: translate(0);
  opacity: 1;
}

.avater-link {
  text-align: left;
}

</style>

<!--

example: style="--bs-navbar-padding-x: "

--#{$prefix}navbar-padding-x: #{if($navbar-padding-x == null, 0, $navbar-padding-x)};
--#{$prefix}navbar-padding-y: #{$navbar-padding-y};
--#{$prefix}navbar-color: #{$navbar-light-color};
--#{$prefix}navbar-hover-color: #{$navbar-light-hover-color};
--#{$prefix}navbar-disabled-color: #{$navbar-light-disabled-color};
--#{$prefix}navbar-active-color: #{$navbar-light-active-color};
--#{$prefix}navbar-brand-padding-y: #{$navbar-brand-padding-y};
--#{$prefix}navbar-brand-margin-end: #{$navbar-brand-margin-end};
--#{$prefix}navbar-brand-font-size: #{$navbar-brand-font-size};
--#{$prefix}navbar-brand-color: #{$navbar-light-brand-color};
--#{$prefix}navbar-brand-hover-color: #{$navbar-light-brand-hover-color};
--#{$prefix}navbar-nav-link-padding-x: #{$navbar-nav-link-padding-x};
--#{$prefix}navbar-toggler-padding-y: #{$navbar-toggler-padding-y};
--#{$prefix}navbar-toggler-padding-x: #{$navbar-toggler-padding-x};
--#{$prefix}navbar-toggler-font-size: #{$navbar-toggler-font-size};
--#{$prefix}navbar-toggler-icon-bg: #{escape-svg($navbar-light-toggler-icon-bg)};
--#{$prefix}navbar-toggler-border-color: #{$navbar-light-toggler-border-color};
--#{$prefix}navbar-toggler-border-radius: #{$navbar-toggler-border-radius};
--#{$prefix}navbar-toggler-focus-width: #{$navbar-toggler-focus-width};
--#{$prefix}navbar-toggler-transition: #{$navbar-toggler-transition};

--#{$prefix}nav-link-padding-x: 0;
--#{$prefix}nav-link-padding-y: #{$nav-link-padding-y};
@include rfs($nav-link-font-size, --#{$prefix}nav-link-font-size);
--#{$prefix}nav-link-font-weight: #{$nav-link-font-weight};
--#{$prefix}nav-link-color: var(--#{$prefix}navbar-color);
--#{$prefix}nav-link-hover-color: var(--#{$prefix}navbar-hover-color);
--#{$prefix}nav-link-disabled-color: var(--#{$prefix}navbar-disabled-color);

--#{$prefix}navbar-color: #{$navbar-dark-color};
--#{$prefix}navbar-hover-color: #{$navbar-dark-hover-color};
--#{$prefix}navbar-disabled-color: #{$navbar-dark-disabled-color};
--#{$prefix}navbar-active-color: #{$navbar-dark-active-color};
--#{$prefix}navbar-brand-color: #{$navbar-dark-brand-color};
--#{$prefix}navbar-brand-hover-color: #{$navbar-dark-brand-hover-color};
--#{$prefix}navbar-toggler-border-color: #{$navbar-dark-toggler-border-color};
--#{$prefix}navbar-toggler-icon-bg: #{escape-svg($navbar-dark-toggler-icon-bg)};

-->