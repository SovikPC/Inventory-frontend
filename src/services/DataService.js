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
    return http.post('/users/create', data)
  }

  updateUser (id, data) {
    return http.put(`/users/${id}`, data)
  }

  deleteUser (id) {
    return http.delete(`/users/${id}`)
  }

  // getAll () {
  //   return http.get('/equipment')
  // }
  //
  // get (id) {
  //   return http.get(`/equipment/${id}`)
  // }
  //
  // create (data) {
  //   return http.post('/equipment/create', data)
  // }
  //
  // update (id, data) {
  //   return http.put(`/equipment/${id}`, data)
  // }
  //
  // delete (id) {
  //   return http.delete(`/equipment/${id}`)
  // }
}

export default new DataService()
