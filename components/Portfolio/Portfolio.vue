<template>
  <div class="portfolio">
    <h2>{{ name }}</h2>
    <div class="row">
      <div v-for="(project, key) of projects" :key="key" class="col-md-3 col-lg-4">
        <div class="card-img" :style="{
             backgroundImage: `url(${project.image})`,
             backgroundPosition: 'center'
        }">
        <div class="technologie-shape"/>
        <div class="technologie wow zoomIn">{{ project.technologie }}</div>
        <div class="layer">
          <a :href="project.link" :aria-label="`link to ${project.link}`" target="_blank" rel="noopener noreferrer">
            <v-icon class="link-icon" large>fas fa-link</v-icon>
          </a>
        </div>
      </div>
    </div>
    </div>
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
      default: () => []
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
  }

  .row {
    margin-top: 48px;
    margin-bottom: 48px;
  }
}

.card-img {
  position: relative;
  background-image: url('https://picsum.photos/500/400?random');
  background-size: cover;
  background-repeat: no-repeat;
  display: inline-block;
  padding: 20px;
  margin-bottom: 20px;
  height: 300px;
}



.layer {
  position: absolute;
  height: 100%;
  width: 100%;
  left: 0;
  top: 0;
  background-color: transparent;
  a {
    .link-icon {
      display: none;
      color: #1D1B1B !important;
      vertical-align: middle;
      border: 8px solid #1D1B1B;
      padding: 6px;
      border-radius: 50%;
      margin-top: 25%;
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
