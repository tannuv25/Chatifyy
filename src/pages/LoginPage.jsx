import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import assets from '../assets/assets'

const LoginPage = () => {
  const navigate = useNavigate()

  const [currState, setCurrState] = useState('Sign up')
  const [isDataSubmitted, setIsDataSubmitted] = useState(false)

  const [fullName, setFullName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [bio, setBio] = useState('')

  const resetForm = () => {
    setIsDataSubmitted(false)
    setFullName('')
    setEmail('')
    setPassword('')
    setBio('')
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    // SIGN UP FLOW
    if (currState === 'Sign up') {
      if (!isDataSubmitted) {
        setIsDataSubmitted(true)
        return
      }

      console.log({ fullName, email, password, bio })
      navigate('/') // ✅ redirect after signup
    }

    // LOGIN FLOW
    if (currState === 'Login') {
      console.log({ email, password })
      navigate('/') // ✅ redirect after login
    }
  }

  return (
    <div className="min-h-screen bg-cover bg-center flex items-center justify-center gap-8 sm:justify-evenly max-sm:flex-col backdrop-blur-2xl">

      {/* Left */}
      <img src={assets.logo_big} alt="logo" className="w-[min(30vw,250px)]" />

      {/* Right */}
      <form
        onSubmit={handleSubmit}
        className="border-2 bg-white/8 text-white border-gray-500 p-6 flex flex-col gap-6 rounded-lg shadow-lg w-90"
      >
        {/* Header */}
        <h2 className="font-medium text-2xl flex justify-between items-center">
          {currState}
          {isDataSubmitted && (
            <img
              src={assets.arrow_icon}
              alt="back"
              className="w-5 cursor-pointer"
              onClick={() => setIsDataSubmitted(false)}
            />
          )}
        </h2>

        {/* Full Name */}
        {currState === 'Sign up' && !isDataSubmitted && (
          <input
            type="text"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            placeholder="Full Name"
            required
            className="p-2 border border-gray-500 rounded-md bg-transparent"
          />
        )}

        {/* Email & Password */}
        {!isDataSubmitted && (
          <>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email Address"
              required
              className="p-2 border border-gray-500 rounded-md bg-transparent"
            />

            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              required
              className="p-2 border border-gray-500 rounded-md bg-transparent"
            />
          </>
        )}

        {/* Bio */}
        {currState === 'Sign up' && isDataSubmitted && (
          <textarea
            rows={4}
            value={bio}
            onChange={(e) => setBio(e.target.value)}
            placeholder="Provide a short bio..."
            required
            className="p-2 border border-gray-500 rounded-md bg-transparent"
          />
        )}

        {/* Submit */}
        <button
          type="submit"
          className="py-3 bg-linear-to-r from-purple-400 to-violet-600 text-white rounded-md"
        >
          {currState === 'Sign up' ? 'Create Account' : 'Login Now'}
        </button>

        {/* Terms */}
        <div className="flex items-center gap-2 text-sm text-gray-400">
          <input type="checkbox" required />
          <p>Agree to the terms of use & privacy policy.</p>
        </div>

        {/* Switch */}
        {currState === 'Sign up' ? (
          <p className="text-sm text-gray-400">
            Already have an account?{' '}
            <span
              className="text-violet-400 cursor-pointer"
              onClick={() => {
                setCurrState('Login')
                resetForm()
              }}
            >
              Login here
            </span>
          </p>
        ) : (
          <p className="text-sm text-gray-400">
            Don't have an account?{' '}
            <span
              className="text-violet-400 cursor-pointer"
              onClick={() => {
                setCurrState('Sign up')
                resetForm()
              }}
            >
              Sign up
            </span>
          </p>
        )}
      </form>
    </div>
  )
}

export default LoginPage
