import AdminSidebar from "@/components/admin/AdminSidebar";
import AdminTopbar from "@/components/admin/AdminTopbar";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
  SelectValue,
} from "@/components/ui/select";
import { useSelector } from "react-redux";

export default function AdminCreateOffer() {
  const events = useSelector((state) => state.Events.events);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    event: "",
    valid_from: "",
    valid_till: "",
    status: true,
  });

  const [image, setImage] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const token = localStorage.getItem("token");
      const API_URL = import.meta.env.VITE_API_URL;

      const data = new FormData();
      data.append("title", formData.title);
      data.append("description", formData.description);
      data.append("event", formData.event);
      data.append("valid_from", formData.valid_from);
      data.append("valid_till", formData.valid_till);
      data.append("status", formData.status);
      if (image) {
        data.append("image", image);
      }

      const response = await fetch(`${API_URL}/api/offers/add-offer`, {
        method: "POST",
        headers: {
          authorization: token,
        },
        body: data,
      });

      const contentType = response.headers.get("content-type");

      if (response.ok) {
        const result = contentType?.includes("application/json")
          ? await response.json()
          : await response.text();

        alert("Offer created successfully!");
        setFormData({
          title: "",
          description: "",
          event: "",
          valid_from: "",
          valid_till: "",
          status: true,
        });
        
        setImage(null);
      } else {
        const errorText = contentType?.includes("application/json")
          ? (await response.json()).message
          : await response.text();
        alert(errorText || "Error creating offer.");
      }
    } catch (err) {
      console.error("Network error:", err);
      alert("Network error. Please try again.");
    }
  };

  return (
    <div className="flex min-h-screen bg-gray-50">
      <AdminSidebar />
      <div className="flex-1">
        <AdminTopbar />
        <div className="max-w-xl mx-auto px-6 py-10">
          <h2 className="text-4xl font-bold mb-8 text-gray-800">Create New Offer</h2>

          <form
            onSubmit={handleSubmit}
            className="bg-white shadow rounded-xl p-8 space-y-6 border border-gray-300"
          >
            <div className="space-y-2">
              <Label>Title</Label>
              <Input
                type="text"
                name="title"
                placeholder="Offer Title"
                value={formData.title}
                onChange={handleChange}
                required
              />
            </div>

            <div className="space-y-2">
              <Label>Description</Label>
              <Input
                type="text"
                name="description"
                placeholder="Short description"
                value={formData.description}
                onChange={handleChange}
                required
              />
            </div>

            <div className="space-y-2">
              <Label>Event</Label>
              <Select
                value={formData.event}
                onValueChange={(val) => setFormData((prev) => ({ ...prev, event: val }))}
              >
                <SelectTrigger className="w-full border border-gray-400 shadow-sm">
                  <SelectValue placeholder="Select Event" />
                </SelectTrigger>
                <SelectContent>
                  {events.map((event) => (
                    <SelectItem key={event._id} value={event._id}>
                      {event.name}
                    </SelectItem>
                  ))}
                  <SelectItem value="Others">All</SelectItem>
                </SelectContent>
                
              </Select>
            </div>

            <div className="space-y-2">
              <Label>Valid From</Label>
              <Input
                type="date"
                name="valid_from"
                value={formData.valid_from}
                onChange={handleChange}
                required
              />
            </div>

            <div className="space-y-2">
              <Label>Valid Till</Label>
              <Input
                type="date"
                name="valid_till"
                value={formData.valid_till}
                onChange={handleChange}
                required
              />
            </div>

            <div className="space-y-2">
              <Label>Offer Image</Label>
              <Input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                required
              />
            </div>

            <div className="flex items-center justify-between pt-4 border-t border-gray-300">
              <div className="flex items-center space-x-2">
                <Switch
                  checked={formData.status}
                  onCheckedChange={(checked) =>
                    setFormData((prev) => ({ ...prev, status: checked }))
                  }
                />
                <Label className="text-sm text-gray-700">
                  {formData.status ? "Active" : "Inactive"}
                </Label>
              </div>

              <Button type="submit" className="px-6 py-2 text-base text-white">
                Create Offer
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
