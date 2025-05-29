import { useState } from 'react';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { auth } from '../firebase';
import { db } from '../firebase';
import { doc, setDoc } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';

function Register() {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      // Set displayName to username
      await updateProfile(user, { displayName: username });

      // Force reload to get updated displayName
      await user.reload();

      // Save username to Firestore under users/{uid}
      await setDoc(doc(db, 'users', user.uid), {
        email: user.email,
        username: username,
        createdAt: new Date()
      });

      navigate('/');
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <form
      onSubmit={handleRegister}
      className="bg-white p-8 rounded shadow-md max-w-sm mx-auto mt-16 flex flex-col gap-4"
    >
      <h2 className="text-2xl font-bold text-blue-900 mb-4 text-center">Register</h2>
      {error && <p className="text-red-600 text-center">{error}</p>}
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        required
        className="border border-blue-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-200 text-black"
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        className="border border-blue-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-200 text-black"
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
        className="border border-blue-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-200 text-black"
      />
      <button
        type="submit"
        className="bg-blue-700 text-white font-semibold py-2 rounded hover:bg-blue-800 transition"
      >
        Register
      </button>
    </form>
  );
}

export default Register;
