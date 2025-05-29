import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { collection, addDoc, Timestamp } from 'firebase/firestore';
import { db, auth } from '../firebase';
import { useAuthState } from 'react-firebase-hooks/auth';

function AddApplication() {
  const navigate = useNavigate();
  const [user] = useAuthState(auth);
  const [formData, setFormData] = useState({
    company: '',
    position: '',
    status: 'Applied',
    date: '',
    notes: '',
  });

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, "applications"), {
        ...formData,
        createdAt: Timestamp.now(),
        uid: user.uid,
      });
      navigate('/applications');
    } catch (err) {
      console.error("Error adding document: ", err);
      alert("Failed to add application.");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] w-full">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded shadow-md max-w-md w-full flex flex-col gap-4"
      >
        <h2 className="text-2xl font-bold text-blue-900 mb-4 text-center">Add New Job Application</h2>
        <div className="flex flex-col gap-1">
          <label className="text-blue-900 font-medium">Company:</label>
          <input
            name="company"
            value={formData.company}
            onChange={handleChange}
            required
            className="border border-blue-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-200 text-black"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label className="text-blue-900 font-medium">Position:</label>
          <input
            name="position"
            value={formData.position}
            onChange={handleChange}
            required
            className="border border-blue-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-200 text-black"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label className="text-blue-900 font-medium">Status:</label>
          <select
            name="status"
            value={formData.status}
            onChange={handleChange}
            className="border border-blue-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-200 text-black"
          >
            <option>Applied</option>
            <option>Interview</option>
            <option>Offer</option>
            <option>Rejected</option>
          </select>
        </div>
        <div className="flex flex-col gap-1">
          <label className="text-blue-900 font-medium">Application Date:</label>
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            required
            className="border border-blue-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-200 text-black"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label className="text-blue-900 font-medium">Notes:</label>
          <textarea
            name="notes"
            value={formData.notes}
            onChange={handleChange}
            className="border border-blue-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-200 text-black"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-700 text-white font-semibold py-2 rounded hover:bg-blue-800 transition mt-2"
        >
          Add Application
        </button>
        <Link
          to="/applications"
          className="text-blue-700 hover:underline text-center mt-2"
        >
          Back to Applications
        </Link>
      </form>
    </div>
  );
}

export default AddApplication;
