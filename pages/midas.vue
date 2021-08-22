<template>
  <div class="midas">
    <div class="grid">
      <div class="col">
        <h2>Components</h2>
        <ul>
          <template v-for="(component, i) of getComponents">
            <li v-if="component.name !== 'VueComponent'" :key="i">
              <a href="javascript:void(0)" @click="currentComponent(component)">{{ component.name }}</a>
            </li>
          </template>
        </ul>
      </div>
      <div class="col">
        <div class="tab">
          <button class="tablinks" @click="showedTab = 'props'">Props</button>
          <button class="tablinks" @click="showedTab ='components'">Render Component</button>
        </div>

        <div v-if="showedTab === 'props'" class="tabcontent">
          <template class="mx-auto" v-if="getCurrent">
            <h2>Props of {{ getCurrent.name }}</h2>
            <table>
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
                <td>
                  <input v-if="['Number', 'String'].includes(prop.type.name)" v-model="prop.default" :type="prop.type.name === 'Number' ? `number` : `text`">
                  <textarea v-if="['Array', 'Object'].includes(prop.type.name)" v-model="prop.default"></textarea>
                  <template v-if="prop.type.name === 'Boolean'">
                    <input type="radio" id="yes" value="1" v-model="prop.default">
                    <label for="yes">Yes</label>
                    <br>
                    <input type="radio" id="no" value="0" v-model="prop.default">
                    <label for="no">No</label>
                  </template>
                </td>
                <td>{{ prop.type.name }}</td>
              </tr>
              </tbody>
            </table>

          </template>
        </div>
        <div v-if="showedTab === 'components'" class="tabcontent">
          <template v-if="getCurrent">
            <div class="component">
              <component :is="getCurrent.name" v-bind="getComponentProps"></component>
            </div>
          </template>
        </div>
      </div>
    </div>
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
    current: null,
    showedTab: 'props'
  }),
  computed: {
    getComponents () {
      return this.$options.components
    },
    getProps () {
      return Object.entries(this.current.props)
    },
    getComponentProps () {
      const props = {}
      for (const [name, prop] of this.getProps) {
        props[name] = this.getValue(prop)
      }
      return props
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
    },
    getValue (prop) {
      if (['Array', 'Object'].includes(prop.type.name) && typeof prop.default === 'function') {
        return []
      } else if (['Array', 'Object'].includes(prop.type.name) && typeof prop.default !== 'function') {
        try {
          // eslint-disable-next-line no-eval
          return eval(prop.default)
        } catch (e) {
          return []
        }
      } else if (prop.type.name === 'Object' && typeof prop.default === 'function') {
        return {}
      }
      return prop.default
    },
  }
}
</script>

<style lang="scss" scoped>
  .midas {
    background-color: #F7F7F9;
    padding: 20px;
    height: 100vh;
    .grid {
      display: grid;
      grid-template-columns: 1fr 11fr;
      grid-template-rows: 4fr 1fr;
      grid-column-gap: 20px;
      grid-row-gap: 20px;
      justify-items: stretch;
      align-items: stretch;
      .col {
        ul {
          list-style: none;
          padding: 20px;
          border: 2px #555 solid;
          border-radius: 5px;
          width: fit-content;
          li {
            padding-bottom: 20px;
            a {
              text-decoration: none;
            }
          }
        }
        table {
          width: 100%;
          border: 2px #555 solid;
          border-collapse: collapse;
          border-radius: 5px;
          thead {
            border-radius: 5px;
            tr {
              background-color: #FCE77D;
              th {
                text-align: start;
                padding: 20px;
              }
            }
          }
          tbody {
            tr {
              border: 2px #555 solid;
              td {
                padding: 20px;
                border: 2px #555 solid;
                textarea {
                  width: 100%;
                  height: 150px;
                  padding: 5px;
                  border: 2px solid #1D1B1B;
                }
                input {
                  width: 100%;
                  padding: 5px;
                  border: 2px solid #1D1B1B;
                }
              }
            }
          }
        }
      }
    }
    .v-list-item__content {
      padding-left: 10px;
    }
    .component {
      margin: 50px 0;
      z-index: 4;
      max-height: 50%;
      padding: 11px 0;
    }
    /* Style the tab */
    .tab {
      overflow: hidden;
      border: 1px solid #ccc;
      background-color: #f1f1f1;
    }

    /* Style the buttons that are used to open the tab content */
    .tab button {
      background-color: inherit;
      float: left;
      border: none;
      outline: none;
      cursor: pointer;
      padding: 14px 16px;
      transition: 0.3s;
    }

    /* Change background color of buttons on hover */
    .tab button:hover {
      background-color: #ddd;
    }

    /* Create an active/current tablink class */
    .tab button.active {
      background-color: #ccc;
    }

    /* Style the tab content */
    .tabcontent {
      padding: 6px 12px;
      border: 1px solid #ccc;
      border-top: none;
    }
  }
</style>
