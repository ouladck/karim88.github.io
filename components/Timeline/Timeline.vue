<template>
  <div class="timeline-container">
    <h2 class="text-center">{{ name }}</h2>

    <section class="cd-timeline js-cd-timeline">
      <div class="cd-timeline__container">
        <div v-for="(experience, index) of timeline" :key="index" class="cd-timeline__block js-cd-block">
          <div class="cd-timeline__img cd-timeline__img--picture js-cd-img">
            <i :class="experience.icon"></i>
          </div>

          <div :class="(experience.id % 2 === 0) ?
          'cd-timeline__content js-cd-content  wow slideInRight'
          : 'cd-timeline__content js-cd-content  wow slideInLeft'
          ">
            <h3 class="position">
              {{ experience.position }}
            </h3>
            <h4 class="company">
              {{ experience.company }}
            </h4>
            <p>{{ experience.description }}</p>
            <span class="cd-timeline__date">{{ experience.time }}</span>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>

export default {
  name: "Timeline",
  props: {
    name: {
      type: String,
      default: 'EXPERIENCE & EDUCATION'
    },
    timeline: {
      type: Array,
      default: () => []
    }
  }
}
</script>

<style scoped lang="scss">
.timeline-container {
  padding: 80px;
  display: -webkit-flex;
  display: flex;
  flex-direction: column;
  -webkit-justify-content: center;
  justify-content: center;
  letter-spacing: 1px;
  font-size: 16px;
  background-color: #FCE77D;
  color: #1D1B1B;
  a {
    color: #FCE77D;
  }
  h2 {
    font-family: 'Abril Fatface', cursive;
  }
  h3 {
    font-family: 'Abril Fatface', cursive;
    padding-bottom: 10px;
    color: #1D1B1B;
    font-weight: 400;
  }
  p {
    font-size: 1rem;
    color: #F7F7F9;
  }
}

@media only screen and (max-width: 600px) {
  .timeline-container .cd-timeline__img i {
    font-size: 1.2em;
    padding: 9px;
  }

  .timeline-container {
    padding-left: 14px;
    padding-right: 14px;
  }

  .timeline-container h2 {
    font-size: 28px;
  }

  .timeline-container h3 {
    font-size: 20px;
  }

  .timeline-container .company {
    font-size: 14px;
  }

  /* .timeline-container p {
      display: none;
      font-size: 17px;
  } */

  .timeline-container .cd-timeline__date {
    color: #F7F7F9 !important;
    font-size: 16px;
  }
}

/* --------------------------------
Primary style
-------------------------------- */

*, *::after, *::before {
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}

/* --------------------------------

Patterns - reusable parts of our design

-------------------------------- */
@media only screen and (min-width: 1170px) {
  .cd-is-hidden {
    visibility: hidden;
  }
}

/* --------------------------------

Vertical Timeline - by CodyHouse.co

-------------------------------- */
@media only screen and (min-width: 1170px) {
  .timeline-container header {
    height: 300px;
    line-height: 300px;
  }

  .timeline-container header h1 {
    font-size: 2.4rem;
  }
}

.cd-timeline {
  overflow: hidden;
  margin: 2em auto;
}

.cd-timeline__container {
  position: relative;
  width: 90%;
  max-width: 1170px;
  margin: 0 auto;
  padding: 2em 0;
}

.cd-timeline__container::before {
  /* this is the vertical line */
  content: '';
  position: absolute;
  top: 0;
  left: 18px;
  height: 100%;
  width: 4px;
  background: #d7e4ed;
}

@media only screen and (min-width: 1170px) {
  .cd-timeline {
    margin-top: 3em;
    margin-bottom: 3em;
  }

  .cd-timeline__container::before {
    left: 50%;
    margin-left: -2px;
  }
}

.cd-timeline__block {
  position: relative;
  margin: 2em 0;
  text-align: left;
}

.cd-timeline__block::after {
  /* clearfix */
  content: "";
  display: table;
  clear: both;
}

.cd-timeline__block:first-child {
  margin-top: 0;
}

.cd-timeline__block:last-child {
  margin-bottom: 0;
}

@media only screen and (min-width: 1170px) {
  .cd-timeline__block {
    margin: 4em 0;
  }
}

