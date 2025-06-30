import AdminSidebar from "@/components/admin/AdminSidebar";
import AdminTopbar from "@/components/admin/AdminTopbar";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";

export default function AdminAddAdmin() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    status: true,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
  e.preventDefault();

  if (formData.password !== formData.confirmPassword) {
    alert("Passwords do not match!");
    return;
  }

  try {
    const token = localStorage.getItem("token");
    const API_URL = import.meta.env.VITE_API_URL;
    const response = await fetch(`${API_URL}/api/admin/add-admin`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        authorization: `${token}`,
      },
      body: JSON.stringify({
        username: formData.username,
        email: formData.email,
        password: formData.password,
        status: formData.status,
      }),
    });

    const contentType = response.headers.get("content-type");

    if (response.ok) {
      if (contentType && contentType.includes("application/json")) {
        const data = await response.json();
        console.log("Success:", data);
      } else {
        const text = await response.text();
        console.log("Success (non-JSON):", text);
      }

      alert("Admin added successfully!");

      // Reset form
      setFormData({
        username: "",
        email: "",
        password: "",
        confirmPassword: "",
        status: true,
      });
    } else {
      if (contentType && contentType.includes("application/json")) {
        const errorData = await response.json();
        console.error("Error adding admin:", errorData);
        alert(errorData.message || "Error adding admin.");
      } else {
        const text = await response.text();
        console.error("Error adding admin (non-JSON):", text);
        alert("Error adding admin.");
      }
    }
  } catch (error) {
    console.error("Network error adding admin:", error);
    alert("Network error. Please try again later.");
  }
};


  return (
    <div className="flex min-h-screen bg-gray-50">
      <AdminSidebar />
      <div className="flex-1">
        <AdminTopbar />
        <div className="max-w-xl mx-auto px-6 py-10">
          <h2 className="text-4xl font-bold mb-8 text-gray-800">Add New Admin</h2>

          <form
            onSubmit={handleSubmit}
            className="bg-white shadow rounded-xl p-8 space-y-6 border border-gray-300"
          >
            <div className="space-y-2">
              <Label>Username</Label>
              <Input
                type="text"
                name="username"
                placeholder="Username"
                value={formData.username}
                onChange={handleChange}
                required
                className="border border-gray-400 focus:border-gray-600 focus:ring-0 shadow-sm"
              />
            </div>

            <div className="space-y-2">
              <Label>Email</Label>
              <Input
                type="email"
                name="email"
                placeholder="admin@example.com"
                value={formData.email}
                onChange={handleChange}
                required
                className="border border-gray-400 focus:border-gray-600 focus:ring-0 shadow-sm"
              />
            </div>

            <div className="space-y-2">
              <Label>Password</Label>
              <Input
                type="password"
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
                required
                className="border border-gray-400 focus:border-gray-600 focus:ring-0 shadow-sm"
              />
            </div>

            <div className="space-y-2">
              <Label>Confirm Password</Label>
              <Input
                type="password"
                name="confirmPassword"
                placeholder="Confirm Password"
                value={formData.confirmPassword}
                onChange={handleChange}
                required
                className="border border-gray-400 focus:border-gray-600 focus:ring-0 shadow-sm"
              />
            </div>

            <div className="flex items-center justify-between pt-4 border-t border-gray-300">
              <div className="flex items-center space-x-2">
                <Switch
                  checked={formData.status}
                  onCheckedChange={(checked) =>
                    setFormData({ ...formData, status: checked })
                  }
                />
                <Label className="text-sm text-gray-700">
                  {formData.status ? "Active" : "Inactive"}
                </Label>
              </div>

              <Button
                type="submit"
                className="px-6 py-2 text-base text-white"
              >
                Add Admin
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
