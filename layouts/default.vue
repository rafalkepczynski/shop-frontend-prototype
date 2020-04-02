<template>
  <div class="app">
    <Header />
    <nuxt />
    <Footer />
  </div>
</template>

<script>
import Header from '~/components/Header'
import Footer from '~/components/Footer'

export default {
  components: {
    Header,
    Footer
  }
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Ubuntu&display=swap');

html,
body {
  margin: 0;
  padding: 0;

  font-family: 'Ubuntu', sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
}

*,
*:before,
*:after {
  box-sizing: border-box;
}

body,
.app {
  min-height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: stretch;

  & > * {
    flex: 1;
  }

  & > header,
  & > footer {
    flex: 0;
  }
}

.container {
  display: block;

  width: 100%;
  max-width: 1000px;

  padding: 15px 20px;
  margin: 0 auto;
}
</style>
