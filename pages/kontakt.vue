<template>
  <div>
    <div class="topNapis">
      <h3>Znajdz nas na mapie</h3>
    </div>
    <div class="map" />
    <div class="container">
      <h4>Dane kontaktowe</h4>
      <p>ulica: Mostowa 15</p>
      <p>miejscowosc: Sosnowiec</p>
      <p>adres email: koronapol@example.com</p>
      <p>telefon: +0700666992</p>
    </div>
  </div>
</template>

<style lang="scss" scoped>

.topNapis{
  text-align: center;
}

.map {
  background-image: url('https://staticmapmaker.com/img/google@2x.png');
  background-position: center;
  margin: 0 auto;
  align-items: center;
  background-size: cover;
  min-height: 300px;
  max-width: 600px;
}

.container{
  position: relative;
  padding-left: 200px;
  margin: 0 auto;
  min-width: 600px;
  p{
    margin-top:2px;
    margin-bottom:2px;
  }
}

</style>
