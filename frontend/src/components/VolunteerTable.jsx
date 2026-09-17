import StatusBadge from './StatusBadge.jsx'

function VolunteerTable({ volunteers, onEdit, onDelete }) {
  if (!volunteers || volunteers.length === 0) {
    return <div className="empty-state">No volunteers found.</div>
  }

  return (
    <div className="table-wrapper">
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Department</th>
            <th>Year</th>
            <th>Role</th>
            <th>Availability</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {volunteers.map((v) => (
            <tr key={v.id}>
              <td>{v.fullName}</td>
              <td>{v.email}</td>
              <td>{v.phone}</td>
              <td>{v.department}</td>
              <td>{v.year}</td>
              <td>{v.volunteerRole}</td>
              <td><StatusBadge status={v.availability} /></td>
              <td className="actions">
                <button className="btn-secondary" onClick={() => onEdit(v)}>Edit</button>
                <button className="btn-danger" onClick={() => onDelete(v.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default VolunteerTable
