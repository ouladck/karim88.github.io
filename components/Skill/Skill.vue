<template>
  <div class="skills">
    <div class="container">
      <h2 class="text-center">{{ name }}</h2>
      <div class="row">
        <div v-for="(skill, index) of skills" :key="index" :class="`col-md-${(12 / Number(skills.length))} wow slideInRight`">
          <i :class="skill.icon"></i>
          <h3>{{ skill.name }}</h3>
            <p v-for="(tech, i) of skill.skills" :key="i">{{ tech.name }} <span v-if="tech.advanced" class="badge badge-primary">advanced</span></p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>


export default {
  name: "Skill",
  props: {
    name: {
      type: String,
      default: 'SKILLS & KNOWLEDGE'
    },
    skills: {
      type: Array,
      default: () => []
    }
  }
}
</script>

<style scoped lang="scss">
.skills {
  padding: 80px;
  display: -webkit-flex;
  display: flex;
  flex-direction: column;
  -webkit-justify-content: center;
  justify-content: center;
  letter-spacing: 1px;
  font-size: 16px;
  color: #F7F7F9;
  background-color: #1D1B1B;
  .container {
    h2 {
      font-family: 'Abril Fatface', cursive;
      padding-bottom: 40px;
      color: #FCE77D;
      text-align: center;
      font-size: 30px;
    }
    h3 {
      font-family: 'Abril Fatface', cursive;
      padding-bottom: 15px;
      color: #FCE77D;
      font-size: 1.5rem;
    }
  }
  .p {
    margin-bottom: 0 !important;
  }
  .col-md-4 {
    text-align: left;
  }

  .fab, .skills .fas {
    color: #1D1B1B !important;
    padding-bottom: 25px;
  }
  .badge-primary {
    background-color: #F96167 !important;
    text-transform: uppercase;
  }
}
</style>
