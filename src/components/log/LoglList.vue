<script>
import DataService from '@/services/DataService'

export default {
  name: 'logs-data',
  data () {
    return {
      num: 1,
      logs: []
    }
  },
  methods: {
    getAllLog () {
      DataService.getAllLog().then((response) => {
        this.logs = response.data
      })
    }
  },
  created () {
    this.getAllLog()
  }
}
</script>

<template>
  <table class="table table-striped">
    <thead>
    <tr>
      <th>№</th>
      <th>User</th>
      <th>Operation</th>
      <th>Equipment</th>
    </tr>
    </thead>
    <tbody>
    <tr v-for="log in logs" v-bind:key="log.id">
      <td>{{num++}}</td>
      <td>{{log.user.login}}</td>
      <td>{{log.operation.name}}</td>
      <td>{{log.equipment.name}}</td>
    </tr>
    </tbody>
  </table>
</template>

<style scoped>

</style>
