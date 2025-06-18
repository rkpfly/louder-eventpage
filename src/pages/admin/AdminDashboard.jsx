import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import AdminSidebar from "@/components/admin/AdminSidebar";
import AdminTopbar from "@/components/admin/AdminTopbar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useSelector } from "react-redux";

export default function AdminDashboard() {
  // const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(false);

  // const fetchEvents = async () => {
  //   try {
  //     const token = localStorage.getItem("token"); // adjust if using sessionStorage or cookies

  //     const res = await fetch(`${import.meta.env.VITE_API_URL}/api/event/admin-all-events`, {
  //       method: "GET",
  //       headers: {
  //         "Content-Type": "application/json",
  //         authorization: `${token}`,
  //       },
  //     });

  //     if (!res.ok) throw new Error("Failed to fetch events");

  //     const data = await res.json();
  //     setEvents(data);
  //   } catch (err) {
  //     console.error("Error fetching events:", err);
  //   } finally {
  //     setLoading(false);
  //   }
  // };


  // useEffect(() => {
  //   fetchEvents();
  // }, []);

  const events = useSelector((state) => state.Events.events);
  const formatDate = (isoDate) => {
    if (!isoDate) return "";
    const date = new Date(isoDate);
    return date.toLocaleDateString("en-GB", {
      day: "numeric",
      month: "short",
      year: "numeric",
      hour: "numeric",
      minute: "numeric",
      hour12: true,
    });
  };

  return (
    <div className="flex">
      <AdminSidebar />
      <div className="flex-1">
        <AdminTopbar />
        <div className="p-6">
          <h2 className="text-3xl font-bold mb-6">Events Dashboard</h2>

          {loading ? (
            <p className="text-lg text-center">Loading events...</p>
          ) : (
            <div className="overflow-auto rounded-md border">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="min-w-[160px]">Event Name</TableHead>
                    <TableHead>Start Date</TableHead>
                    <TableHead>End Date</TableHead>
                    <TableHead>Created On</TableHead>
                    <TableHead className="min-w-[200px]">Description</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {events.map((event) => (
                    <TableRow key={event._id}>
                      <TableCell className="font-medium">{event.name}</TableCell>
                      <TableCell>{formatDate(event.start_date)}</TableCell>
                      <TableCell>{formatDate(event.end_date)}</TableCell>
                      <TableCell>{formatDate(event.created_on)}</TableCell>
                      <TableCell className="max-w-[300px] truncate">{event.description}</TableCell>
                      <TableCell>
                        <Badge variant={event.status ? "default" : "destructive"}>
                          {event.status ? "Active" : "Inactive"}
                        </Badge>
                      </TableCell>
                      <TableCell className="space-x-2">
                        <Link to={`/admin/edit-event/${event._id}`}>
                          <Button className="size-sm">Edit</Button>
                        </Link>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
