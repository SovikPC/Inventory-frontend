import { createRouter, createWebHistory } from 'vue-router'
import EquipmentListView from '@/views/equipment/EquipmentListView.vue'
import UserListView from '@/views/user/UserListView.vue'
import AddUserView from '@/views/user/AddUserView.vue'
import EditUserView from '@/views/user/EditUserView.vue'
import EditEquipmentView from '@/views/equipment/EditEquipmentView.vue'
import AddEquipmentView from '@/views/equipment/AddEquipmentView.vue'
import LogListView from '@/views/log/LogListView.vue'

const routes = [
  {
    path: '/',
    name: 'equipment',
    component: EquipmentListView
  },
  {
    path: '/equipment/:id',
    name: 'edit-equipment',
    component: EditEquipmentView
  },
  {
    path: '/equipment/add',
    name: 'add-equipment',
    component: AddEquipmentView
  },
  {
    path: '/users',
    name: 'users',
    component: UserListView
  },
  {
    path: '/users/add',
    name: 'add-users',
    component: AddUserView
  },
  {
    path: '/user/:id',
    name: 'edit-user',
    component: EditUserView
  },
  {
    path: '/log',
    name: 'log-list',
    component: LogListView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
