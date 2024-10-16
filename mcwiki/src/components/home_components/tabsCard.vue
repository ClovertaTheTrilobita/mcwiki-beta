<template>
  <div class="container-fluid" style="background-color: #2d7054; height: 60px;"></div>
  <div class="container mt-5">
    <div class="mb-5">
      <h1 style="text-align: center; font-family: STHupo; font-size: 4em;">Minecraft Materials</h1>
    </div>
    <div class="card text-center">
      <div class="card-header" style="background-color: #009978;">
        <ul class="nav nav-tabs card-header-tabs" role="tablist" style="--bs-nav-link-color: #eefdf1; --bs-nav-link-hover-color: #eefdf1; --bs-nav-tabs-link-active-border-color: #eefdf1; --bs-nav-tabs-link-hover-border-color: #eefdf1">
          <li class="nav-item">
            <a class="nav-link active" data-bs-toggle="tab" aria-current="true" href="#home">原版资料</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" data-bs-toggle="tab" href="#menu1">原版介绍</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" data-bs-toggle="tab" href="#menu2">原版教程</a>
          </li>
        </ul>
      </div>
      <div class="card-body" style="text-align: left; background-color: #eefdf1;">
        <div class="tab-content">
          <div id="home" class="container tab-pane active show fade"> 
            <div class="row row-cols-2 row-cols-lg-4">
              <div class="col" v-for = "item in present"><Card :img_url="item.url" :text="item.descriptions" :title="item.title"/></div>
            </div>
          </div>
          <div id="menu1" class="container tab-pane fade">

            <h3>概述</h3><hr>

              <p>Minecraft于2009年5月13日正式发行，并且在2016年1月正式译作「我的世界」，是一款沙盒建造游戏，玩家可以在一个三维世界里进行随机的
                探索和用各种方块建造建筑物。Minecraft的创造者为瑞典游戏设计师<a>马库斯阿列克谢·泊松</a>，也就是Notch。</p>
              <p>2014年9月，Minecraft及其开发公司Mojang被<a>Microsoft</a>收购。</p>
              <p>2017年9月18日，PC/Mac版Minecraft正式更名为<a>Minecraft:Java版</a>（Minecraft:Java Edition）,与<a>基岩版</a>（Minecraft:Bedrock Edition）这一
                多平台版本区分开来。目前Minecraft可分为<a>Java版</a>、<a>基岩版</a>和<a>教育版</a>三个主要版本。</p>
              <p>Minecraft<a>中国版</a>的代理商为<a>网易</a>。</p>
              <p>Minecraft<a>教育版</a>中国代理为<a>网易有道</a>，并推出了“Minecraft教育个人版”。</p>
              <p>Minecraft目前处于半开源状态，只有Brigadier（命令解释器）和DataFixerUpper（数据修复器）开源，Blaze3D（完全重写的游戏渲染引擎）正在准
                备开源。Java版的源码或许被存放在了GitHub上叫做“Mojang/Minecraft'”的私有仓库中，这曾由<a>Bartosz Bok</a>在Brigadier开源发布前的开发中提到。</p>

            <h4>购买</h4>

              <p>对于Java版，在<a>官网</a>以$29.99（约￥212）的价格对Minecraft for Windows和Java版捆绑出售，若玩家于此前就已购买Minecraft for Windows或
                者Java版，则官方会免费赠送您未获得的版本。</p>
              <p>对于基岩版，不同平台的版本会在不同平台的商场出售，例如在Microsoft Store、App Store、Google Play、Xbox Store等网站会以S6.99-$29.99
                （约￥49-￥212）的价格进行出售，Vindows10/11和Xbox One平台的基岩版可以通过订阅Xbox Game Pass免费游玩。若玩家已经购买Xbox One、
                Nintendo或PS4平台上的原主机版且满足一定要求后，或是已经购买了Java版时，可免费获得对应平台的基岩版。</p>
              <p>正版Minecraft享有多人游戏、专属的游戏启动器等，其他启动器也可以启动正版MC,而这些启动器启动的离线版的Minecraf什只能进行单机游戏，但
                依旧可以正常游玩，有条件请去官网支持正版。</p>

            <h4>系统要求</h4>

              <p>在Java中的一些版本中，更改了最低Java版本要求：</p>
              <ul>
                <li>从1.12快照<b>17w13a版本</b>开始，运行Minecraft的最低要求是Java8;</li>
                <li>从1.17快照<b>21w19a版本</b>开始，运行Minecraft的最低要求是Java16;</li>
                <li>从1.18快照<b>1.18-pre2版本</b>开始，运行Minecraft的最低要求是Java17;</li>
                <li>从1.20.5快照<b>24w14a版本</b>开始，运行Minecraft的最低要求是Java21,且操作系统要求为64位。</li>
              </ul>

            <h4>衍生作品</h4>

              <p>Minecraft有非常多的衍生作品，如小说、周边、电影等。</p>
              <p>目前Minecraft拥有5个衍生游戏，包括Minecraft Dungeons（Minecraft:地下城）、Minecraft Legends（Minecraft:传奇）、Minecraft:Story
                Mode（Minecraft:故事模式）、Minecraft:Story Mode-Season Two（Minecraft:故事模式第二季）和Minecraft Earth。</p>

            <h3>关于模组</h3><hr>

              <p>模组是一种增加游戏内容的机制，大多仅限应用于Java版，少数模组可应用于基岩版。</p>
              <p>对于Java版，少数远古模组采用特别的安装方法，例如ModLoader、.ModLoaderMP等模组以核心覆盖的方式安装，目前大多数模组需要使用Forge、
                NeoForge（目前最新版本及以后版本）、Fabric（1.14版本及以后）、Liteloader（1.12.2版本或更低的版本）、Rift（仅限1.13.X版本）或Quilt
                （1.14版本及以后）等作为前置。除此之外，在1.13版本及以后，还可以使用<a>数据包</a>这一原版模组机制。</p>
              <p>大部分基岩版的模组叫做Add-on（<a>附加包</a>），附加包包含<a>资源包</a>、<a>行为包</a>和<a>皮肤包</a>等。</p>
              <p>在服务器中，拥有与模组类似功能的叫插件。</p>
              <p>可以在<a>CurseForge</a>和<a>Modrinth</a>等网站寻找模组。</p>

          </div>
          <div id="menu2" class="container tab-pane fade">
            <div class="row row-cols-2 row-cols-lg-4">
              <div class="col" v-for = "item in present"><Card :img_url="item.url" :text="item.descriptions" :title="item.title"/></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

  import Card from './Card.vue';
  import img1 from './images/present/card_01.png';
  import img2 from './images/present/card_02.png';
  import img3 from './images/present/card_03.png';
  import img4 from './images/present/card_04.png';
  import img5 from './images/present/card_05.png';
  import img6 from './images/present/card_06.png';
  import img7 from './images/present/card_07.png';
  import img8 from './images/present/card_08.png';
  import img9 from './images/present/card_09.png';

  export default {
    name: "tabsCard",
    components: {
      Card,
    },
    setup() {
      return {
        present: [
          {
            "title": "Items/Blocks",
            "descriptions": "Newly added or rewritten items and blocks",
            "url": img1,
          },
          {
            "title": "Biome",
            "descriptions": "Newly added or rewritten biomes",
            "url": img2,
          },
          {
            "title": "DIM",
            "descriptions": "Newly added or rewritten DIM",
            "url": img3,
          },
          {
            "title": "Entity",
            "descriptions": "Newly added or rewritten entities",
            "url": img4,
          },
          {
            "title": "Enchantment",
            "descriptions": "Newly added or rewritten enchantments",
            "url": img5,
          },
          {
            "title": "Effect",
            "descriptions": "Newly added or rewritten effects",
            "url": img6,
          },
          {
            "title": "Multiblocked Structure",
            "descriptions": "Events triggered by players building blocks",
            "url": img7,
          },
          {
            "title": "Feature",
            "descriptions": "Newly added or rewritten structures, features, jigsaws",
            "url": img8,
          },
          {
            "title": "Game Settings",
            "descriptions": "Newly added nomenclature, commands, worldview and backstory",
            "url": img9,
          },
        ],
      }
    }
  }

</script>

<style>
</style>