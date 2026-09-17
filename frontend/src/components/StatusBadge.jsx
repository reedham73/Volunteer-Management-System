function StatusBadge({ status }) {
  const isAvailable = status === 'Available'
  return (
    <span className={`badge ${isAvailable ? 'available' : 'unavailable'}`}>
      {status}
    </span>
  )
}

export default StatusBadge
