<script>
import DataService from '@/services/DataService'

export default {
  name: 'users-data',
  data () {
    return {
      num: 1,
      users: []
    }
  },
  methods: {
    getAllUser () {
      DataService.getAllUser().then((response) => {
        this.users = response.data
      })
    }
  },
  created () {
    this.getAllUser()
  }
}
</script>

<template>
<router-link to="/users/add">AddUser</router-link>
<table class="table table-striped">
  <thead>
  <tr>
    <th>№</th>
    <th>User login</th>
    <th>User last name</th>
    <th>User first name</th>
    <th>User father name</th>
    <th>User role</th>
  </tr>
  </thead>
  <tbody>
  <tr v-for="user in users" v-bind:key="user.id">
    <td>{{num++}}</td>
    <td><a :href="'/user/'+user.id">{{user.login}}</a></td>
    <td>{{user.last_name}}</td>
    <td>{{user.first_name}}</td>
    <td>{{user.father_name}}</td>
    <td>{{user.roles.name}}</td>
  </tr>
  </tbody>
</table>
</template>

<style scoped>

</style>
