<template>
  <div>
    <Intro name="Karim Oulad Chalha" position="Senior Web developer" logo="/images/logo-128.png"
      background-img="/images/desktop.jpg" intro-layer="/images/intro-layer.svg" />
    <Footer tel="+2126-4162-3527" email="ouladchalha.k@gmail.com"
      background-img="/images/sale.jpg"></Footer>
  </div>
</template>

<script>

import Intro from "../components/Intro/Intro";
import Footer from "../components/Footer/Footer";

export default {
  components: {Intro, Footer},
  loading: {
    color: 'blue',
    height: '5px'
  }
}
</script>
