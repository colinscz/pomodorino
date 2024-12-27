import { createMemoryHistory, createRouter } from 'vue-router'
import AboutView from '../views/AboutView.vue'
import TimerView from '../views/TimerView.vue'

const routes = [
  { path: '/', component: TimerView },
  { path: '/about', component: AboutView },
]

const router = createRouter({
  history: createMemoryHistory(),
  routes,
})

export default router
