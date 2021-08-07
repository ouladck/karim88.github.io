import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _29e75a62 = () => interopDefault(import('../pages/cosumar.vue' /* webpackChunkName: "pages/cosumar" */))
const _117ca34e = () => interopDefault(import('../pages/index.stories.js' /* webpackChunkName: "pages/index.stories" */))
const _9529144e = () => interopDefault(import('../pages/inspire.vue' /* webpackChunkName: "pages/inspire" */))
const _2ef09d91 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/cosumar",
    component: _29e75a62,
    name: "cosumar"
  }, {
    path: "/index.stories",
    component: _117ca34e,
    name: "index.stories"
  }, {
    path: "/inspire",
    component: _9529144e,
    name: "inspire"
  }, {
    path: "/",
    component: _2ef09d91,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
