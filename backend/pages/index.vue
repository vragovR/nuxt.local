<template>
  <div>
    <h1>Эта страница работает в режиме SPA</h1>
    <br>
    <Tutorial />
    <br>
    <Menu />

    <UiText size="hero" >
      Тест
    </UiText>
  </div>
</template>

<script>
import Tutorial from '../../common/components/Tutorial'
import Menu from '@/components/Menu'

export default {
  components: { Menu, Tutorial }
}
</script>

<style lang="less">
body {
  background: #e7e3e3;
}
</style>
