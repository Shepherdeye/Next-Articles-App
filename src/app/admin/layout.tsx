import AdminSlidebar from "./AdminSlidebar";

interface AdminDashboardLayoutProps {
    children: React.ReactNode;
}




const AdminDashboardLayout = ({ children }: AdminDashboardLayoutProps) => {
    // throw new Error
    return (
        <div className="overflow-height flex justify-between ">
            <div className="lg:w-1/5 bg-gray-800  text-white flex flex-col pt-12">
                <AdminSlidebar />
            </div>
            <div className="w-4/5 pl-3 pt-5 flex justify-center h-10/12" >
                {children}
            </div>
        </div>
    )
}

export default AdminDashboardLayout