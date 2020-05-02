export const state = () => ({
  products: {
    maseczka: {
      ref: '00001',
      name: 'Maseczka',
      price: '25',
      discountedPrice: '20',
      image: require('../assets/cover.png'),
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non est ligula. Nunc varius et augue sit amet porta. Nulla a metus non est blandit rhoncus. Curabitur arcu tellus, aliquam eget pharetra vel, molestie in dolor. Integer in porta nunc. Nam suscipit dui vitae ex commodo varius. Praesent cursus turpis sit amet volutpat dapibus. Nullam tempus, odio eget imperdiet ullamcorper, felis urna suscipit risus, vitae aliquet elit velit eget eros. Nunc ultricies tristique mauris et scelerisque. Morbi gravida urna non purus facilisis, sed dapibus ante lacinia. Vestibulum semper urna vitae pretium imperdiet.',
      featured: true
    },
    plyn: {
      ref: '00002',
      name: 'Płyn do dezynfekcji',
      price: '20',
      discountedPrice: null,
      image: require('../assets/cover.png'),
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non est ligula. Nunc varius et augue sit amet porta. Nulla a metus non est blandit rhoncus. Curabitur arcu tellus, aliquam eget pharetra vel, molestie in dolor. Integer in porta nunc. Nam suscipit dui vitae ex commodo varius. Praesent cursus turpis sit amet volutpat dapibus. Nullam tempus, odio eget imperdiet ullamcorper, felis urna suscipit risus, vitae aliquet elit velit eget eros. Nunc ultricies tristique mauris et scelerisque. Morbi gravida urna non purus facilisis, sed dapibus ante lacinia. Vestibulum semper urna vitae pretium imperdiet.',
      featured: true
    },
    kombinezon: {
      ref: '00003',
      name: 'Kombinezon ochronny',
      price: '75',
      discountedPrice: '50',
      image: require('../assets/cover.png'),
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non est ligula. Nunc varius et augue sit amet porta. Nulla a metus non est blandit rhoncus. Curabitur arcu tellus, aliquam eget pharetra vel, molestie in dolor. Integer in porta nunc. Nam suscipit dui vitae ex commodo varius. Praesent cursus turpis sit amet volutpat dapibus. Nullam tempus, odio eget imperdiet ullamcorper, felis urna suscipit risus, vitae aliquet elit velit eget eros. Nunc ultricies tristique mauris et scelerisque. Morbi gravida urna non purus facilisis, sed dapibus ante lacinia. Vestibulum semper urna vitae pretium imperdiet.',
      featured: false
    }
  },
  cart: [
    // {
    //   slug: 'maseczka',
    //   amount: 5
    // },
    // {
    //   slug: 'plyn',
    //   amount: 1
    // }
  ]
})

export const mutations = {
  incrementProductAmount (state, slug) {
    state.cart = this.state.cart.map((p) => {
      if (p.slug !== slug) {
        return p
      }

      return {
        ...p,
        amount: p.amount + 1
      }
    })
  },
  decrementProductAmount (state, slug) {
    state.cart = this.state.cart.map((p) => {
      if (p.slug !== slug) {
        return p
      }

      return {
        ...p,
        amount: p.amount - 1
      }
    }).filter(p => p.amount > 0)
  },
  addToCart (state, slug) {
    state.cart.push({
      slug,
      amount: 1
    })
  }
}

export const actions = {
  addToCart ({ commit, state }, slug) {
    if (!state.cart.filter(v => v.slug === slug).length > 0) {
      commit('addToCart', slug)
    }
  }
}
