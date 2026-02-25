import { Link, useNavigate, useLocation } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

export default function Navbar() {
  const { user, logout } = useAuth()
  const navigate = useNavigate()
  const location = useLocation()

  const handleFeaturesClick = () => {
    if (location.pathname !== '/') {
      navigate('/', { state: { scrollTo: 'features' } })
    } else {
      const section = document.getElementById('features')
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }

  return (
    <nav className="bg-white border-b border-slate-200 px-10 py-4 flex items-center justify-between">

      {/* Logo */}
      <Link to="/" className="text-xl font-semibold text-slate-900">
        KactusLabs
      </Link>

      {/* Center Tabs */}
      <div className="hidden md:flex items-center gap-10 text-slate-700 font-medium">

        <button
          onClick={handleFeaturesClick}
          className="hover:text-emerald-600 transition"
        >
          Features
        </button>

        <Link
          to="/about"
          className="hover:text-emerald-600 transition"
        >
          About
        </Link>

        <Link
          to="/integrations"
          className="hover:text-emerald-600 transition"
        >
          Integrations
        </Link>

      </div>

      {/* Right Button */}
      <div>
        {!user ? (
          <Link
            to="/login"
            className="px-6 py-2 rounded-full bg-emerald-900 text-white font-medium hover:bg-emerald-800 transition"
          >
            Login
          </Link>
        ) : (
          <div className="flex items-center gap-4">
            <span className="text-slate-700 font-medium">
              {user.name}
            </span>

            <button
              onClick={logout}
              className="px-6 py-2 rounded-full bg-slate-900 text-white hover:bg-red-600 transition"
            >
              Logout
            </button>
          </div>
        )}
      </div>

    </nav>
  )
}