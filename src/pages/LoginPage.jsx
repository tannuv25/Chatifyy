import React, { useState } from 'react'
import assets from '../assets/assets'

const LoginPage = () => {
  const [currState, setCurrState] = useState("Sign up")
  const [isDataSubmitted, setIsDataSubmitted] = useState(false)

  const [fullName, setFullName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [bio, setBio] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()

    if (currState === "Sign up" && !isDataSubmitted) {
      setIsDataSubmitted(true)
      return
    }

    console.log({
      fullName,
      email,
      password,
      bio
    })
  }

  return (
    <div className='min-h-screen bg-cover bg-center flex items-center justify-center gap-8 sm:justify-evenly max-sm:flex-col backdrop-blur-2xl'>
      
      {/* Left */}
      <img src={assets.logo_big} alt="logo" className='w-[min(30vw,250px)]' />

      {/* Right */}
      <form
        onSubmit={handleSubmit}
        className='border-2 bg-white/8 text-white border-gray-500 p-6 flex flex-col gap-6 rounded-lg shadow-lg'
      >

        <h2 className='font-medium text-2xl flex justify-between items-center'>
          {currState}
          {isDataSubmitted &&<img
            src={assets.arrow_icon}
            alt="toggle"
            className='w-5 cursor-pointer'
            onClick={() => {
              setCurrState(currState === "Sign up" ? "Login" : "Sign up")
              setIsDataSubmitted(false)
            }}
          />
}
        </h2>

        {/* Full Name */}
        {currState === "Sign up" && !isDataSubmitted && (
          <input
            type="text"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            placeholder='Full Name'
            required
            className='p-2 border border-gray-500 rounded-md focus:outline-none'
          />
        )}

        {/* Email & Password */}
        {!isDataSubmitted && (
          <>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder='Email Address'
              required
              className='p-2 border border-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500'
            />

            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder='Password'
              required
              className='p-2 border border-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500'
            />
          </>
        )}

        {/* Bio */}
        {currState === "Sign up" && isDataSubmitted && (
          <textarea
            rows={4}
            value={bio}
            onChange={(e) => setBio(e.target.value)}
            placeholder='Provide a short bio...'
            className='p-2 border border-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500'
          />
        )}

        <button
          type='submit'
          className='py-3 bg-linear-to-r from-purple-400 to-violet-600 text-white rounded-md cursor-pointer'
        >
          {currState === "Sign up" ?"Create Account"  : "Login Now"}
        </button>

        <div className='flex items-center gap-2 text-sm text-gray-400'>
          <input type="checkbox" required />
          <p>Agree to the terms of use & privacy policy.</p>
        </div>
        
        <div className='flex flex-col gap-2'>
          {currState === "Sign up" ? (
            <p className='text-sm text-gray-600'>Already have an account? <span className='font-medium text-violet-500 cursor-pointer' onClick={() => setCurrState("Login")}>Login here</span></p>
          ) : (
            <p className='text-sm text-gray-600'>Don't have an account? <span className='font-medium text-violet-500 2cursor-pointer' onClick={() => setCurrState("Sign up")}>Sign up</span></p>
          )}
        </div>
      </form>
    </div>
  )
}

export default LoginPage
