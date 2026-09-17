import { useState, useEffect } from 'react'

const ROLES = [
  'Event Coordinator',
  'Registration Volunteer',
  'Technical Volunteer',
  'Decoration Volunteer',
  'Hospitality Volunteer',
]

const emptyForm = {
  fullName: '',
  email: '',
  phone: '',
  department: '',
  year: '',
  skills: '',
  availability: 'Available',
  volunteerRole: ROLES[0],
}

function VolunteerForm({ initialData, onSubmit, onClose }) {
  const [formData, setFormData] = useState(emptyForm)
  const [errors, setErrors] = useState({})

  useEffect(() => {
    if (initialData) {
      setFormData(initialData)
    } else {
      setFormData(emptyForm)
    }
  }, [initialData])

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const validate = () => {
    const newErrors = {}
    if (!formData.fullName.trim()) newErrors.fullName = 'Full name is required'
    if (!formData.email.trim()) newErrors.email = 'Email is required'
    if (!formData.phone.trim()) newErrors.phone = 'Phone is required'
    if (!formData.department.trim()) newErrors.department = 'Department is required'
    if (!formData.year.trim()) newErrors.year = 'Year is required'
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!validate()) return
    onSubmit(formData)
  }

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <h2>{initialData ? 'Edit Volunteer' : 'Add Volunteer'}</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-grid">
            <div className="form-group">
              <label>Full Name</label>
              <input name="fullName" value={formData.fullName} onChange={handleChange} />
              {errors.fullName && <span className="error-text">{errors.fullName}</span>}
            </div>
            <div className="form-group">
              <label>Email</label>
              <input name="email" value={formData.email} onChange={handleChange} />
              {errors.email && <span className="error-text">{errors.email}</span>}
            </div>
            <div className="form-group">
              <label>Phone</label>
              <input name="phone" value={formData.phone} onChange={handleChange} />
              {errors.phone && <span className="error-text">{errors.phone}</span>}
            </div>
            <div className="form-group">
              <label>Department</label>
              <input name="department" value={formData.department} onChange={handleChange} />
              {errors.department && <span className="error-text">{errors.department}</span>}
            </div>
            <div className="form-group">
              <label>Year</label>
              <input name="year" value={formData.year} onChange={handleChange} />
              {errors.year && <span className="error-text">{errors.year}</span>}
            </div>
            <div className="form-group">
              <label>Volunteer Role</label>
              <select name="volunteerRole" value={formData.volunteerRole} onChange={handleChange}>
                {ROLES.map((r) => (
                  <option key={r} value={r}>{r}</option>
                ))}
              </select>
            </div>
            <div className="form-group">
              <label>Availability</label>
              <select name="availability" value={formData.availability} onChange={handleChange}>
                <option value="Available">Available</option>
                <option value="Unavailable">Unavailable</option>
              </select>
            </div>
            <div className="form-group full">
              <label>Skills</label>
              <input name="skills" value={formData.skills} onChange={handleChange} />
            </div>
          </div>
          <div className="modal-actions">
            <button type="button" className="btn-secondary" onClick={onClose}>Cancel</button>
            <button type="submit" className="btn-primary">Save</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default VolunteerForm
