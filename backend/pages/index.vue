<template>
  <div>
    <h1>Эта страница работает в режиме SPA</h1>
    <br>
    <Tutorial />
    <br>
    <Menu />

    <UiButton size="sm" type="primary">
      Кнопка
    </UiButton>
  </div>
</template>

<script>
import Tutorial from '../../common/components/Tutorial'
import Menu from '@/components/Menu'

export default {
  components: { Menu, Tutorial }
}
</script>
