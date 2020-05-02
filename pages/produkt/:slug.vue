<template>
  <div class="container">
    <template v-if="product === null">
      <h1>404</h1>
      <p>Taki produkt nie istnieje</p>
    </template>
    <template v-else>
      <div class="product-container">
        <img :src="product.image" class="cover">
        <div class="description">
          <h1>
            {{ product.name }}

            <small v-if="product.discountedPrice">
              Cena:
              <span class="new-price">{{ product.discountedPrice }} zł</span>
              <span class="old-price">{{ product.price }} zł</span>
            </small>
            <small v-else>Cena: {{ product.price }} zł</small>
          </h1>

          <p>{{ product.description }}</p>
          <a class="btn branded" @click="addToCart">Dodaj do koszyka</a>
        </div>
      </div>

      <h2>Opinie</h2>
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
  },
  methods: {
    addToCart () {
      this.$store.dispatch('addToCart', this.$route.params.slug)
      this.$router.push({
        path: '/koszyk'
      })
    }
  }
}
</script>
<style lang="scss" scoped>
.product-container {
  display: flex;
  flex-direction: row;
  align-items: center;

  background: white;
  box-shadow: 0 5px 20px rgba(0,0,0,0.1), 0 6px 6px rgba(0,0,0,0.1);

  .cover {
    flex: 0;

    width: 350px;
    height: auto;
  }

  .description {
    flex: 1;
    padding: 10px 20px;

    h1 {
      margin-top: 0;

      small {
        display: block;
        margin-bottom: 0.3em;
        font-size: 0.8em;

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
}
// .container{
//   display:block;

//   .test{
//     display: block;
//     clear: left;

//     .productPrice{
//       display: block;
//       float: left;
//       h3 {
//         padding-top: 8px;
//         margin-top: 0;

//         small {
//           display: inline-block;
//           margin-bottom: 0.0em;
//           font-size: 2.0em;

//           .new-price {
//             color: #4CAF50;
//           }

//           .old-price {
//             text-decoration: line-through;
//             font-size: 0.8em;
//           }
//         }
//       }
//     }
//     .addProduct{
//       display: block;
//       position: relative;
//       padding-top: 0px;
//       margin-left: 275px;
//       button{
//         margin-top: 8px;
//         line-height: 40px;
//         font-weight: bold;
//         color: $brand-text;
//         background: $brand-background;
//         border: none;
//       }
//       button:hover{
//         margin-top: 8px;
//         line-height: 40px;
//         font-weight: bold;
//         color: $brand-text;
//         background: rgb(255, 0, 0);
//         border: none;
//       }

//     }
//     .productInfo{
//       display: inline-block;
//     }
//   }

// }
</style>
