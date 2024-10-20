<template>
  <div class="container-fluid sticky-top" style="background-color: #2d7054;">
    <!-- wdf? Why is that? sticky->fixed->sticky??? No way... It just fking works -->
    <div class="container">
      <nav class="navbar navbar-expand-lg navbar-dark">
        <div class="container-fluid">

          <a class="navbar-brand" href="#/home">
            <img src="../images/Minecraft_logo.png" class="mb-1 img_title" alt="logo">
            Minecraft Wikipedia
          </a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navBar"
            aria-controls="navBar" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse" id="navBar">

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

            </ul>

            <div v-if="isLoggedIn" class="avater-container">
              <img src="../images/95122414.jpg" alt="Avater" class="avater">
              <div class="menu">
                <div class="container text-center mt-4 mb-3">
                  <p>{{ user.username }}</p>
                </div>
                <div class="Bottom">
                  <nav class="nav flex-column">
                    <!-- 改变account的hash值 -->
                    <a class="nav-link btn btn-light avater-link" href="#/login"  
                      style="--bs-nav-link-color: #000000a8; --bs-nav-link-hover-color: #000000a8">Account</a>
                    <a class="nav-link btn btn-light avater-link" href="#/preference"
                      style="--bs-nav-link-color: #000000a8; --bs-nav-link-hover-color: #000000a8">My Stars</a>
                    <hr>
                    <button class="nav-link btn btn-light avater-link" href="#/404" @click="handleLogout"
                      style="--bs-nav-link-color: #000000a8; --bs-nav-link-hover-color: #000000a8">Log Out</button>
                  </nav>
                </div>
              </div>
            </div>

            <div v-else class="avater-container">
              <img src="../images/default_avater.png" alt="Avater" class="avater">
              <div class="MENU">
                <div class="container text-center mt-4 mb-3">
                  <p>Log in to use more features</p>
                </div>
                <a class=" btn btn-success mx-2" href="#/login"><span style="margin-left: 99px; margin-right: 99px;">Log In</span></a>
                <div class="text-center mt-2">
                  <small>First time user? <a href="#/register" style="color: #48af3a;">Click to register</a></small>
                </div>
              </div>
            </div>

            <form class="d-flex" role="search">
              <button class="btn btn-outline-light" type="submit" @click="SearchJump" style="margin-bottom: 2px;">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-search mx-2" style="margin-bottom: 2px;"
                  viewBox="0 0 16 16">
                  <path
                    d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
                </svg>
              </button>
            </form>

          </div>
        </div>
      </nav>
    </div>
  </div>
  <div style="display: none;">
    <search v-bind:search="search" ref="search"></search>
  </div>
</template>

<script>
import Category from '../category_components/Category.vue';
import SearchList from '../search_components/SearchList.vue';
import { nextTick } from 'vue';
import SearchIndex from '../Index_components/SearchIndex.vue';
import { mapActions } from 'vuex';
import { mapState } from 'vuex';

export default {
  name: "NavBar",
  methods: {
    SearchJump() {
      window.location.href = '#/search'
    },
    categroyClicked() {
      Category.methods.categoryClicked()
    },
    ...mapActions(['logout']),
    handleLogout() {
      this.logout();
      console.log('Logout successful');
    }
  },
  data() {
    return {
    };
  },
  components: {
    'search': SearchList
  },
  computed: {
    ...mapState(['user','isLoggedIn'])
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
  right: 70px;
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
  top: -250px;
  right: 14px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  height: 245px;
  width: 210px;
  background-color: #fff;
  border: 1px solid #ccc;
  padding: 10px;
  border-radius: 5px;
  opacity: 0;
  transition: opacity 0.3s ease;
  cursor: pointer;
  z-index: 1;
}

.MENU {
  position: absolute;
  top: -250px;
  right: 0px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  height: 155px;
  width: 310px;
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
  transform: translateY(15px) translateX(-18px) scale(2);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
}

.avater-container:hover .menu {
  transform: translate(0) translateY(300px);
  opacity: 1;
}

.avater-container:hover .MENU {
  transform: translate(0) translateX(38px) translateY(300px);
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

--#{$prefix}nav-tabs-border-width: #{$nav-tabs-border-width};
--#{$prefix}nav-tabs-border-color: #{$nav-tabs-border-color};
--#{$prefix}nav-tabs-border-radius: #{$nav-tabs-border-radius};
--#{$prefix}nav-tabs-link-hover-border-color: #{$nav-tabs-link-hover-border-color};
--#{$prefix}nav-tabs-link-active-color: #{$nav-tabs-link-active-color};
--#{$prefix}nav-tabs-link-active-bg: #{$nav-tabs-link-active-bg};
--#{$prefix}nav-tabs-link-active-border-color: #{$nav-tabs-link-active-border-color};

--#{$prefix}nav-pills-border-radius: #{$nav-pills-border-radius};
--#{$prefix}nav-pills-link-active-color: #{$nav-pills-link-active-color};
--#{$prefix}nav-pills-link-active-bg: #{$nav-pills-link-active-bg};

--#{$prefix}nav-underline-gap: #{$nav-underline-gap};
--#{$prefix}nav-underline-border-width: #{$nav-underline-border-width};
--#{$prefix}nav-underline-link-active-color: #{$nav-underline-link-active-color};

--#{$prefix}navbar-color: #{$navbar-dark-color};
--#{$prefix}navbar-hover-color: #{$navbar-dark-hover-color};
--#{$prefix}navbar-disabled-color: #{$navbar-dark-disabled-color};
--#{$prefix}navbar-active-color: #{$navbar-dark-active-color};
--#{$prefix}navbar-brand-color: #{$navbar-dark-brand-color};
--#{$prefix}navbar-brand-hover-color: #{$navbar-dark-brand-hover-color};
--#{$prefix}navbar-toggler-border-color: #{$navbar-dark-toggler-border-color};
--#{$prefix}navbar-toggler-icon-bg: #{escape-svg($navbar-dark-toggler-icon-bg)};

-->