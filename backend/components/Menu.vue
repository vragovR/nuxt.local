<template>
  <div class="menu">
    <NuxtLink to="/">
      Главная
    </NuxtLink>
    <NuxtLink to="/about">
      О компании
    </NuxtLink>
    <NuxtLink to="/products/1">
      Товар 1
    </NuxtLink>
    <NuxtLink to="/products/2">
      Товар 2
    </NuxtLink>
    <NuxtLink to="/products">
      404
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
