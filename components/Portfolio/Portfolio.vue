<template>
  <div class="portfolio">
    <h2>{{ name }}</h2>
    <v-row>
      <v-col v-for="(project, key) of projects" :key="key" :data-aos="key % 2 === 0 ? `fade-up-right` : `fade-up-left`"
             cols="12" md="3" lg="4">
        <div v-if="!project.isVideo" class="card-img"  :lazy-background="project.image" :style="{
             backgroundPosition: 'center'
        }">
          <div class="technologie-shape"/>
          <div class="technologie">{{ project.technologie }}</div>
          <div class="layer">
            <a :href="project.link" :aria-label="`link to ${project.link}`" target="_blank" rel="noopener noreferrer">
              <v-icon class="link-icon" large>fas fa-link</v-icon>
            </a>
          </div>
        </div>
        <div v-else class="card-img">
          <video autoplay loop muted class="card-video" v-lazy-load>
            <source :src="project.image"
                    type="video/mp4">

          </video>
          <div class="technologie-shape"/>
          <div class="technologie">{{ project.technologie }}</div>
          <div class="layer">
            <a :href="project.link" :aria-label="`link to ${project.link}`" target="_blank" rel="noopener noreferrer">
              <v-icon class="link-icon" large>fas fa-link</v-icon>
            </a>
          </div>
        </div>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: "Portfolio",
  props: {
    name: {
      type: String,
      default: 'PORTFOLIO'
    },
    projects: {
      type: Array,
      default: () => [{
        image: "/images/portfolio/zayousa.png",
        link: 'https://zayousa.com',
        technologie: 'WORDPRESS',
        isVideo: false
      }]
    }
  }
}
</script>

<style scoped lang="scss">
.portfolio {
  padding: 80px;
  display: -webkit-flex;
  display: flex;
  flex-direction: column;
  -webkit-justify-content: center;
  justify-content: center;
  letter-spacing: 1px;
  font-size: 16px;
  background-color: #FCE77D;
  color: rgba(232, 232, 232, 1);

  h2 {
    font-family: 'Abril Fatface', cursive;
    color: #1D1B1B;
    text-align: center;
    font-size: 30px;
  }

  .row {
    margin-top: 48px;
    margin-bottom: 48px;
  }
}

.card-img {
  position: relative;
  background-image: url('/images/portfolio-bg.png');
  background-size: cover;
  background-repeat: no-repeat;
  display: inline-block;
  padding: 20px;
  margin-bottom: 20px;
  height: 300px;
  width: 100%;
}
.card-video {
  position: relative;
  display: inline-block;
  margin-bottom: 20px;
  height: 100%;
  max-width: 100%;
}


.layer {
  position: absolute;
  height: 100%;
  width: 100%;
  left: 0;
  top: 0;
  background-color: transparent;
  text-align: center;
  align-items: center;
  display: grid;
  a {
    .link-icon {
      display: none;
      color: #1D1B1B !important;
      vertical-align: middle;
      border: 8px solid #1D1B1B;
      padding: 6px;
      border-radius: 50%;
      margin: auto;
    }
  }
  &:hover {
    background-color: #F7F7F988;
    .link-icon {
      display: inline-block;
    }
  }
}

.technologie {
  position: absolute;
  top: 0;
  right: 0;
  z-index: 2;
  padding: 10px;
  font-size: 19px;
  font-weight: 900;
  background-color: transparent;
}
.technologie-shape {
  position: absolute;
  top: 0;
  right: 0;
  z-index: 1;
  width: 0;
  height: 0;
  border-left: 200px solid transparent;
  border-right: 0 solid transparent;
  border-top: 100px solid #F96167;
}
</style>
