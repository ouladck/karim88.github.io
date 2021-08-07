<template>
  <div class="who">
    <v-row>
      <v-col md="4" class="who-img" :style="{backgroundImage: `url(${backgroundImg}) !important;`}"></v-col>
      <v-col  class="who-text">
        <p class="wow slideInRight">
          <span class="text-primary">Name: </span>
          {{ name }}
        </p>
        <p class="wow slideInRight">
          <span class="text-primary">Email: </span>
          {{ email }}
        </p>
        <p class="wow slideInRight">
          <span class="text-primary">Mobile: </span>
          {{ tel }}
        </p>
        <p class="wow slideInRight">
          <span class="text-primary">Address: </span>
          {{ address }}
        </p>
        <hr />
        <p class="text-muted wow slideInRight">
          {{ description }}
        </p>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: "WhoAmI",
  props: {
    name: {
      type: String,
      default: ''
    },
    backgroundImg: {
      type: String,
      default: ''
    },
    email: {
      type: String,
      default: ''
    },
    tel: {
      type: String,
      default: ''
    },
    address: {
      type: String,
      default: ''
    },
    description: {
      type: String,
      default: ''
    }
  }
}
</script>

<style scoped lang="scss">
.who .row {
  background-color: #1D1B1B;
  color: #F7F7F9;
}

.who .who-img {
  position: relative;
  background-repeat: no-repeat;
  background-position: top left;
  background-size: contain;
}

.who a {
  color: #F7F7F9;
}

.who-text {
  padding: 80px 80px 25px;
  display: -webkit-flex;
  display: flex;
  text-align: left;
  flex-direction: column;
  -webkit-justify-content: center;
  justify-content: center;
  letter-spacing: 3px;
  font-size: 16px;
  font-weight: normal;
  .text-muted {
    text-transform: uppercase;
  }
}

.who .text-primary {
  color: #F96167 !important;
  text-transform: uppercase;
  width: 150px !important;
  display: inline-block;
}

@media only screen and (max-width: 600px) {
  .who .text-primary {
    width: auto !important;
  }
  .who-img {
    display: none;
  }
}
</style>
