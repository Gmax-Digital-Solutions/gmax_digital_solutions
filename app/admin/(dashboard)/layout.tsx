import AdminNavbar from "@/components/admin/AdminNavbar";
import Sidebar from "@/components/admin/AdminSidebar";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

const AdminLayout = async ({ children }: { children: React.ReactNode }) => {
  const session = await getServerSession();

  if (!session) {
    redirect("/admin/login");
  }
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

export default AdminLayout;
