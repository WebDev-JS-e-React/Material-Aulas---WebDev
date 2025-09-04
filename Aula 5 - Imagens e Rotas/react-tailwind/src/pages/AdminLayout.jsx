import Sidebar from "../components/Sidebar";
import Dashboard from "./Dashboard";

export default function AdminLayout() {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 bg-gray-100 min-h-screen p-6">
        <Dashboard/>
      </div>
    </div>
  );
}
