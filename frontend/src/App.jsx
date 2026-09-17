import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import Dashboard from './pages/Dashboard.jsx'
import VolunteerManagement from './pages/VolunteerManagement.jsx'

function App() {
  return (
    <div className="app">
      <Navbar />
      <main className="page-content">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/volunteers" element={<VolunteerManagement />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
