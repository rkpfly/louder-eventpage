import { Navigate, Outlet } from "react-router-dom";

export default function RequireAdminAuth() {
  const isAdminLoggedIn = localStorage.getItem("token");

  if (!isAdminLoggedIn) {
    return <Navigate to="/admin/login" replace />;
  }

  return <Outlet />;
}
