<template>
  <div>
    <h1>Эта страница работает в режиме SSR</h1>
    <br>
    <Tutorial />
    <br>
    <Menu />

    <UiText size="hero">
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
