import { Link } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../firebase';

function Navbar() {
  const [user] = useAuthState(auth);

  return (
    <nav className="bg-blue-100 text-blue-900 px-6 py-4 flex justify-between items-center shadow-md w-full">
      <div className="space-x-4">
        <Link to="/" className="text-blue-900 hover:underline">Home</Link>
        <Link to="/add" className="text-blue-900 hover:underline">Add Application</Link>
        <Link to="/applications" className="text-blue-900 hover:underline">View Applications</Link>
      </div>

      {user ? (
        <div className="flex items-center space-x-3">
          <span className="font-medium">👋 {user.displayName || user.email}</span>
          <button
            onClick={() => auth.signOut()}
            className="bg-white text-blue-700 px-3 py-1 rounded hover:bg-blue-50 transition"
          >
            Log Out
          </button>
        </div>
      ) : (
        <div className="space-x-3">
          <Link
            to="/login"
            className="bg-white text-blue-700 px-3 py-1 rounded hover:bg-blue-50 transition"
          >
            Log In
          </Link>
          <Link
            to="/register"
            className="bg-white text-blue-700 px-3 py-1 rounded hover:bg-blue-50 transition"
          >
            Register
          </Link>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
