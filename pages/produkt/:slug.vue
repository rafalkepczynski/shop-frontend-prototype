<template>
  <div class="container">
    <template v-if="product === null">
      <h1>404</h1>
      <p>Taki produkt nie istnieje</p>
    </template>
    <template v-else>
      <h1>{{ product.name }}</h1>
      <div class="image">
        <img :src="product.image">
      </div>
      <div class="test">
        <div class="productPrice">
          <h3>
            <small v-if="product.discountedPrice">
              <span class="new-price">{{ product.discountedPrice }} zł</span>
              <span class="old-price">{{ product.price }} zł</span>
            </small>
            <small v-else>{{ product.price }} zł</small>
          </h3>
        </div>
        <div class="addProduct">
          <button>Dodaj do koszyka</button>
        </div>
        <div class="productInfo">
          <p>{{ product.description }}</p>
        </div>
      </div>
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
<style lang="scss" scoped>
.container{
  display:block;

  .image{
    float: left;
    width: 400px;
    height: 400px;
    display: block;
    margin: 0;
    img {
      width: 100%;
      height: auto;
    }
  }

  .test{
    display: block;
    clear: left;

    .productPrice{
      display: block;
      float: left;
      h3 {
        padding-top: 8px;
        margin-top: 0;

        small {
          display: inline-block;
          margin-bottom: 0.0em;
          font-size: 2.0em;

          .new-price {
            color: #4CAF50;
          }

          .old-price {
            text-decoration: line-through;
            font-size: 0.8em;
          }
        }
      }
    }
    .addProduct{
      display: block;
      position: relative;
      padding-top: 0px;
      margin-left: 275px;
      button{
        margin-top: 8px;
        line-height: 40px;
        font-weight: bold;
        color: $brand-text;
        background: $brand-background;
        border: none;
      }
      button:hover{
        margin-top: 8px;
        line-height: 40px;
        font-weight: bold;
        color: $brand-text;
        background: rgb(255, 0, 0);
        border: none;
      }

    }
    .productInfo{
      display: inline-block;
    }
  }

}

</style>
