<template>
  <div class="container grid">
    <nuxt-link v-for="(product, slug) in products" :key="slug" :to="`/produkt/${slug}`">
      <Card :product="product" />
    </nuxt-link>
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

  a {
    text-decoration: none;
    color: initial;
  }
}
</style>
