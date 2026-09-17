import { NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <nav className="navbar">
      <h1>Volunteer Management System</h1>
      <div className="nav-links">
        <NavLink to="/" end className={({ isActive }) => (isActive ? 'active' : '')}>
          Dashboard
        </NavLink>
        <NavLink to="/volunteers" className={({ isActive }) => (isActive ? 'active' : '')}>
          Volunteer Management
        </NavLink>
      </div>
    </nav>
  )
}

export default Navbar
