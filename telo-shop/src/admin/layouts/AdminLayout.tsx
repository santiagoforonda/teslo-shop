import { useState } from "react";
import { AdminSideBar } from "../components/AdminSideBar";
import { AdminHeader } from "../components/AdminHeader";
import { Outlet } from "react-router";

const AdminLayout = () => {

  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  return (
     <div className="bg-gray-50 flex">
      <AdminSideBar 
        isCollapse={sidebarCollapsed} 
        onToggle={() => setSidebarCollapsed(!sidebarCollapsed)} 
      ></AdminSideBar>
      
      <div className="flex-1 flex flex-col">
       <AdminHeader></AdminHeader>
        
        <main className="flex-1 p-6">
          {/* Welcome Section */}
          <Outlet></Outlet>
        </main>
      </div>
    </div>
  )
}

export default AdminLayout;
