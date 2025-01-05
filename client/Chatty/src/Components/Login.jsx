import React from 'react'

const Login = () => {
  return (
    <div>
      <div className="min-h-screen bg-gray-900 flex items-center justify-center">
      <div className="w-full max-w-sm p-6 bg-gray-800 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold text-center text-purple-400 neon-text">
          Login
        </h1>
        <form className="mt-6 space-y-4">
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
          {/* Login Button */}
          <div>
            <button
              type="submit"
              className="w-full py-2 text-gray-900 bg-purple-400 font-semibold rounded-lg hover:bg-purple-500 transition duration-300"
            >
              Login
            </button>
          </div>
        </form>
        {/* Footer */}
        <p className="text-center text-purple-400 mt-4">
          Don’t have an account?{' '}
          <a href="/signup" className="text-purple-500 underline hover:text-purple-400">
            Sign Up
          </a>
        </p>
      </div>
    </div>
    </div>
  )
}

export default Login
