'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function AuthForm({ mode = 'login' }) {
  const [status, setStatus] = useState('')
  const [loading, setLoading] = useState(false)

 const handleSubmit = async (e) => {
  e.preventDefault()
  setLoading(true)
  setStatus('')

  const formData = new FormData(e.target)

  const email = formData.get('email')
  const password = formData.get('password')

  const payload = {}

  if (mode === 'signup') {
    payload.name = formData.get('name')
  }

  payload.email = email
  payload.password = password

  if (
    email === "admin@ranzomtech.com" &&
    password === "rt6677"
  ) {
    window.location.href = "/admin"
    return
  }

    try {
      const res = await fetch(mode === 'signup' ? '/api/auth/signup' : '/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })

      if (res.ok) {
        setStatus('success')
        e.target.reset()
      } else {
        setStatus('error')
      }
    } catch (err) {
      console.error(err)
      setStatus('error')
    } finally {
      setLoading(false)
    }
  }

  

  return (
    <div className="contact-content bg1-clr">
      <h3 className="white mb-xxl-15 mb-xl-10 mb-lg-7 mb-5">
        {mode === 'signup' ? 'Create an Account' : 'Welcome Back'}
      </h3>
      <form onSubmit={handleSubmit}>
        <div className="row g-xxl-8 g-xl-6 g-lg-4 g-4">
          {mode === 'signup' && (
            <div className="col-lg-12">
              <input name="name" type="text" placeholder="Full Name" required />
            </div>
          )}

          <div className="col-lg-12">
            <input name="email" type="email" placeholder="Email" required />
          </div>

          <div className="col-lg-12">
            <input name="password" type="password" placeholder="Password" required />
          </div>

          {mode === 'signup' && (
            <div className="col-lg-12">
              <input name="confirmPassword" type="password" placeholder="Confirm Password" required />
            </div>
          )}

          {status === 'success' && (
            <div className="col-lg-12">
              <p style={{ color: '#E3FF04', fontSize: '14px', margin: 0 }}>
                ✓ {mode === 'signup' ? 'Account created.' : 'Logged in.'}
              </p>
            </div>
          )}

          {status === 'error' && (
            <div className="col-lg-12">
              <p style={{ color: '#ff4d4d', fontSize: '14px', margin: 0 }}>
                ✗ Something went wrong. Please try again.
              </p>
            </div>
          )}

          <div className="col-lg-12">
            <button
              type="submit"
              disabled={loading}
              className="submit-btn"
              style={{ opacity: loading ? 0.7 : 1, cursor: loading ? 'not-allowed' : 'pointer' }}
            >
              {loading ? (mode === 'signup' ? 'Creating...' : 'Signing in...') : (mode === 'signup' ? 'Create Account' : 'Sign In')}
            </button>
          </div>

          <div className="col-lg-12">
            {mode === 'signup' ? (
              <p className="pra-clr">Already have an account? <Link href="/login">Sign in</Link></p>
            ) : (
              <p className="pra-clr">Don't have an account? <Link href="/signup">Create one</Link></p>
            )}
          </div>
        </div>
      </form>
    </div>
  )
}
