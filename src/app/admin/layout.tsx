import AdminSlidebar from "./AdminSlidebar";

interface AdminDashboardLayoutProps {
    children: React.ReactNode;
}




const AdminDashboardLayout = ({ children }: AdminDashboardLayoutProps) => {
    return (
        <div className="overflow-height flex ">
            <div className="lg:w-1/5 bg-blue-600  text-white">
                <AdminSlidebar />
            </div>
            <div className="w-4/5 pl-3 pt-5 flex  h-10/12" >
                {children}
            </div>
        </div>
    )
}

export default AdminDashboardLayout