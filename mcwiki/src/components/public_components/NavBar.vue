<template>
  <div class="container-fluid sticky-top bg-body-tertiary" style="background-color: #ffffff;">
    <!-- wdf? Why is that? sticky->fixed->sticky??? No way... It just fking worked -->
    <div class="container">
      <nav class="navbar navbar-expand-lg navbar-light">
        <div class="container-fluid">

          <a class="navbar-brand" href="#/home">
            <img src="../icons/Minecraft_logo.png" class="mb-1 img_title">
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

<style scoped>

.img_title {
  width: 30px;
  height: 24px;
  margin-left: 12px;
}

</style>

<!--

example: style="--bs-navbar-padding-x: "

$navbar-padding-y:                  $spacer * .5;
$navbar-padding-x:                  null;

$navbar-nav-link-padding-x:         .5rem;

$navbar-brand-font-size:            $font-size-lg;
// Compute the navbar-brand padding-y so the navbar-brand will have the same height as navbar-text and nav-link
$nav-link-height:                   $font-size-base * $line-height-base + $nav-link-padding-y * 2;
$navbar-brand-height:               $navbar-brand-font-size * $line-height-base;
$navbar-brand-padding-y:            ($nav-link-height - $navbar-brand-height) * .5;
$navbar-brand-margin-end:           1rem;

$navbar-toggler-padding-y:          .25rem;
$navbar-toggler-padding-x:          .75rem;
$navbar-toggler-font-size:          $font-size-lg;
$navbar-toggler-border-radius:      $btn-border-radius;
$navbar-toggler-focus-width:        $btn-focus-width;
$navbar-toggler-transition:         box-shadow .15s ease-in-out;

$navbar-light-color:                rgba(var(--#{$prefix}emphasis-color-rgb), .65);
$navbar-light-hover-color:          rgba(var(--#{$prefix}emphasis-color-rgb), .8);
$navbar-light-active-color:         rgba(var(--#{$prefix}emphasis-color-rgb), 1);
$navbar-light-disabled-color:       rgba(var(--#{$prefix}emphasis-color-rgb), .3);
$navbar-light-icon-color:           rgba($body-color, .75);
$navbar-light-toggler-icon-bg:      url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30'><path stroke='#{$navbar-light-icon-color}' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/></svg>");
$navbar-light-toggler-border-color: rgba(var(--#{$prefix}emphasis-color-rgb), .15);
$navbar-light-brand-color:          $navbar-light-active-color;
$navbar-light-brand-hover-color:    $navbar-light-active-color;

$navbar-dark-color:                 rgba($white, .55);
$navbar-dark-hover-color:           rgba($white, .75);
$navbar-dark-active-color:          $white;
$navbar-dark-disabled-color:        rgba($white, .25);
$navbar-dark-icon-color:            $navbar-dark-color;
$navbar-dark-toggler-icon-bg:       url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30'><path stroke='#{$navbar-dark-icon-color}' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/></svg>");
$navbar-dark-toggler-border-color:  rgba($white, .1);
$navbar-dark-brand-color:           $navbar-dark-active-color;
$navbar-dark-brand-hover-color:     $navbar-dark-active-color;

-->