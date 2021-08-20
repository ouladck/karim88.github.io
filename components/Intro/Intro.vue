<template>
  <div ref="intro" class="intro" :lazy-background="backgroundImg">
    <img class="logo" :src="logo" alt="Logo" title="Logo" v-lazy-load />
    <div class="overlayer">
      <div class="k-intro">
        <h1>{{ name }}</h1>
        <p class="text-muted">{{ position }}</p>
      </div>
      <img v-lazy-load :src="introLayer" class="svg8" alt="Decoration"  title="Decoration"/>
      <v-row align="end" class="k-social">
        <v-col v-for="(sn, i) of socialNetwork" class="timeline" cols="12" md="3" :key="i">
          <a :href="sn.link" rel="noopener noreferrer" target="_blank">
            <v-icon dark :class="`${sn.className} icon-${i}`" large>{{ sn.icon }}</v-icon>
          </a>
        </v-col>
      </v-row>

    </div>
  </div>
</template>

<script>
export default {
  name: 'Intro',
  props: {
    name: {
      type: String,
      default: ''
    },
    position: {
      type: String,
      default: ''
    },
    logo: {
      type: String,
      default: ''
    },
    backgroundImg: {
      type: String,
      default: ''
    },
    introLayer: {
      type: String,
      default: ''
    },
    socialNetwork: {
      type: Array,
      default: () => []
    }
  }
}
</script>

<style scoped lang="scss">
.intro {
  position: relative;
  font-family: 'Abril Fatface', cursive;
  background-repeat: no-repeat;
  background-position: top;
  background-size: cover;
  height: 100vh;
  margin: 0;
  padding: 0;

  .overlayer {
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
    background-color: rgba(0, 0, 0, 0.7);

    .k-intro {
      z-index: 4;
      color: rgba(232, 232, 232, 1);
      position: absolute;
      top: 40%;
      bottom: 60%;
      padding-left: 352px;
    }
  }

  .svg8 {
    position: absolute;
    z-index: 2;
    bottom: 0;
    left: 0;
    width: 50%;
  }

  h1 {
    text-align: left;
    font-size: 4em;
    text-transform: uppercase;
    letter-spacing: 10px;
    font-weight: 300;
    color: #F7F7F9;
  }

  p {
    font-size: 1.6rem;
    letter-spacing: 10px;
    font-weight: 900;
    text-align: left;
  }

  .k-social {
    position: absolute;
    bottom: 0;
    right: 0;
    padding-right: 152px;
    padding-bottom: 110px;
    z-index: 3;

    a {
      text-decoration: none;
      color: #F7F7F9;
    }
  }

  .logo {
    position: absolute;
    z-index: 2;
    top: 20px;
    left: 20px;
  }
}

.text-danger:hover {
  color: #F96167 !important;
}

.text-facebook:hover {
  color: #4267b2 !important;
}

.text-linkedin:hover {
  color: #0073b1 !important;
}

.text-github:hover {
  color: #1D1B1B !important;
}

@media only screen and (max-width: 800px) {
  .intro {
    .overlayer {
      .k-intro {
        padding-left: 47px;
        top: 30%;
        h1 {
          font-size: 3em;
        }
        p {
          font-size: 18px;
        }
      }
    }

    .svg8 {
      width: 100%;
    }

    .k-social {
      left: 0;
      padding-bottom: 10px;
    }

    .k-social a {
      padding-left: 10px;
      color: #1D1B1B;
    }

    .fas, .fab {
      padding-right: 0;
      color: #1D1B1B !important;
    }
  }
}

@media only screen and (max-width: 600px) {
  .intro {
    .overlayer {
      .k-intro {
        padding-left: 47px;
        font-size: 8px;
        top: 30%;
        h1 {
          font-size: 3em;
        }
        p {
          font-size: 18px;
        }
      }
    }

    .svg8 {
      width: 100%;
    }

    .k-social {
      left: 0;
      padding-bottom: 10px;
    }

    .k-social a {
      padding-left: 10px;
      color: #1D1B1B;
    }

    .fas, .fab {
      font-size: 30px !important;
      padding-right: 0;
      color: #1D1B1B !important;
    }
  }
}

@media only screen and (max-width: 360px) {
  .intro {
    .overlayer {
      .k-intro {
        padding-left: 37px;
        font-size: 8px;
        top: 25%;
      }
    }

    .k-intro h1 {
      font-size: 3rem;
    }
    .svg8 {
      width: 100%;
    }
    .k-social {
      left: 0;
      padding-bottom: 10px;
      a {
        padding-left: 10px;
        color: #1D1B1B;
      }
      .timeline {
        padding-top: 0;
      }
    }
    .fas, .fab {
      font-size: 25px !important;
      padding-right: 0;
      color: #1D1B1B !important;
    }
  }
}
</style>
