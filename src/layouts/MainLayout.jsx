import { Link } from "react-router-dom";

const MainLayout = ({ children }) => {
  return (
    <div className="flex min-h-screen">

      {/* Sidebar */}
      <div className="w-64 bg-white shadow-md p-4">
        <h2 className="text-xl font-bold text-blue-500 mb-6">MedCare</h2>

        <nav className="flex flex-col gap-4">
          <Link to="/dashboard">Dashboard</Link>
          <Link to="/add">Add Medicine</Link>
          <Link to="/history">History</Link>
        </nav>
      </div>

      {/* Content */}
      <div className="flex-1 p-6 bg-gray-50">
        {children}
      </div>

    </div>
  );
};

export default MainLayout;