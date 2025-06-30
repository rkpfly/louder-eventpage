import AdminSidebar from "@/components/admin/AdminSidebar";
import AdminTopbar from "@/components/admin/AdminTopbar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import { useState } from "react";

export default function AdminAddEvent() {
  const [status, setStatus] = useState(true);
  const [formData, setFormData] = useState({
    name: "",
    start_date: "",
    end_date: "",
    description: "",
    redirection_url: "",
    image: null, // file object
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      image: e.target.files[0],
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const token = localStorage.getItem("token");
      const API_URL = import.meta.env.VITE_API_URL;

      const form = new FormData();
      form.append("name", formData.name);
      form.append("start_date", formData.start_date);
      form.append("end_date", formData.end_date);
      form.append("description", formData.description);
      form.append("redirection_url", formData.redirection_url);
      form.append("status", status.toString());
      form.append("image", formData.image);

      const response = await fetch(`${API_URL}/api/event/add-event`, {
        method: "POST",
        headers: {
          authorization: `${token}`,
          // NOTE: don't set Content-Type — browser will set it automatically for FormData!
        },
        body: form,
      });

      if (response.ok) {
        alert("Event added successfully!");

        // Reset form
        setFormData({
          name: "",
          start_date: "",
          end_date: "",
          description: "",
          redirection_url: "",
          image: null,
        });
        setStatus(true);
      } else {
        const errorData = await response.json();
        console.error("Error adding event:", errorData);
        alert("Error adding event.");
      }
    } catch (error) {
      console.error("Network error adding event:", error);
      alert("Network error. Please try again later.");
    }
  };

  return (
    <div className="flex min-h-screen bg-gray-50">
      <AdminSidebar />
      <div className="flex-1">
        <AdminTopbar />
        <div className="max-w-4xl mx-auto py-12 px-6">
          <h2 className="text-4xl font-bold mb-8 text-gray-800">Add New Event</h2>

          <form
            className="bg-white shadow rounded-xl p-8 space-y-6 border"
            onSubmit={handleSubmit}
          >
            <div className="space-y-2">
              <Label className="text-sm font-medium text-gray-700">Event Name</Label>
              <Input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Event Name"
                required
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label className="text-sm font-medium text-gray-700">Start Date & Time</Label>
                <Input
                  type="datetime-local"
                  name="start_date"
                  value={formData.start_date}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label className="text-sm font-medium text-gray-700">End Date & Time</Label>
                <Input
                  type="datetime-local"
                  name="end_date"
                  value={formData.end_date}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label className="text-sm font-medium text-gray-700">Event Description</Label>
              <Textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                placeholder="Event Description"
                rows={5}
                required
              />
            </div>

            <div className="space-y-2">
              <Label className="text-sm font-medium text-gray-700">Upload Image</Label>
              <Input type="file" accept="image/*" onChange={handleFileChange} required />
            </div>

            <div className="space-y-2">
              <Label className="text-sm font-medium text-gray-700">Redirection URL</Label>
              <Input
                type="url"
                name="redirection_url"
                value={formData.redirection_url}
                onChange={handleChange}
                placeholder="https://your-event-landing-page.com"
                required
              />
              <p className="text-xs text-gray-500">Must be a valid URL starting with http(s).</p>
            </div>

            <div className="flex items-center justify-between pt-4 border-t border-gray-200">
              <div className="flex items-center space-x-2">
                <Switch checked={status} onCheckedChange={setStatus} />
                <Label className="text-sm text-gray-700">
                  {status ? "Active" : "Inactive"}
                </Label>
              </div>
              <Button type="submit" className="px-6 py-2 text-base">
                Add Event
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
