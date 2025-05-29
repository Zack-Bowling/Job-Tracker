import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import AddApplication from './pages/AddApplication';
import ApplicationList from './pages/ApplicationList';
import ApplicationDetail from './pages/ApplicationDetail';
import Navbar from './components/Navbar';
import Login from './components/Login';
import Register from './components/Register';
import ProtectedRoute from './components/ProtectedRoute';
import EditApplication from './pages/EditApplication';

function App() {
  return (
    <Router>
      <div className="min-h-screen w-full bg-blue-50 flex flex-col">
        <Navbar />
        <div className="flex-1 flex flex-col w-full">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/add" element={<ProtectedRoute><AddApplication /></ProtectedRoute>} />
            <Route path="/applications" element={<ProtectedRoute><ApplicationList /></ProtectedRoute>} />
            <Route path="/applications/:id" element={<ApplicationDetail />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/edit/:id" element={<ProtectedRoute><EditApplication /></ProtectedRoute>} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
