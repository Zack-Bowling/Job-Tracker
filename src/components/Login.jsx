import { useState } from 'react';
import { auth } from '../firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate('/'); // redirect after successful login
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <form
      onSubmit={handleLogin}
      className="bg-white p-8 rounded shadow-md max-w-sm mx-auto mt-16 flex flex-col gap-4"
    >
      <h2 className="text-2xl font-bold text-blue-900 mb-4 text-center">Login</h2>
      {error && <p className="text-red-600 text-center">{error}</p>}
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={e => setEmail(e.target.value)}
        required
        className="border border-blue-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-200 text-black"
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={e => setPassword(e.target.value)}
        required
        className="border border-blue-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-200 text-black"
      />
      <button
        type="submit"
        className="bg-blue-700 text-white font-semibold py-2 rounded hover:bg-blue-800 transition"
      >
        Login
      </button>
    </form>
  );
}

export default Login;
