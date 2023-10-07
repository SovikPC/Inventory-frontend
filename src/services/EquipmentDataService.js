import http from '../http-common'

class EquipmentDataService {
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
}

export default new EquipmentDataService()
