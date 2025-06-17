import { Outlet, useLocation } from "react-router-dom";
import Footer from "../components/footer";
import { useEffect } from "react";


export default function AdminLayout(){
    const location = useLocation();
        useEffect(() => {
            window.scrollTo(0, 0);
        }, [location]);


    return (
        <div className="min-h-screen">
        {/* <AdminHeader /> */}
                <main className="min-h-screen">
                    <Outlet />
                </main>
            <Footer />
        </div>
    );
}