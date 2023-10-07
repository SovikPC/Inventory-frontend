<script>
import DataService from '@/services/DataService'

export default {
  name: 'equipments-data',
  data () {
    return {
      num: 1,
      equipments: []
    }
  },
  methods: {
    getAllEqupiment () {
      DataService.getAllEquipment().then((response) => {
        this.equipments = response.data
      })
    }
  },
  created () {
    this.getAllEqupiment()
  }
}
</script>

<template>
<table class="table table-striped">
  <thead>
  <tr>
    <th>№</th>
    <th>Equipment name</th>
    <th>Equipment manufacturies</th>
    <th>Equipment model</th>
    <th>Equipment description</th>
    <th>Equipment responsible</th>
    <th>Equipment inventory</th>
    <th>Equipment serial</th>
    <th>Equipment position</th>
    <th>Equipment comments</th>
    <th>Equipment price</th>
    <th>Equipment state</th>
  </tr>
  </thead>
  <tbody>
  <tr v-for="equipment in equipments" v-bind:key="equipment.id">
    <td>{{num++}}</td>
    <td>{{equipment.name}}</td>
    <td>{{equipment.model.manufacturies.name}}</td>
    <td>{{equipment.model.name}}</td>
    <td>{{equipment.description}}</td>
    <td>{{equipment.responsible.fio}}</td>
    <td>{{equipment.inventory}}</td>
    <td>{{equipment.serial}}</td>
    <td>{{equipment.position.name}}</td>
    <td>{{equipment.comments}}</td>
    <td>{{equipment.price}}</td>
    <td>{{equipment.state.name}}</td>
  </tr>
  </tbody>
</table>
</template>

<style scoped>

</style>
