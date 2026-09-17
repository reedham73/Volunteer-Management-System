import { useState, useEffect, useMemo } from 'react'
import SearchBar from '../components/SearchBar.jsx'
import VolunteerTable from '../components/VolunteerTable.jsx'
import VolunteerForm from '../components/VolunteerForm.jsx'
import {
  getAllVolunteers,
  createVolunteer,
  updateVolunteer,
  deleteVolunteer,
} from '../services/volunteerService.js'

function VolunteerManagement() {
  const [volunteers, setVolunteers] = useState([])
  const [searchTerm, setSearchTerm] = useState('')
  const [availabilityFilter, setAvailabilityFilter] = useState('All')
  const [showForm, setShowForm] = useState(false)
  const [editingVolunteer, setEditingVolunteer] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchVolunteers()
  }, [])

  const fetchVolunteers = async () => {
    try {
      setLoading(true)
      const res = await getAllVolunteers()
      setVolunteers(res.data)
    } catch (err) {
      console.error('Failed to load volunteers', err)
    } finally {
      setLoading(false)
    }
  }

  const filteredVolunteers = useMemo(() => {
    return volunteers.filter((v) => {
      const matchesSearch = v.fullName.toLowerCase().includes(searchTerm.toLowerCase())
      const matchesAvailability =
        availabilityFilter === 'All' || v.availability === availabilityFilter
      return matchesSearch && matchesAvailability
    })
  }, [volunteers, searchTerm, availabilityFilter])

  const handleAdd = () => {
    setEditingVolunteer(null)
    setShowForm(true)
  }

  const handleEdit = (volunteer) => {
    setEditingVolunteer(volunteer)
    setShowForm(true)
  }

  const handleDelete = async (id) => {
    if (!window.confirm('Delete this volunteer?')) return
    try {
      await deleteVolunteer(id)
      fetchVolunteers()
    } catch (err) {
      console.error('Failed to delete volunteer', err)
    }
  }

  const handleSubmit = async (formData) => {
    try {
      if (editingVolunteer) {
        await updateVolunteer(editingVolunteer.id, formData)
      } else {
        await createVolunteer(formData)
      }
      setShowForm(false)
      fetchVolunteers()
    } catch (err) {
      console.error('Failed to save volunteer', err)
    }
  }

  return (
    <div>
      <h2>Volunteer Management</h2>

      <div className="toolbar">
        <div className="toolbar-left">
          <SearchBar value={searchTerm} onChange={setSearchTerm} />
          <select value={availabilityFilter} onChange={(e) => setAvailabilityFilter(e.target.value)}>
            <option value="All">All</option>
            <option value="Available">Available</option>
            <option value="Unavailable">Unavailable</option>
          </select>
        </div>
        <button className="btn-primary" onClick={handleAdd}>+ Add Volunteer</button>
      </div>

      {loading ? (
        <p>Loading...</p>
      ) : (
        <VolunteerTable volunteers={filteredVolunteers} onEdit={handleEdit} onDelete={handleDelete} />
      )}

      {showForm && (
        <VolunteerForm
          initialData={editingVolunteer}
          onSubmit={handleSubmit}
          onClose={() => setShowForm(false)}
        />
      )}
    </div>
  )
}

export default VolunteerManagement
