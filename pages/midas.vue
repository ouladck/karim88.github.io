<template>
  <div class="midas">
    <v-row>
      <v-col md="3" sm="3" lg="3">
          <v-navigation-drawer absolute src="https://cdn.vuetifyjs.com/images/backgrounds/bg-2.jpg" width="20%" permanent>
            <v-list>
              <template v-for="(component, i) of getComponents">
                <v-list-item v-if="component.name !== 'VueComponent'" :key="i" link ripple @click="currentComponent(component)">
                  <v-list-item-icon>
                    <v-icon>{{ icon }}</v-icon>
                  </v-list-item-icon>

                  <v-list-item-content>
                    <v-list-item-title>{{ component.name }}</v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
              </template>
            </v-list>
          </v-navigation-drawer>
      </v-col>
      <v-col md="9" sm="9" lg="9">
        <template class="mx-auto" max-width="400" tile v-if="getCurrent">
          <h2>Props of {{ getCurrent.name }}</h2>
          <v-simple-table>
            <template v-slot:default>
              <thead>
              <tr>
                <th class="text-left">
                  Prop
                </th>
                <th class="text-left">
                  Default
                </th>
                <th class="text-left">
                  Type
                </th>
              </tr>
              </thead>
              <tbody>
              <tr v-for="([name, prop], index) of getProps" :key="index">
                <td>{{ name }}</td>
                <td>{{ prop.default }}</td>
                <td>{{ prop.type.name }}</td>
              </tr>
              </tbody>
            </template>
          </v-simple-table>

        </template>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import Intro from "~/components/Intro/Intro";
import WhoAmI from "~/components/WhoAmI/WhoAmI";
import Timeline from "~/components/Timeline/Timeline";
import Skill from "~/components/Skill/Skill";
import Portfolio from "~/components/Portfolio/Portfolio";
import Footer from "~/components/Footer/Footer";

export default {
  name: "midas",
  components: {
    // eslint-disable-next-line vue/no-unused-components
    Intro,
    // eslint-disable-next-line vue/no-unused-components
    WhoAmI,
    // eslint-disable-next-line vue/no-unused-components
    Timeline,
    // eslint-disable-next-line vue/no-unused-components
    Skill,
    // eslint-disable-next-line vue/no-unused-components
    Portfolio,
    // eslint-disable-next-line vue/no-unused-components
    Footer
  },
  data: () => ({
    icon: 'fas fa-columns',
    current: null
  }),
  computed: {
    getComponents () {
      return this.$options.components
    },
    getProps () {
      return Object.entries(this.current.props)
    },
    getCurrent () {
      return this.current
    }
  },
  mounted() {
    console.log(this.$options.components)
  },
  methods: {
    currentComponent (component) {
      this.current = component
      console.log(this.current)
    }
  }
}
</script>

<style lang="scss" scoped>
  .midas {
    padding: 20px;
    height: 100vh;
    .v-list-item__content {
      padding-left: 10px;
    }
  }
</style>
