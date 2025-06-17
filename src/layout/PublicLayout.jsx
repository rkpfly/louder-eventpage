import { Outlet, useLocation } from "react-router-dom";
import Footer from "../components/footer";
import Header from "../components/header";
import SubscribePopup from "../components/subscribe-popup.jsx";
import { useEffect } from "react";


export default function PublicLayout(){
    const location = useLocation();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location]);


    return (
        <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-1">
                <Outlet />
            </main>
            <Footer />
        </div>
    );
};