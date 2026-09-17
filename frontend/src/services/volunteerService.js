import axios from 'axios'

const API_BASE_URL = 'http://localhost:8080/api'

const api = axios.create({
  baseURL: API_BASE_URL,
})

export const getAllVolunteers = (params = {}) => api.get('/volunteers', { params })
export const getVolunteerById = (id) => api.get(`/volunteers/${id}`)
export const createVolunteer = (data) => api.post('/volunteers', data)
export const updateVolunteer = (id, data) => api.put(`/volunteers/${id}`, data)
export const deleteVolunteer = (id) => api.delete(`/volunteers/${id}`)
export const getDashboardStats = () => api.get('/dashboard')

export default api
