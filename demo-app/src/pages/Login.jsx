function Login({ setIsLoggedIn }) {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white rounded-lg p-8 w-96">
        <h2 className="text-xl font-bold text-center mb-2">
          Welcome Back
        </h2>
        <p className="text-sm text-gray-500 text-center mb-6">
          Sign in to your dashboard
        </p>

        <input
          className="border p-2 w-full rounded mb-4"
          placeholder="Email"
        />

        <input
          className="border p-2 w-full rounded mb-6"
          type="password"
          placeholder="Password"
        />

        <button
          onClick={() => setIsLoggedIn(true)}
          className="w-full bg-black text-white py-2 rounded"
        >
          Login
        </button>
      </div>
    </div>
  );
}

export default Login;
