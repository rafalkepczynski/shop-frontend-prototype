<template>
  <div class="container">
    <template v-if="product === null">
      <h1>404</h1>
      <p>Taki produkt nie istnieje</p>
    </template>
    <template v-else>
      <h1>{{ product.name }}</h1>
      <p>...</p>
    </template>
  </div>
</template>

<script>
export default {
  computed: {
    product () {
      const slug = this.$route.params.slug
      const { products } = this.$store.state

      if (slug in products) {
        return products[slug]
      }

      return null
    }
  }
}
</script>
