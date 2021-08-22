<template>
  <div ref="who" class="who">
    <v-row>
      <v-col md="4" class="who-img" :lazy-background="backgroundImg"></v-col>
      <v-col  class="who-text">
        <p data-aos="fade-left">
          <span class="text-primary">Name: </span>
          {{ name }}
        </p>
        <p data-aos="fade-left">
          <span class="text-primary">Email: </span>
          {{ email }}
        </p>
        <p data-aos="fade-left">
          <span class="text-primary">Mobile: </span>
          {{ tel }}
        </p>
        <p data-aos="fade-left">
          <span class="text-primary">Address: </span>
          {{ address }}
        </p>
        <hr />
        <p class="text-muted" data-aos="fade-left">
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
      default: 'Brain Griffin'
    },
    backgroundImg: {
      type: String,
      default: '/images/karimslab.jpg'
    },
    email: {
      type: String,
      default: 'brain@griffin.guy'
    },
    tel: {
      type: String,
      default: '+321-000-586'
    },
    address: {
      type: String,
      default: 'Some fake place in USA'
    },
    description: {
      type: String,
      default: 'Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour calibrer une mise en page, le texte définitif venant remplacer le faux-texte dès qu\'il est prêt ou que la mise en page est achevée. Généralement, on utilise un texte en faux latin, le Lorem ipsum ou Lipsum.'
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
