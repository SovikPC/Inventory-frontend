import http from '../http-common'

class DataService {
  getAllEquipment () {
    return http.get('/equipment')
  }

  getEquipment (id) {
    return http.get(`/equipment/${id}`)
  }

  createEquipment (data) {
    return http.post('/equipment/create', data)
  }

  updateEquipment (id, data) {
    return http.put(`/equipment/${id}`, data)
  }

  deleteEquipment (id) {
    return http.delete(`/equipment/${id}`)
  }

  getAllUser () {
    return http.get('/users')
  }

  getUser (id) {
    return http.get(`/users/${id}`)
  }

  createUser (data) {
    return http.post('/users', data)
  }

  updateUser (id, data) {
    return http.put(`/users/${id}`, data)
  }

  deleteUser (id) {
    return http.delete(`/users/${id}`)
  }

  getAllRoles () {
    return http.get('/roles')
  }

  getRoles (name) {
    return http.get(`/roles/${name}`)
  }

  getAllModel () {
    return http.get('/model')
  }

  getModel (name) {
    return http.get(`/model/${name}`)
  }

  createModel (data) {
    return http.post('/model', data)
  }

  updateModel (id, data) {
    return http.put(`/model/${id}`, data)
  }

  deleteModel (id) {
    return http.delete(`/model/${id}`)
  }

  getAllResponsible () {
    return http.get('/responsible')
  }

  getResponsible (fio) {
    return http.get(`/responsible/${fio}`)
  }

  createResponsible (data) {
    return http.post('/responsible', data)
  }

  updateResponsible (id, data) {
    return http.put(`/responsible/${id}`, data)
  }

  deleteResponsible (id) {
    return http.delete(`/responsible/${id}`)
  }

  getAllPosition () {
    return http.get('/position')
  }

  getPosition (name) {
    return http.get(`/position/${name}`)
  }

  createPosition (data) {
    return http.post('/position', data)
  }

  updatePosition (id, data) {
    return http.put(`/position/${id}`, data)
  }

  deletePosition (id) {
    return http.delete(`/position/${id}`)
  }

  getAllState () {
    return http.get('/state')
  }

  getState (name) {
    return http.get(`/state/${name}`)
  }

  getAllLog () {
    return http.get('/log')
  }
}
export default new DataService()
