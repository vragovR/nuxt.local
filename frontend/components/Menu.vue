<template>
  <div class="menu">
    <NuxtLink to="/">
      _Главная
    </NuxtLink>
    <NuxtLink to="/about">
      _О компании
    </NuxtLink>
    <NuxtLink to="/products/1">
      _Товар 1
    </NuxtLink>
    <NuxtLink to="/products/2">
      _Товар 2
    </NuxtLink>
    <NuxtLink to="/products">
      _404
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
