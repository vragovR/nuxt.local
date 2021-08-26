<template>
  <div class="menu">
    <NuxtLink to="/">
      Главная
    </NuxtLink>
    <NuxtLink to="/about">
      О компании
    </NuxtLink>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="less" scoped>
.menu {
  display: flex;

  a {
    display: block;
    margin: 20px;
  }
}
</style>
