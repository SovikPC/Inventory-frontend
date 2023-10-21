<script>
import DataService from '@/services/DataService'
// import bcrypt from 'bcrypt'

export default {
  name: 'add-user',
  data () {
    return {
      user: {
        id: null,
        last_name: '',
        first_name: '',
        father_name: '',
        login: '',
        password: ''
      },
      role_name: 'User',
      submitted: false,
      roles_data: [],
      role: null
    }
  },
  methods: {
    getAllRoles () {
      DataService.getAllRoles()
        .then(response => {
          this.roles_data = response.data
        })
        .catch(e => {
          alert(e)
        })
    },
    getRole (name) {
      DataService.getRoles(name)
        .then(response => {
          this.role = response.data
        })
        .catch(e => {
          alert(e)
        })
    },
    createUser () {
      const data = {
        last_name: this.user.last_name,
        first_name: this.user.first_name,
        father_name: this.user.father_name,
        login: this.user.login,
        password: this.user.password,
        roles: this.role
      }
      DataService.createUser(data)
        .then(response => {
          this.user.id = response.data.id
          this.submitted = true
        })
        .catch(e => {
          alert(e)
        })
    },
    newUser () {
      this.submitted = false
      this.user = {}
    }
  },
  created () {
    this.getAllRoles()
  }
}
</script>

<template>
  <div>
    <div v-if="!submitted">
      <div class="mb-3">
        <label for="lastName" class="form-label">Last Name</label>
        <input type="text" class="form-control" id="lastName" required name="lastName" v-model="user.last_name">
      </div>
      <div class="mb-3">
        <label for="firstName" class="form-label">First Name</label>
        <input type="text" class="form-control" id="firstName" required name="firstName" v-model="user.first_name">
      </div>
      <div class="mb-3">
        <label for="email" class="form-label">Father name</label>
        <input type="text" class="form-control" id="email" required name="email" v-model="user.father_name">
      </div>
      <div class="mb-3">
        <label for="login" class="form-label">Login</label>
        <input type="text" class="form-control" id="login" required name="login" v-model="user.login">
      </div>
      <div class="mb-3">
        <label for="password" class="form-label">Password</label>
        <input type="password" class="form-control" id="password" required name="password" v-model="user.password">
      </div>
      <div class="mb-3">
        <label for="role_name" class="form-label">Role</label>
        <select v-model="role_name" id="role_name" required name="role_name" class="form-control" @click="getRole(this.role_name)">
          <option v-for="role_data in roles_data" v-bind:key="role_data.id">{{role_data.name}}</option>
        </select>
      </div>
      <div class="mb-3">
        <input type="button" @click="createUser" class="btn btn-primary" value="Submit"/>
      </div>
    </div>
    <div v-else>
      <div class="alert alert-success" role="alert">
        Save user successfully!
      </div>
      <input type="button" @click="newUser" class="btn btn-primary" value="Add New Customer"/>
    </div>
  </div>
</template>

<style scoped>

</style>
