import { createRouter, createWebHistory } from 'vue-router'
import EquipmentListView from '@/views/equipment/EquipmentListView.vue'
import UserListView from '@/views/user/UserListView.vue'

const routes = [
  {
    path: '/',
    name: 'equipment',
    component: EquipmentListView
  },
  {
    path: '/users',
    name: 'users',
    component: UserListView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
