import { useState, useEffect } from 'react';
import { db, auth } from '../firebase';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { useAuthState } from 'react-firebase-hooks/auth';

function ApplicationsList() {
  const [applications, setApplications] = useState([]);
  const [user] = useAuthState(auth);

  useEffect(() => {
    if (!user) return;
    const fetchApplications = async () => {
      const q = query(
        collection(db, 'applications'),
        where('uid', '==', user.uid)
      );
      const querySnapshot = await getDocs(q);
      const apps = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      setApplications(apps);
    };

    fetchApplications();
  }, [user]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen w-full bg-blue-50">
      <form className="bg-white p-8 rounded shadow-md max-w-xl w-full flex flex-col gap-6">
        <h2 className="text-2xl font-bold mb-4 text-blue-900 text-center">Job Applications</h2>
        {applications.length === 0 ? (
          <p className="text-blue-700 text-center">No applications found. Add one to get started!</p>
        ) : (
          <ul className="w-full space-y-4">
            {applications.map((app) => (
              <li
                key={app.id}
                className="bg-blue-50 rounded shadow p-4 flex flex-col items-center"
              >
                <strong className="text-lg text-blue-900">{app.company}</strong>
                <span className="text-blue-800">{app.position}</span>
                <div className="text-blue-700">Status: {app.status}</div>
                <div className="text-blue-700">Application Date: {app.date}</div>
                <div className="text-blue-700">Notes: {app.notes || 'No notes'}</div>
              </li>
            ))}
          </ul>
        )}
      </form>
    </div>
  );
}

export default ApplicationsList;