.cd-timeline__img {
  position: absolute;
  top: 0;
  left: 0;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  -webkit-box-shadow: 0 0 0 4px white, inset 0 2px 0 rgba(0, 0, 0, 0.08), 0 3px 0 4px rgba(0, 0, 0, 0.05);
  box-shadow: 0 0 0 4px white, inset 0 2px 0 rgba(0, 0, 0, 0.08), 0 3px 0 4px rgba(0, 0, 0, 0.05);
}

.cd-timeline__img img {
  display: block;
  width: 24px;
  height: 24px;
  position: relative;
  left: 50%;
  top: 50%;
  margin-left: -12px;
  margin-top: -12px;
}

.cd-timeline__img.cd-timeline__img--picture {
  background-color: rgba(232, 232, 232, 1);
;
}

@media only screen and (min-width: 1170px) {
  .cd-timeline__img {
    width: 60px;
    height: 60px;
    left: 50%;
    margin-left: -30px;

    /* Force Hardware Acceleration */
    -webkit-transform: translateZ(0);
    transform: translateZ(0);
  }

  .cd-timeline__img.cd-timeline__img--bounce-in {
    visibility: visible;
    -webkit-animation: cd-bounce-1 0.6s;
    animation: cd-bounce-1 0.6s;
  }
}

.cd-timeline__content {
  position: relative;
  margin-left: 60px;
  background-color: #1D1B1B;
  color: #F96167;
  border-radius: 0.25em;
  padding: 1em;
  -webkit-box-shadow: 0 3px 0 #d7e4ed;
  box-shadow: 0 3px 0 #d7e4ed;
}

.cd-timeline__content::after {
  /* clearfix */
  content: "";
  display: table;
  clear: both;
}

.cd-timeline__content::before {
  /* triangle next to content block */
  content: '';
  position: absolute;
  top: 16px;
  right: 100%;
  height: 0;
  width: 0;
  border: 7px solid transparent;
  border-right: 7px solid #1D1B1B;
}

.cd-timeline__content h3 {
  color: #FCE77D;
}

.cd-timeline__img i {
  color: #F96167 !important;
  padding: 14px;
}

.cd-timeline__date {
  font-size: 1.3rem;
  color: #1D1B1B;
  display: inline-block;
  float: left;
  padding: .8em 0;
  opacity: .7;
}

.cd-timeline__content p {
  margin: 1em 0;
  line-height: 1.6;
}

@media only screen and (min-width: 768px) {
  .cd-timeline__content h3 {
    font-size: 2rem;
  }

  .cd-timeline__content p {
    font-size: 1rem;
  }

  .cd-timeline__date {
    font-size: 1.4rem;
  }
}

@media only screen and (min-width: 1170px) {
  .cd-timeline__content {
    margin-left: 0;
    padding: 1.6em;
    width: 45%;

    /* Force Hardware Acceleration */
    -webkit-transform: translateZ(0);
    transform: translateZ(0);
  }

  .cd-timeline__content::before {
    top: 24px;
    left: 100%;
    border-color: transparent;
    border-left-color: #1D1B1B;
  }

  .cd-timeline__date {
    position: absolute;
    width: 100%;
    left: 122%;
    top: 6px;
    font-size: 1.6rem;
  }

  .cd-timeline__block:nth-child(even) .cd-timeline__content {
    float: right;
  }

  .cd-timeline__block:nth-child(even) .cd-timeline__content::before {
    top: 24px;
    left: auto;
    right: 100%;
    border-color: transparent;
    border-right-color: #1D1B1B;
  }

  .cd-timeline__block:nth-child(even) .cd-timeline__date {
    left: auto;
    right: 122%;
    text-align: right;
  }

  .cd-timeline__content.cd-timeline__content--bounce-in {
    visibility: visible;
    -webkit-animation: cd-bounce-2 0.6s;
    animation: cd-bounce-2 0.6s;
  }
}

@media only screen and (min-width: 1170px) {
  /* inverse bounce effect on even content blocks */
  .cd-timeline__block:nth-child(even) .cd-timeline__content.cd-timeline__content--bounce-in {
    -webkit-animation: cd-bounce-2-inverse 0.6s;
    animation: cd-bounce-2-inverse 0.6s;
  }
}

</style>
