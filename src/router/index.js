import { createRouter, createWebHistory } from 'vue-router'
import EquipmentView from '@/views/equipment/EquipmentListView.vue'

const routes = [
  {
    path: '/',
    name: 'equipment',
    component: EquipmentView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
