<template>
  <div class="container grid">
    <Card v-for="(product, n) in products" :key="n" :product="product" />
  </div>
</template>

<script>
import Card from '~/components/Card'

export default {
  components: {
    Card
  },
  computed: {
    products () {
      return this.$store.state.products
    }
  }
}
</script>

<style lang="scss" scoped>
.grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px 20px;
}
</style>
