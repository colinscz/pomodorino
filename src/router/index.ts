import {createMemoryHistory, createRouter} from 'vue-router'
import TimerView from '../views/TimerView.vue'
import AboutView from '../views/AboutView.vue'

const routes = [
    {path: '/timer', component: TimerView},
    {path: '/about', component: AboutView},
]

const router = createRouter({
    history: createMemoryHistory(),
    routes,
})

export default router
