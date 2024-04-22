import { isAdmin } from "@/lib/admin";
import dynamic from "next/dynamic";
import { redirect } from "next/navigation";

const AdminApp = dynamic(() => import("./AdminApp"), { ssr: false });

const AdminPage = async () => {
  if (!isAdmin()) {
    redirect("/");
  }

  return <AdminApp />;
};

export default AdminPage;
