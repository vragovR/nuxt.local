<template>
  <div>
    <h3>Страница товара</h3>
    <Menu />
  </div>
</template>

<script>
import Menu from '@/components/Menu'

export default {
  components: { Menu },
  validate ({ params, query, store }) {
    if (!params.id) {
      return false
    }

    return true
  },
  data () {
    return {
      id: this.$route.params.id
    }
  }
}
</script>
