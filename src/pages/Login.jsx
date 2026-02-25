import { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext.jsx'
import bg from '../assets/bg.jpg'
import RegisterModal from '../components/RegisterModal'
import { useEffect } from 'react'
export default function Login() {
  const { login, setUser } = useAuth()
  const navigate = useNavigate()
  const location = useLocation()
  const from = location.state?.from?.pathname || '/'

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const [showRegister, setShowRegister] = useState(false) 
  useEffect(() => {
  const params = new URLSearchParams(window.location.search)
  const token = params.get('token')

    if (token) {
    localStorage.setItem('token', token)

    const payload = JSON.parse(atob(token.split('.')[1]))
    setUser({
      name: payload.name,
      email: payload.email
    })

    window.history.replaceState({}, document.title, '/')
    navigate('/dashboard', { replace: true })
  }
}, [navigate])
  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')
    setLoading(true)
    try {
      await login(email.trim(), password)
      navigate(from, { replace: true })
    } catch (err) {
      setError(err.message || 'Failed to login')
    } finally {
      setLoading(false)
    }
  }

  return (
    <section
      className="relative min-h-screen flex items-center"
      style={{
        backgroundImage: `linear-gradient(rgba(2,6,23,0.45), rgba(2,6,23,0.45)), url(${bg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="container-p grid grid-cols-1 lg:grid-cols-12 items-center gap-10 w-full">
        {/* Left hero copy */}
        <div className="hidden lg:block lg:col-span-7 text-white/95">
          <div className="max-w-2xl">
            <div className="text-brand text-5xl leading-tight font-serif drop-shadow-sm">“</div>
            <h1 className="mt-2 text-4xl xl:text-5xl font-semibold tracking-tight">
              Finally, intelligence built for modern brands.
            </h1>
            <p className="mt-5 text-base text-slate-200/90 max-w-xl">
              KactusLabs helps teams understand markets clearly and make confident decisions.
            </p>
          </div>
        </div>

        {/* Right login card */}
        <div className="lg:col-span-5 flex justify-center">
          <div className="w-full max-w-sm bg-white text-slate-900 rounded-xl p-6 md:p-8 shadow-2xl/30 shadow-black/30 border border-slate-200">
            <h2 className="text-lg font-semibold mb-1">Welcome Back!</h2>
            <p className="text-xs text-slate-500 mb-6">Login to your account below</p>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-medium text-slate-600 mb-1" htmlFor="email">Email</label>
                <input
                  id="email"
                  type="email"
                  className="w-full rounded-md bg-white border border-slate-300 px-3 py-2 outline-none focus:ring-2 focus:ring-emerald-500/70 focus:border-emerald-500"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                  autoFocus
                />
              </div>
              <div>
                <div className="flex items-center justify-between">
                  <label className="block text-xs font-medium text-slate-600 mb-1" htmlFor="password">Password</label>
                  <button type="button" className="text-xs text-slate-500 hover:text-slate-700">Forgot password?</button>
                </div>
                <input
                  id="password"
                  type="password"
                  className="w-full rounded-md bg-white border border-slate-300 px-3 py-2 outline-none focus:ring-2 focus:ring-emerald-500/70 focus:border-emerald-500"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your password"
                  required
                />
              </div>
              {error && <p className="text-red-500 text-sm">{error}</p>}
              <button type="submit" className="w-full bg-emerald-700 hover:bg-emerald-800 text-white font-medium rounded-md py-2 transition" disabled={loading}>
                {loading ? 'Signing in…' : 'Sign In'}
              </button>
              <button
  type="button"
  onClick={() =>
    window.location.href = 'http://localhost:5000/api/auth/google'
  }
  className="w-full bg-white border border-slate-300 hover:bg-slate-50 text-slate-800 font-medium rounded-md py-2 transition"
>
  Sign in with Google
</button>
              <button
  type="button"
  onClick={() => setShowRegister(true)}
  className="w-full bg-white border border-slate-300 hover:bg-slate-50 text-slate-800 font-medium rounded-md py-2 transition"
>
  Sign up
</button>
              <button type="button" className="w-full text-xs text-slate-500 hover:text-slate-700">Go back</button>
            </form>
          </div>
        </div>
      </div>
      {showRegister && (
  <RegisterModal onClose={() => setShowRegister(false)} />
)}
    </section>
  )
}
