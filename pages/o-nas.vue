<template>
  <div>
    <div class="hero">
      <div class="hero-container">
        <h2>O nas</h2>
      </div>
    </div>
    <div class="container">
      <p>Sklep został założony przez młodych i ambitnych studentów Wojskowej Akademii Technicznej, w trosce o zdrowie i bezpieczeństwo polskich obywateli zareagowaliśmy na szalejącą na świecie pandemię koronawirusa. Zaopatrujemy się u zaufanych chińskich producentów. Sklep powstał w 2020 roku.</p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.hero {
  // Source: https://unsplash.com/photos/p74ndnYWRY4
  background: url('~assets/team.jpg');
  background-position: center;
  background-size: cover;

  .hero-container {
    padding: 1rem 2rem;
    min-height: 500px;
    background: linear-gradient(to right, rgba(15, 32, 39, 0.81), rgba(32, 58, 67, 0.66), rgba(44, 83, 100, 0.45));

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    h2 {
      font-size: 3rem;
      color: white;
    }
  }
}
</style>
