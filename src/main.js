import Vue from 'vue/dist/vue.js'
import VueRouter from 'vue-router'

import Example from './views/Example.vue'
import DesignList from './views/DesignList.vue'
import DesignEdit from './views/DesignEdit.vue'

const routes = [
  { path: '/', component: Example },
  { path: '/dashboard', component: DesignList },
  { path: '/dashboard/new', component: DesignEdit },
  { path: '/dashboard/edit/:designId', component: DesignEdit },
]

const router = VueRouter.createRouter({
  mode: 'history',
  history: VueRouter.createWebHashHistory(), // <-- this is a new property and it is mandatory!
  routes
})

// 5. Create and mount the root instance.
const app = Vue.createApp({})
// Make sure to _use_ the router instance to make the
// whole app router-aware.
app.use(router)

app.mount('#app')

export default app;
