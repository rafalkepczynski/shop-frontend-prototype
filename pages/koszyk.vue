<template>
  <div class="container">
    <h1>Koszyk</h1>

    <p v-if="products.length == 0">
      Brak produktów w koszyku!
    </p>
    <template v-else>
      <div class="checkout-products">
        <div v-for="product in products" :key="product.slug" class="product">
          <div class="product-image">
            <img :src="product.image">
          </div>
          <div class="product-name">
            {{ product.name }}
            <small>Ref: {{ product.ref }}</small>
          </div>
          <div class="product-amount">
            <div class="btns">
              <div class="btn btn-plus" @click="incrementProductAmount(product.slug)">
                +
              </div>
              <div class="btn btn-minus" @click="decrementProductAmount(product.slug)">
                -
              </div>
            </div>

            {{ product.amount }}
          </div>
          <div v-if="product.discountedPrice" class="product-price">
            <div class="new-price">
              {{ product.discountedPrice * product.amount }} zł
            </div>
            <div class="old-price">
              {{ product.price * product.amount }} zł
            </div>
          </div>
          <div v-else class="product-price">
            {{ product.price * product.amount }} zł
          </div>
        </div>
      </div>

      <div style="text-align: right; margin-top: 30px">
        <div class="btn branded">
          Zamów
        </div>
      </div>
    </template>
  </div>
</template>

<script>
export default {
  computed: {
    products () {
      const { cart, products } = this.$store.state

      const productsInCart = cart.map((p) => {
        const prod = products[p.slug]

        return {
          ...prod,
          slug: p.slug,
          amount: p.amount
        }
      })

      return productsInCart
    }
  },
  methods: {
    incrementProductAmount (slug) {
      this.$store.commit('incrementProductAmount', slug)
    },
    decrementProductAmount (slug) {
      this.$store.commit('decrementProductAmount', slug)
    }
  }
}
</script>

<style lang="scss" scoped>
.checkout-products {
  padding: 15px;
  background: white;

  box-shadow: 0 5px 20px rgba(0,0,0,0.1), 0 6px 6px rgba(0,0,0,0.1);

  .product {
    padding: 10px 0;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    & > * {
      flex: 1;
      margin: 0 10px;
    }

    .product-image {
      flex: 0;

      img {
        width: 100px;
        height: auto;
      }
    }

    .product-name {
      flex: 3;

      font-weight: bold;
      font-size: 1.3rem;

      small {
        display: block;
        color: #656565;
        font-size: 0.7em;
      }
    }

    .product-amount {
      display: flex;
      flex-direction: row;
      align-items: center;
      font-size: 2.5rem;

      .btns {
        display: flex;
        flex-direction: column;

        margin-right: 10px;

        .btn {
          width: 25px;
          height: 25px;

          background: #616161;
          color: white;

          font-size: 20px;
          font-weight: bold;

          text-align: center;
          cursor: pointer;
          user-select: none;

          &:not(:last-child){
            margin-bottom: 8px;
          }
        }
      }
    }

    .product-price {
      text-align: right;
      font-size: 1.7rem;

      .new-price {
        color: #4CAF50;
      }

      .old-price {
        text-decoration: line-through;
        font-size: 0.8em;
      }
    }

    &:not(:last-child) {
      border-bottom: 1px solid rgb(209, 209, 209);
    }
  }
}
</style>
