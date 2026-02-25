import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center text-center p-6">
      <div>
        <h1 className="text-6xl font-black text-brand">404</h1>
        <p className="mt-2 text-slate-300">Page not found.</p>
        <Link to="/" className="btn-brand inline-block mt-6">Go Home</Link>
      </div>
    </main>
  )
}
