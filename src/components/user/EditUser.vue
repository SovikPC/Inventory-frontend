<script>
import DataService from '@/services/DataService'

export default {
  name: 'edit-user',
  data () {
    return {
      currentUser: null,
      message: '',
      roles_data: []
    }
  },
  methods: {
    getAllRole () {
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
          this.currentUser.roles = response.data
        })
    },
    getUser (id) {
      DataService.getUser(id)
        .then(response => {
          this.currentUser = response.data
        })
        .catch(e => {
          alert(e)
        })
    },
    updateUser () {
      DataService.updateUser(this.currentUser.id, this.currentUser)
        .then(() => {
          this.message = 'The user was updated successfully!'
        })
        .catch(e => {
          alert(e)
        })
    },
    deleteUser () {
      DataService.deleteUser(this.currentUser.id)
        .then(() => {
          this.$router.push({ name: 'users' })
        })
        .catch(e => {
          alert(e)
        })
    },
    warning () {
      const check = confirm('Вы уверены что хотите удалить пользователя?')
      if (check === true) {
        this.deleteUser()
      }
    }
  },
  mounted () {
    this.getUser(this.$route.params.id)
  },
  created () {
    this.getAllRole()
  }
}
</script>

<template>
  <div v-if="currentUser">
    <div class="mb-3">
      <label for="last_name" class="form-label">Last Name</label>
      <input type="text" class="form-control" id="last_name" required name="last_name" v-model="currentUser.last_name">
    </div>
    <div class="mb-3">
      <label for="first_name" class="form-label">First Name</label>
      <input type="text" class="form-control" id="first_name" required name="first_name" v-model="currentUser.first_name">
    </div>
    <div class="mb-3">
      <label for="father_name" class="form-label">Father name</label>
      <input type="text" class="form-control" id="father_name" required name="father_name" v-model="currentUser.father_name">
    </div>
    <div class="mb-3">
      <label for="login" class="form-label">Login</label>
      <input type="text" class="form-control" id="login" required name="login" v-model="currentUser.login">
    </div>
    <div class="mb-3">
      <label for="password" class="form-label">Password</label>
      <input type="password" class="form-control" id="password" required name="password" v-model="currentUser.password">
    </div>
    <div class="mb-3">
      <label for="role_name" class="form-label">Id roles</label>
      <select v-model="currentUser.roles.name" id="role_name" required name="role_name" class="form-control" @click="getRole(this.currentUser.roles.name)">
        <option v-for="role_data in roles_data" v-bind:key="role_data.id">{{role_data.name}}</option>
      </select>
    </div>
    <div class="mb-3">
      <input type="button" @click="updateUser" class="btn btn-primary me-3" value="Update"/>
      <input type="button" @click="warning" class="btn btn-danger" value="Delete"/>
    </div>
    <div class="alert alert-success" role="alert" v-if="message">
      {{message}}
    </div>
  </div>
</template>

<style scoped>

</style>
