<template>
  <div>
    <button v-if="hasScrolled" id="scrollToTopBtn" @click="goToUp">☝️</button>
  </div>
</template>

<script>
// import goTo from 'vuetify/lib/services/goto';

export default {
  name: "ScrollUp",
  computed: {
    hasScrolled () {
      return this.$store.state.targetY !== 0
    }
  },
  methods: {
    goToUp () {
      goTo(0)
    }
  }
}
</script>

<style lang="scss" scoped>
  #scrollToTopBtn {
    background-color: black;
    border: none;
    border-radius: 50%;
    color: white;
    cursor: pointer;
    font-size: 16px;
    line-height: 48px;
    width: 48px;
    position: fixed;
    bottom: 20px;
    z-index: 5;
    right: 20px;
    box-shadow: #FCE77D 0 0 5px;
  }
</style>
