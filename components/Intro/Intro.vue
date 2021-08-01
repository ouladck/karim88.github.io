<template>
    <div class="intro" :style="{backgroundImage: `url(${backgroundImg}) !important;`}">
        <img class="logo" :src="logo" alt="Logo"/>
        <div class="overlayer">
            <div class="k-intro">
                <h1 class="wow flipInX">{{ name }}</h1>
                <p class="text-muted wow flash">{{ position }}</p>
            </div>
            <img :src="introLayer" class="svg8" alt="logo" />
            <div class="row k-social">
                <div class="col-xs">
                    <a href="https://github.com/karim88" rel="noopener noreferrer" target="_blank">
                        <v-icon class="text-github" large>fab fa-github</v-icon>
                    </a>
                </div>
                <div class="col-xs">
                    <a href="https://linkedin.com/in/karim88" aria-label="" rel="noopener noreferrer" target="_blank">
                        <v-icon class="text-linkedin" large>fab fa-linkedin</v-icon>
                    </a>
                </div>
                <div class="col-xs">
                    <a href="https://fb.com/herr.linux88" rel="noopener noreferrer" target="_blank">
                        <v-icon class="text-facebook" large>fab fa-facebook</v-icon>
                    </a>
                </div>
                <div class="col-xs">
                    <a href="https://cv.karimslab.com/pdf/karim_oulad_chalha_en_6.pdf" rel="noopener noreferrer" target="_blank">
                        <v-icon class="text-danger" large>fas fa-file-pdf</v-icon>
                    </a>
                </div>
            </div>

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
    }
    .logo {
        position: absolute;
        z-index: 2;
        top: 10px;
        left: 10px;
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
    color: #F7F7F9 !important;
}



@media only screen and (max-width: 600px) {
    .intro{
        .k-intro {
            padding-left: 47px;
            font-size: 8px;
        }
        .svg8 {
            width: 100%;
        }
        .k-social {
            padding-right: 30px;
            padding-bottom: 40%;
        }
        .k-social a {
            padding-left: 10px;
        }
        .fa-3x {
            font-size: 2em;
            padding-right: 0;
        }
    }
}


@media only screen and (max-width: 360px) {
    .intro {
        .k-intro {
          padding-left: 37px;
          font-size: 8px;
          top: 20%;
        }
        .k-intro h1 {
            font-size: 3rem;
        }
        .svg8 {
            width: 100%;
        }
        .k-social {
            padding-right: 30px;
            padding-bottom: 40%;
            a {
                padding-left: 10px;
            }
        }
        .fa-3x {
            font-size: 2em;
            padding-right: 0;
        }
    }
}
</style>
