<script>
import DataService from '@/services/DataService'

export default {
  name: 'edit-equipment',
  data () {
    return {
      currentEquipment: null,
      message: '',
      models_data: [],
      responsible_data: [],
      positions_data: [],
      states_data: []
    }
  },
  methods: {
    getEquipment (id) {
      DataService.getEquipment(id)
        .then(response => {
          this.currentEquipment = response.data
        })
        .catch(e => {
          alert(e)
        })
    },
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
          this.currentEquipment.model = response.data
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
          this.currentEquipment.responsible = response.data
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
          this.currentEquipment.position = response.data
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
          this.currentEquipment.state = response.data
        })
        .catch(e => {
          alert(e)
        })
    },
    updateEquipment () {
      DataService.updateEquipment(this.currentEquipment.id, this.currentEquipment)
        .then(() => {
          this.message = 'This equipment was updated successfully!'
        })
        .catch(e => {
          alert(e)
        })
    },
    deleteEquipment () {
      DataService.deleteEquipment(this.currentEquipment.id)
        .then(() => {
          this.$router.push({ name: 'equipment' })
        })
        .catch(e => {
          alert(e)
        })
    },
    warning () {
      const check = confirm('Вы уверены что хотите удалить оборудование?')
      if (check === true) {
        this.deleteEquipment()
      }
    }
  },
  mounted () {
    this.getEquipment(this.$route.params.id)
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
  <div v-if="currentEquipment">
    <div class="mb-3">
      <label for="name" class="name">Name</label>
      <input type="text" class="form-control" id="name" required name="name" v-model="currentEquipment.name">
    </div>
    <div class="mb-3">
      <label for="model_name" class="form-label">Models</label>
      <select v-model="currentEquipment.model.name" id="model_name" required name="model_name" class="form-control" @click="getModel(this.currentEquipment.model.name)">
        <option v-for="model_data in models_data" v-bind:key="model_data.id">{{model_data.name}}</option>
      </select>
    </div>
    <div class="mb-3">
      <label for="description" class="form-label">Description</label>
      <input type="text" class="form-control" id="description" required name="description" v-model="currentEquipment.description">
    </div>
    <div class="mb-3">
      <label for="responsible_fio" class="form-label">Responsible FIO</label>
      <select v-model="currentEquipment.responsible.fio" id="responsible_fio" required name="responsible_fio" class="form-control" @click="getResponsible(this.currentEquipment.responsible.fio)">
        <option v-for="response_data in responsible_data" v-bind:key="response_data.id">{{response_data.fio}}</option>
      </select>
    </div>
    <div class="mb-3">
      <label for="inventory" class="form-label">Inventory</label>
      <input type="number" class="form-control" id="inventory" required name="inventory" v-model="currentEquipment.inventory">
    </div>
    <div class="mb-3">
      <label for="serial" class="form-label">Serial</label>
      <input type="text" class="form-control" id="serial" required name="serial" v-model="currentEquipment.serial">
    </div>
    <div class="mb-3">
      <label for="positions_name" class="form-label">Position</label>
      <select v-model="currentEquipment.position.name" id="positions_name" required name="positions_name" class="form-control" @click="getPosition(this.currentEquipment.position.name)">
        <option v-for="position_data in positions_data" v-bind:key="position_data.id">{{position_data.name}}</option>
      </select>
    </div>
    <div class="mb-3">
      <label for="comments" class="form-label">Comments</label>
      <input type="text" class="form-control" id="comments" required name="comments" v-model="currentEquipment.comments">
    </div>
    <div class="mb-3">
      <label for="price" class="form-label">Price</label>
      <input type="number" class="form-control" id="price" required name="price" v-model="currentEquipment.price">
    </div>
    <div class="mb-3">
      <label for="state_name" class="form-label">State</label>
      <select v-model="currentEquipment.state.name" id="state_name" required name="state_name" class="form-control" @click="getState(currentEquipment.state.name)">
        <option v-for="state_data in states_data" v-bind:key="state_data.id">{{state_data.name}}</option>
      </select>
    </div>
    <div class="mb-3">
      <input type="button" @click="updateEquipment" class="btn btn-primary me-3" value="Update"/>
      <input type="button" @click="warning" class="btn btn-danger" value="Delete"/>
    </div>
    <div class="alert alert-success" role="alert" v-if="message">
      {{message}}
    </div>
  </div>
</template>

<style scoped>

</style>
