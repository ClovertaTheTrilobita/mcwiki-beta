<template>
  <div class="home d-flex flex-column align-items-center justify-content-center vh-100">
    <div class="section mb-5 bg-secondary rounded p-4 shadow">
      <h3 class="text-center">关于我</h3>
      <p class="text-center">
        你好！我是[你的名字]，一名[你的职业]。我热爱[你的兴趣爱好]，并且一直在努力提升自己在[相关领域]的技能。
      </p>
    </div>

    <div class="section mb-5 bg-secondary rounded p-4 shadow">
      <img src="" alt="个人照片" class="img-fluid rounded mb-3" style="max-width: 200px;">
      <p class="text-center">
        这是我的个人照片。
      </p>
    </div>

    <div class="section mb-5 bg-secondary rounded p-4 shadow">
      <h2 class="text-center">我的技能</h2>
      <ul class="list-unstyled text-center">
        <li>技能1</li>
        <li>技能2</li>
        <li>技能3</li>
      </ul>
    </div>

  </div>
</template>

<script>
export default {
  name: 'AboutMe'
}
</script>

<style scoped>
.home {
  background-color: #ffffff;
  height: 1000vh;
  padding: 20px;
  padding-top: 120px;
  /* 预留导航栏 */
  background: linear-gradient(135deg, #f8f9fa 30%, #007efc);
}

.section {
  max-width: 600px;
  width: 100%;
  transition: transform 0.3s ease, box-shadow 0.3s ease; /* 添加过渡效果 */
}

.section:hover{
  transform: translateY(-10px); /* 向上浮动 */
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3); /* 添加阴影效果 */
}
</style>