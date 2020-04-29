<template>
  <div class="container">
    <h1>Koszyk</h1>

    <div class="checkout-products">
      <div v-for="product in products" :key="product.slug" class="product">
        <div class="product-image">
          <img :src="product.image">
        </div>
        <div class="product-name">
          {{ product.name }}
        </div>
        <div class="product-amount">
          <div class="btn-minus">
            -
          </div>
          {{ product.amount }}
          <div class="btn-plus">
            +
          </div>
        </div>
        <div v-if="product.discountedPrice" class="product-price">
          <div class="new-price">
            {{ product.discountedPrice }} zł
          </div>
          <div class="old-price">
            {{ product.price }} zł
          </div>
        </div>
        <div v-else class="product-price">
          {{ product.price }} zł
        </div>
      </div>
    </div>

    <div style="text-align: right; margin-top: 30px">
      <div class="btn-cta">
        Zamów
      </div>
    </div>
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
          amount: p.amount
        }
      })

      return productsInCart
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
    }

    .product-amount {
      display: flex;
      flex-direction: row;
      align-items: center;
      font-size: 2.5rem;

      .btn-plus,
      .btn-minus {
        margin: 0 15px;

        width: 25px;
        height: 25px;

        font-size: 20px;
        font-weight: bold;

        text-align: center;

        color: white;
        background: #616161;

        cursor: pointer;
      }

      .btn-plus {
        background: #8bc34a;
      }
    }

    .product-price {
      text-align: right;
      font-size: 1.5rem;

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

.btn-cta {
  display: inline-block;
  padding: 0.7em 1.5em;

  cursor: pointer;

  box-shadow: 0 5px 20px rgba(0,0,0,0.1), 0 6px 6px rgba(0,0,0,0.1);
  transform: translateY(0);
  cursor: pointer;

  transition: all 0.13s ease-out;

  &:hover {
    box-shadow: 0 10px 20px rgba(0,0,0,0.15), 0 6px 6px rgba(0,0,0,0.15);
    transform: translateY(-3px);
  }

  background: #e01a3f;
  color: white;
  font-size: 1.1em;
}
</style>
