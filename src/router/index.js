import { createRouter, createWebHistory} from 'vue-router'
import Listas from '../components/Listas.vue'
import Tareas from '../components/Tareas.vue'
const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path:'/lista/:id',
      component:Tareas
    }
  ]
})

export default router