<template>
  <div class="who" :style="{backgroundImage: `url(${backgroundImg}) !important;`}">
    <div class="row">
      <div class="col-md-4 who-img">

      </div>
      <div class="col-md who-text">
        <p class="wow slideInRight">
          <span class="text-primary">Name: </span>
          {this.props.name}
        </p>
        <p class="wow slideInRight">
          <span class="text-primary">Email: </span>
          {this.props.email}
        </p>
        <p class="wow slideInRight">
          <span class="text-primary">Mobile: </span>
          {this.props.tel}
        </p>
        <p class="wow slideInRight">
          <span class="text-primary">Address: </span>
          {this.props.address}
        </p>
        <hr />
        <p class="text-muted wow slideInRight">
          {this.props.description}
        </p>
      </div>
    </div>
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
  padding: 80px;
  display: -webkit-flex;
  display: flex;
  text-align: left;
  flex-direction: column;
  -webkit-justify-content: center;
  justify-content: center;
  letter-spacing: 3px;
  font-size: 16px;
  font-weight: normal;
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
}
</style>
