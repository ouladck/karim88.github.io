<template>
  <div class="footer" :lazy-background="backgroundImg">
    <div class="overlayer">
      <v-row align="end">
        <v-col cols="12" md="6">
          <h2 class="">Contacts</h2>
          <ul>
            <li class=" wow zoomIn"><v-icon small>fas fa-phone</v-icon> {{ tel }}</li>
            <li class=" wow zoomIn"><v-icon small>fas fa-at</v-icon> {{ email }}</li>
          </ul>
        </v-col>
      </v-row>
      <div class="copyleft-footer wow slideInUp">
        <p>Made with <v-icon class="wow pulse infinite">fas fa-heart</v-icon> From <a :href="countryLink">{{ country }}</a></p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Footer",
  props: {
    tel: {
      type: String,
      default: ''
    },
    email: {
      type: String,
      default: ''
    },
    country: {
      type: String,
      default: 'Morocco'
    },
    countryLink: {
      type: String,
      default: 'https://en.wikipedia.org/wiki/Morocco'
    },
    backgroundImg: {
      type: String,
      default: ''
    },
  }
}
</script>

<style scoped lang="scss">
.footer {
  position: relative;
  color: rgba(232, 232, 232, 1);
  background-repeat: no-repeat;
  background-position: top;
  background-size: cover;
  bottom: 0;
  letter-spacing: 2px;
  font-size: 22px;
  h2 {
    text-align: left;
    font-family: 'Abril Fatface', cursive;
    margin-top: 30px;
    padding-left: 10px;
    color: #FCE77D;
  }
  ul {
    text-align: left;
    list-style: none;
    margin-top: 20px;
    padding: 10px;
  }
  li {
    padding-bottom: 10px;
  }
  .overlayer {
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
    background-color: #1D1B1BF1;
    .copyleft-footer {
      width: 100vw;
      position: absolute;
      padding: 20px;
      padding-left: 60px;
      bottom: 0;
      font-size: 16px;
      text-align: right;
      letter-spacing: 3px;
      p {
        padding-right: 20px;
      }
    }
  }
}


.fa-heart, .footer a {
  color: #F96167 !important;
}

@media only screen and (max-width: 600px) {

  .footer {
    .overlayer {
      .row {
        font-size: 15px;
        margin-bottom: 50px;
      }
      .copyleft-footer {
        padding-left: 10px;
        bottom: -77px;
      }
    }
  }
}
</style>
