import { useState, useEffect } from 'react'
import DashboardCard from '../components/DashboardCard.jsx'
import { getDashboardStats } from '../services/volunteerService.js'

function Dashboard() {
  const [stats, setStats] = useState({
    totalVolunteers: 0,
    availableVolunteers: 0,
    unavailableVolunteers: 0,
  })
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchStats()
  }, [])

  const fetchStats = async () => {
    try {
      const res = await getDashboardStats()
      setStats(res.data)
    } catch (err) {
      console.error('Failed to load dashboard stats', err)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div>
      <h2>Dashboard</h2>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="dashboard-grid">
          <DashboardCard title="Total Volunteers" value={stats.totalVolunteers} />
          <DashboardCard title="Available Volunteers" value={stats.availableVolunteers} />
          <DashboardCard title="Unavailable Volunteers" value={stats.unavailableVolunteers} />
        </div>
      )}
    </div>
  )
}

export default Dashboard
