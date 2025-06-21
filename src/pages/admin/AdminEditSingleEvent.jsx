import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import AdminSidebar from "@/components/admin/AdminSidebar";
import AdminTopbar from "@/components/admin/AdminTopbar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";

export default function AdminEditSingleEvent() {
  const { id } = useParams();
  const events = useSelector((state) => state.Events.events);
  const event = events.find((e) => e._id === id);

  const [eventData, setEventData] = useState(null);
  const [status, setStatus] = useState(true);
  const [newImage, setNewImage] = useState(null);

  useEffect(() => {
    if (event) {
      setEventData(event);
      setStatus(event.status);
    }
  }, [event]);

  const handleSave = async () => {
    try {
      const token = localStorage.getItem("token");
      const API_URL = import.meta.env.VITE_API_URL;

      const form = new FormData();
      form.append("name", eventData.name);
      form.append("start_date", eventData.start_date);
      form.append("end_date", eventData.end_date);
      form.append("description", eventData.description);
      form.append("redirection_url", eventData.redirection_url);
      form.append("status", status.toString());

      if (newImage) {
        form.append("image", newImage);
      }

      const response = await fetch(`${API_URL}/api/event/edit-event/${id}`, {
        method: "POST",
        headers: {
          authorization: `${token}`,
        },
        body: form,
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

        alert("Event updated successfully!");
      } else {
        if (contentType && contentType.includes("application/json")) {
          const errorData = await response.json();
          console.error("Error updating event:", errorData);
          alert("Error updating event. Token expired, login again.");
        } else {
          const text = await response.text();
          console.error("Error updating event (non-JSON):", text);
          alert("Error updating event.");
        }
      }
    } catch (error) {
      console.error("Network error updating event:", error);
      alert("Network error. Please try again later.");
    }
  };

  if (!eventData) return <div>Loading...</div>;
  const VITE_API_URL = import.meta.env.VITE_API_URL;

  return (
    <div className="flex min-h-screen bg-gray-50">
      <AdminSidebar />
      <div className="flex-1">
        <AdminTopbar />
        <div className="max-w-4xl mx-auto px-6 py-10">
          <h2 className="text-4xl font-bold mb-8 text-gray-800">Edit Event ID: {id}</h2>

          <div className="bg-white shadow rounded-xl py-4 p-8 space-y-6 border border-gray-300">
            <div className="space-y-2">
              <Label>Event Name</Label>
              <Input
                type="text"
                value={eventData.name}
                onChange={(e) =>
                  setEventData({ ...eventData, name: e.target.value })
                }
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label>Start Date</Label>
                <Input
                  type="datetime-local"
                  value={new Date(eventData.start_date).toISOString().slice(0, 16)}
                  onChange={(e) =>
                    setEventData({ ...eventData, start_date: e.target.value })
                  }
                />
              </div>
              <div className="space-y-2">
                <Label>End Date</Label>
                <Input
                  type="datetime-local"
                  value={new Date(eventData.end_date).toISOString().slice(0, 16)}
                  onChange={(e) =>
                    setEventData({ ...eventData, end_date: e.target.value })
                  }
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label>Event Description</Label>
              <Textarea
                rows={5}
                value={eventData.description}
                onChange={(e) =>
                  setEventData({ ...eventData, description: e.target.value })
                }
              />
            </div>

            <div className="space-y-2">
              <Label>Current Image</Label>
              <img
                src={`${VITE_API_URL + '/' + eventData.imgsrc}`}
                alt="Event"
                className="w-64 rounded"
              />
            </div>

            <div className="space-y-2">
              <Label>Upload New Image (optional)</Label>
              <Input
                type="file"
                accept="image/*"
                onChange={(e) => setNewImage(e.target.files[0])}
              />
            </div>

            <div className="space-y-2">
              <Label>Redirection URL</Label>
              <Input
                type="url"
                value={eventData.redirection_url}
                onChange={(e) =>
                  setEventData({
                    ...eventData,
                    redirection_url: e.target.value,
                  })
                }
              />
            </div>

            <div className="flex items-center justify-between pt-4 border-t border-gray-300">
              <div className="flex items-center space-x-2">
                <Switch checked={status} onCheckedChange={setStatus} />
                <Label className="text-sm text-gray-700">
                  {status ? "Active" : "Inactive"}
                </Label>
              </div>
              <Button
                className="px-6 py-2"
                onClick={handleSave}
              >
                Save Changes
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
