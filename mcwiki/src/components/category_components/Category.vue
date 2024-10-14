<template>
  <h1 class="visually-hidden">Heroes examples</h1>

  <div class="px-4 py-5 my-5 text-center">
    <img class="d-block mx-auto mb-4" src=".\media\t1.png" alt="" width="90" height="90">
    <h1 class="display-5 fw-bold">Find What You Need ...</h1>
    <div class="col-lg-6 mx-auto">
      <p class="lead mb-4">Quickly design and customize responsive mobile-first sites with Bootstrap, the world’s most
        popular front-end open source toolkit, featuring Sass variables and mixins, responsive grid system, extensive
        prebuilt components, and powerful JavaScript plugins.</p>

    </div>
  </div>






  <li>

<figure>

  <div><img src="./images/5.png" alt="img05"></div>

  <figcaption>

    <h3>Safari</h3>

    <span>Jacob Cummings</span>

    <a href="http://www.jq22.com">Take a look</a>

  </figcaption>

</figure>

</li>








  <div class="container mt-1" style="--bs-focus-ring-color: #5a5a5a85;">
    <div class="accordion accordion-flush" style="--bs-accordion-active-bg: #ffffff;" id="accordionExample">


      <!-- Drop down menue for Bloks&Items -->
      <div class="accordion-item">
        <h2 class="accordion-header">
          <button class="accordion-button focus-ring" type="button" data-bs-toggle="collapse"
            data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
            Blocks&Items
          </button>
        </h2>
        <div id="collapseOne" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
          <div class="accordion-body" style="text-align: left;">
            <!-- <a href="#/test1" >111</a> -->
            test
          </div>
        </div>
      </div>

      <!-- Drop down menue for Boime -->
      <div class="accordion-item">
        <h2 class="accordion-header">
          <button class="accordion-button focus-ring collapsed" type="button" data-bs-toggle="collapse"
            data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
            Biome
          </button>
        </h2>
        <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
          <div class="accordion-body" style="text-align: left;">
            MC bios will appear here.
          </div>
        </div>
      </div>

      <!-- Drop down menue for DIM -->
      <div class="accordion-item">
        <h2 class="accordion-header">
          <button class="accordion-button focus-ring collapsed" type="button" data-bs-toggle="collapse"
            data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
            DIM
          </button>
        </h2>
        <div id="collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
          <div class="accordion-body" style="text-align: left;">
            World dimention.
          </div>
        </div>
      </div>

      <!-- Drop down menue for Entity -->
      <div class="accordion-item">
        <h2 class="accordion-header">
          <button class="accordion-button focus-ring collapsed" type="button" data-bs-toggle="collapse"
            data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
            Entity
          </button>
        </h2>
        <div id="collapseFour" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
          <div class="accordion-body" style="text-align: left;">
            Minecraft Entities.
          </div>
        </div>
      </div>

      <!-- Drop down menue for Enchantment -->
      <div class="accordion-item">
        <h2 class="accordion-header">
          <button class="accordion-button focus-ring collapsed" type="button" data-bs-toggle="collapse"
            data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
            Enchantment
          </button>
        </h2>
        <div id="collapseFive" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
          <div class="accordion-body" style="text-align: left;">
            Enchantment for tools will appear here.
          </div>
        </div>
      </div>

      <!-- Drop down menue for Effects -->
      <div class="accordion-item">
        <h2 class="accordion-header">
          <button class="accordion-button focus-ring collapsed" type="button" data-bs-toggle="collapse"
            data-bs-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
            Effect
          </button>
        </h2>
        <div id="collapseSix" class="accordion-collapse collapse" data-bs-parent="#accordionExample" bg-light>
          <div class="accordion-body" style="text-align: left;">
            Buffs&Debuffs appears here.
          </div>
        </div>
      </div>

      <!-- Drop down menue for Structres -->
      <div class="accordion-item">
        <h2 class="accordion-header">
          <button class="accordion-button focus-ring collapsed" type="button" data-bs-toggle="collapse"
            data-bs-target="#collapseSeven" aria-expanded="false" aria-controls="collapseSeven">
            Structres
          </button>
        </h2>
        <div id="collapseSeven" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
          <div class="accordion-body" style="text-align: left;">
            Block Structres.
          </div>
        </div>
      </div>

      <!-- Drop down menue for Game Backstories -->
      <div class="accordion-item">
        <h2 class="accordion-header">
          <button class="accordion-button focus-ring collapsed" type="button" data-bs-toggle="collapse"
            data-bs-target="#collapseEight" aria-expanded="false" aria-controls="collapseEight">
            Backstory
          </button>
        </h2>
        <div id="collapseEight" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
          <div class="accordion-body" style="text-align: left;">
            The MC Game Backstories.
          </div>
        </div>
      </div>

      <!-- Drop down menue for In Game Settings -->
      <div class="accordion-item">
        <h2 class="accordion-header">
          <button class="accordion-button focus-ring collapsed" type="button" data-bs-toggle="collapse"
            data-bs-target="#collapseNine" aria-expanded="false" aria-controls="collapseNine">
            Game Settings
          </button>
        </h2>
        <div id="collapseNine" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
          <div class="accordion-body" style="text-align: left;">
            The new game settings appeared.
          </div>
        </div>
      </div>

    </div>
  </div>

</template>

<script>
import Modernizr from './js/modernizr.custom'
// import touch from './js/toucheffects'

export default {
  name: 'Category',
  methods() {
    (function (window) {

      // for touch devices: add class cs-hover to the figures when touching the items
      if (Modernizr.touch) {

        // classie.js https://github.com/desandro/classie/blob/master/classie.js
        // class helper functions from bonzo https://github.com/ded/bonzo

        function classReg(className) {
          return new RegExp("(^|\\s+)" + className + "(\\s+|$)");
        }

        // classList support for class management
        // altho to be fair, the api sucks because it won't accept multiple classes at once
        var hasClass, addClass, removeClass;

        if ('classList' in document.documentElement) {
          hasClass = function (elem, c) {
            return elem.classList.contains(c);
          };
          addClass = function (elem, c) {
            elem.classList.add(c);
          };
          removeClass = function (elem, c) {
            elem.classList.remove(c);
          };
        }
        else {
          hasClass = function (elem, c) {
            return classReg(c).test(elem.className);
          };
          addClass = function (elem, c) {
            if (!hasClass(elem, c)) {
              elem.className = elem.className + ' ' + c;
            }
          };
          removeClass = function (elem, c) {
            elem.className = elem.className.replace(classReg(c), ' ');
          };
        }

        function toggleClass(elem, c) {
          var fn = hasClass(elem, c) ? removeClass : addClass;
          fn(elem, c);
        }

        var classie = {
          // full names
          hasClass: hasClass,
          addClass: addClass,
          removeClass: removeClass,
          toggleClass: toggleClass,
          // short names
          has: hasClass,
          add: addClass,
          remove: removeClass,
          toggle: toggleClass
        };

        // transport
        if (typeof define === 'function' && define.amd) {
          // AMD
          define(classie);
        } else {
          // browser global
          window.classie = classie;
        }

        [].slice.call(document.querySelectorAll('ul.grid > li > figure')).forEach(function (el, i) {
          el.querySelector('figcaption > a').addEventListener('touchstart', function (e) {
            e.stopPropagation();
          }, false);
          el.addEventListener('touchstart', function (e) {
            classie.toggle(this, 'cs-hover');
          }, false);
        });

      }

    })(window);
  }
}

</script>

<style src="./css/component.css" scoped>
.accordion-body {
  background-color: aliceblue;
}
</style>
