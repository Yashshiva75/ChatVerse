import React from 'react'

const Signup = () => {
    
  return (
    <div>
         <div className="min-h-screen bg-gray-900 flex items-center justify-center">
      <div className="w-full max-w-md p-8 space-y-6 bg-gray-800 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold text-center text-purple-400 neon-text">
          Welcome
        </h1>
        <form className="space-y-4">
          {/* Full Name */}
          <div>
            <label className="block text-purple-400 text-sm font-bold mb-2">
              Full Name
            </label>
            <input
              type="text"
              placeholder="Enter your full name"
              className="w-full px-4 py-2 bg-gray-700 text-purple-200 placeholder-gray-500 border border-gray-600 rounded-lg focus:ring-purple-400 focus:border-purple-400"
            />
          </div>
          {/* Email */}
          <div>
            <label className="block text-purple-400 text-sm font-bold mb-2">
              Email
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 bg-gray-700 text-purple-200 placeholder-gray-500 border border-gray-600 rounded-lg focus:ring-purple-400 focus:border-purple-400"
            />
          </div>
          {/* Password */}
          <div>
            <label className="block text-purple-400 text-sm font-bold mb-2">
              Password
            </label>
            <input
              type="password"
              placeholder="Enter your password"
              className="w-full px-4 py-2 bg-gray-700 text-purple-200 placeholder-gray-500 border border-gray-600 rounded-lg focus:ring-purple-400 focus:border-purple-400"
            />
          </div>
          {/* Buttons */}
          <div className="flex space-x-4">
            <button
              type="button"
              className="w-full py-2 text-gray-900 bg-purple-400 font-semibold rounded-lg hover:bg-purple-500 transition duration-300"
            >
              Sign Up
            </button>
            <button
              type="button"
              className="w-full py-2 text-purple-400 border border-purple-400 font-semibold rounded-lg hover:bg-purple-500 hover:text-gray-900 transition duration-300"
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
    </div>
  )
}

export default Signup
