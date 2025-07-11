import AdminSidebar from "@/components/admin/AdminSidebar";
import AdminTopbar from "@/components/admin/AdminTopbar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import { useState } from "react";

export default function PostNewsForm() {
  const [status, setStatus] = useState(true);
  const [formData, setFormData] = useState({
    title: "",
    short_description: "",
    long_description: "",
    redirect_url: "",
    image: null,
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
      form.append("title", formData.title);
      form.append("short_description", formData.short_description);
      form.append("long_description", formData.long_description);
      form.append("redirect_url", formData.redirect_url);
      form.append("status", status.toString());
      form.append("image", formData.image);

      const response = await fetch(`${API_URL}/api/news/post-news`, {
        method: "POST",
        headers: {
          authorization: `${token}`,
        },
        body: form,
      });

      if (response.ok) {
        alert("News posted successfully!");
        setFormData({
          title: "",
          short_description: "",
          long_description: "",
          redirect_url: "",
          image: null,
        });
        setStatus(true);
      } else {
        const errorData = await response.json();
        console.error("Error posting news:", errorData);
        alert("Error posting news, "+ errorData.message);
      }
    } catch (error) {
      console.error("Network error:", error);
      alert("Network error. Please try again later.");
    }
  };

  return (
    <div className="flex min-h-screen bg-gray-50">
      <AdminSidebar />
      <div className="flex-1">
        <AdminTopbar />
        <div className="max-w-4xl mx-auto py-12 px-6">
          <h2 className="text-4xl font-bold mb-8 text-gray-800">Add News</h2>

          <form
            className="bg-white shadow rounded-xl p-8 space-y-6 border"
            onSubmit={handleSubmit}
          >
            <div className="space-y-2">
              <Label className="text-sm font-medium text-gray-700">Title</Label>
              <Input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleChange}
                placeholder="News Title"
                required
              />
            </div>

            <div className="space-y-2">
              <Label className="text-sm font-medium text-gray-700">Short Description</Label>
              <Textarea
                name="short_description"
                value={formData.short_description}
                onChange={handleChange}
                placeholder="Short summary (max 200 characters)"
                rows={3}
                maxLength={200}
                required
              />
            </div>

            <div className="space-y-2">
              <Label className="text-sm font-medium text-gray-700">Long Description</Label>
              <Textarea
                name="long_description"
                value={formData.long_description}
                onChange={handleChange}
                placeholder="Full description of the news"
                rows={6}
                required
              />
            </div>

            <div className="space-y-2">
              <Label className="text-sm font-medium text-gray-700">Upload Image</Label>
              <Input type="file" accept="image/*" onChange={handleFileChange} required />
            </div>

            <div className="space-y-2">
              <Label className="text-sm font-medium text-gray-700">Redirect URL</Label>
              <Input
                type="url"
                name="redirect_url"
                value={formData.redirect_url}
                onChange={handleChange}
                placeholder="https://example.com (Optional)"
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
                Post News
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
