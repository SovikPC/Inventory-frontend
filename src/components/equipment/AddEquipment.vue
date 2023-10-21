<script>
import DataService from '@/services/DataService'

export default {
  name: 'add-equipment',
  data () {
    return {
      equipment: {
        id: null,
        name: '',
        model_name: 'Vivobook',
        description: '',
        responsible_fio: 'Гуров В.С.',
        inventory: null,
        serial: '',
        positions_name: '104',
        comments: '',
        price: null,
        state_name: 'На списании'
      },
      submitted: false,
      models_data: [],
      responsible_data: [],
      positions_data: [],
      states_data: [],
      model: null,
      responsible: null,
      position: null,
      state: null
    }
  },
  methods: {
    getAllModel () {
      DataService.getAllModel()
        .then(response => {
          this.models_data = response.data
        })
        .catch(e => {
          alert(e)
        })
    },
    getModel (name) {
      DataService.getModel(name)
        .then(response => {
          this.model = response.data
        })
        .catch(e => {
          alert(e)
        })
    },
    getAllResponsible () {
      DataService.getAllResponsible()
        .then(response => {
          this.responsible_data = response.data
        })
        .catch(e => {
          alert(e)
        })
    },
    getResponsible (fio) {
      DataService.getResponsible(fio)
        .then(response => {
          this.responsible = response.data
        })
        .catch(e => {
          alert(e)
        })
    },
    getAllPosition () {
      DataService.getAllPosition()
        .then(response => {
          this.positions_data = response.data
        })
        .catch(e => {
          alert(e)
        })
    },
    getPosition (name) {
      DataService.getPosition(name)
        .then(response => {
          this.position = response.data
        })
        .catch(e => {
          alert(e)
        })
    },
    getAllState () {
      DataService.getAllState()
        .then(response => {
          this.states_data = response.data
        })
        .catch(e => {
          alert(e)
        })
    },
    getState (name) {
      DataService.getState(name)
        .then(response => {
          this.state = response.data
        })
        .catch(e => {
          alert(e)
        })
    },
    createEquipment () {
      const data = {
        name: this.equipment.name,
        model: this.model,
        description: this.equipment.description,
        responsible: this.responsible,
        inventory: this.equipment.inventory,
        serial: this.equipment.serial,
        position: this.position,
        comments: this.equipment.comments,
        price: this.equipment.price,
        state: this.state
      }
      DataService.createEquipment(data)
        .then(response => {
          this.equipment.id = response.data.id
          this.submitted = true
        })
        .catch(e => {
          alert(e)
        })
    },
    newEquipment () {
      this.submitted = false
      this.equipment = {}
    }
  },
  created () {
    this.getAllModel()
    this.getAllResponsible()
    this.getAllPosition()
    this.getAllState()
  }
}
</script>

<template>
  <div>
    <div v-if="!submitted">
      <div class="mb-3">
        <label for="name" class="name">Name</label>
        <input type="text" class="form-control" id="name" required name="name" v-model="equipment.name">
      </div>
      <div class="mb-3">
        <label for="model_name" class="form-label">Models</label>
        <select v-model="equipment.model_name" id="model_name" required name="model_name" class="form-control" @click="getModel(this.equipment.model_name)">
          <option v-for="model_data in models_data" v-bind:key="model_data.id">{{model_data.name}}</option>
        </select>
      </div>
      <div class="mb-3">
        <label for="description" class="form-label">Description</label>
        <input type="text" class="form-control" id="description" required name="description" v-model="equipment.description">
      </div>
      <div class="mb-3">
        <label for="responsible_fio" class="form-label">Responsible FIO</label>
        <select v-model="equipment.responsible_fio" id="responsible_fio" required name="responsible_fio" class="form-control" @click="getResponsible(this.equipment.responsible_fio)">
          <option v-for="response_data in responsible_data" v-bind:key="response_data.id">{{response_data.fio}}</option>
        </select>
      </div>
      <div class="mb-3">
        <label for="inventory" class="form-label">Inventory</label>
        <input type="number" class="form-control" id="inventory" required name="inventory" v-model="equipment.inventory">
      </div>
      <div class="mb-3">
        <label for="serial" class="form-label">Serial</label>
        <input type="text" class="form-control" id="serial" required name="serial" v-model="equipment.serial">
      </div>
      <div class="mb-3">
        <label for="positions_name" class="form-label">Position</label>
        <select v-model="equipment.positions_name" id="positions_name" required name="positions_name" class="form-control" @click="getPosition(this.equipment.positions_name)">
          <option v-for="position_data in positions_data" v-bind:key="position_data.id">{{position_data.name}}</option>
        </select>
      </div>
      <div class="mb-3">
        <label for="comments" class="form-label">Comments</label>
        <input type="text" class="form-control" id="comments" required name="comments" v-model="equipment.comments">
      </div>
      <div class="mb-3">
        <label for="price" class="form-label">Price</label>
        <input type="number" class="form-control" id="price" required name="price" v-model="equipment.price">
      </div>
      <div class="mb-3">
        <label for="state_name" class="form-label">State</label>
        <select v-model="equipment.state_name" id="state_name" required name="state_name" class="form-control" @click="getState(this.equipment.state_name)">
          <option v-for="state_data in states_data" v-bind:key="state_data.id">{{state_data.name}}</option>
        </select>
      </div>
      <div class="mb-3">
        <input type="button" @click="createEquipment" class="btn btn-primary" value="Submit"/>
      </div>
      <h1>{{ model }}</h1>
      <h1>{{responsible}}</h1>
      <h1>{{position}}</h1>
      <h1>{{state}}</h1>
    </div>
    <div v-else>
      <div class="alert alert-success" role="alert">
        Save equipment successfully!
      </div>
      <input type="button" @click="newEquipment" class="btn btn-primary" value="Add New Customer"/>
    </div>
  </div>
</template>

<style scoped>

</style>
