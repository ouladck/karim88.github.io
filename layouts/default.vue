<template>
  <div>
    <Nuxt />
  </div>
</template>

<script>
export default {
  loading: '~/components/LoadingBar/LoadingBar.vue',
  data () {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: 'mdi-apps',
          title: 'Welcome',
          to: '/'
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'Inspire',
          to: '/inspire'
        }
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Vuetify.js'
    }
  }
}
</script>

<style>
html, body {
  margin: 0;
  padding: 0;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-size: 15px;
  line-height: 1.6;
  font-family: 'Kanit', sans-serif;
  color: #999;
  overflow-x: hidden;
}
body {
  overflow: hidden;
  background-color: #1D1B1B;
}
blockquote {
  font-family: 'Dancing Script', cursive;
}


.fa, .fab {
  color: rgba(232, 232, 232, 1);
  font-weight: lighter;
  padding-right: 15px;
}

.fas {
  color: rgba(232, 232, 232, 1) !important;
}

.k-weight-lighter {
  font-weight: lighter;
}

a {
  color: #1D1B1B;
}

a:hover {
  color: #709f9f;
}
p {
  margin-top: 0;
  margin-bottom: 1rem;
}
hr {
  margin-top: 1rem;
  margin-bottom: 1rem;
  border: 0;
  border-top: 1px solid rgba(0,0,0,.1);
}
.text-muted {
  color: #6c757d !important;
}
</style>
