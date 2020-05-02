<template>
  <div class="container">
    <h2>Najpopularniejsze produkty</h2>
    <div class="container grid">
      <nuxt-link v-for="(product, slug) in products" :key="slug" :to="`/produkt/${slug}`">
        <Card :product="product" />
      </nuxt-link>
    </div>
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
      const products = this.$store.state.products
      let featured = {}

      Object.keys(products).forEach((slug) => {
        if (products[slug].featured) {
          featured = {
            ...featured,
            [slug]: {
              ...products[slug]
            }
          }
        }
      })

      return featured
    }
  }
}
</script>

<style lang="scss" scoped>
h2 {
  padding: 0 20px;
}

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
