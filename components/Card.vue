<template>
  <div class="card">
    <img :src="product.image">
    <h3>
      <small v-if="product.discountedPrice">
        <span class="new-price">{{product.discountedPrice}} zł</span>
        <span class="old-price">{{product.price}} zł</span>
      </small>
      <small v-else>{{ product.price }} zł</small>
      {{ product.name }}
    </h3>
  </div>
</template>

<script>
export default {
  props: {
    product: {
      type: Object,
      default: () => ({
        name: 'Brak nazwy',
        price: '0',
        discountedPrice: false,
        image: 'cover.png',
        description: 'Brak opisu'
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.card {
  display: block;

  background: #fff;

  box-shadow: 0 5px 20px rgba(0,0,0,0.1), 0 6px 6px rgba(0,0,0,0.1);
  transform: translateY(0);
  cursor: pointer;

  transition: all 0.13s ease-out;

  &:hover {
    box-shadow: 0 10px 20px rgba(0,0,0,0.15), 0 6px 6px rgba(0,0,0,0.15);
    transform: translateY(-3px);
  }

  img {
    width: 100%;
    height: auto;
  }

  h3 {
    padding: 10px;
    margin: 0;

    small {
      display: block;
      margin-bottom: 0.3em;
      font-size: 0.9em;

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
</style>
