function Home() {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] bg-blue-50">
        <h1 className="text-3xl font-bold mb-4 text-blue-900">
          Welcome to Job Application Tracker
        </h1>
        <p className="text-lg text-blue-700 mb-6">
          Organize and track all your job applications in one place.
        </p>
        <img
          src="https://cdn-icons-png.flaticon.com/512/3135/3135768.png"
          alt="Job Tracker"
          className="w-32 h-32 mb-4"
        />
      </div>
    );
  }
  
  export default Home;
