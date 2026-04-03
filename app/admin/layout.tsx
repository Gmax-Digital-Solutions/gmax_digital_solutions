import AdminNavbar from "@/components/admin/AdminNavbar";
import Sidebar from "@/components/admin/AdminSidebar";

const AminLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Sidebar />
      <main className="ml-64 flex-1 min-h-screen relative">
        <AdminNavbar />
        {children}
      </main>
    </>
  );
};

export default AminLayout;
