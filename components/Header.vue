<template>
  <header>
    <div class="container">
      <h1>
        KoronaPol
        <small>Prototyp sklepu z maseczkami i testami na COVID-19</small>
      </h1>
    </div>
    <nav class="container">
      <n-link to="/">
        Strona główna
      </n-link>
      <n-link to="/o-nas">
        O nas
      </n-link>
    </nav>
  </header>
</template>

<style lang="scss" scoped>
header {
  background: $brand-background;
  color: $brand-text;

  small {
    display: block;
    font-size: 0.6em;
  }

  h1 {
    margin-bottom: 0.2em;
  }

  nav {
    display: flex;
    flex-direction: row;

    padding: 0;

    a {
      display: inline-block;
      padding: 10px 15px;
      color: inherit;
      text-decoration: none;

      font-size: 1rem;

      &:hover {
        background: rgba(0,0,0,0.25);
      }

      &.nuxt-link-exact-active {
        background: rgba(0,0,0,0.15);
      }
    }
  }
}
</style>
