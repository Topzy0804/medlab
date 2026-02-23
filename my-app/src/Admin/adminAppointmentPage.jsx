import AppointmentDetails from "./appointmentDetails";
import React, { useEffect, useState } from "react";
import { getRows } from "../utils/db";

const AdminAppointmentPage = () => {
  const [appointments, setAppointments] = useState([]);
  const [filteredAppointments, setFilteredAppointments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState("");

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await getRows(
        import.meta.env.VITE_APPWRITE_APPOINTMENTS_TABLE_ID,
      );
      const rows = response.rows || [];
      setAppointments(rows);
      setFilteredAppointments(rows);
    } catch (error) {
      console.error("Error fetching appointments:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const applyFilter = (filterValue) => {
    setFilter(filterValue);
    const now = new Date();

    const result = appointments.filter((appointment) => {
      const appointmentDate = appointment.date
        ? new Date(appointment.date)
        : null;
      if (!appointmentDate) return false;

      if (filterValue === "today") {
        return appointmentDate.toDateString() === now.toDateString();
      }
      if (filterValue === "this-week") {
        const weekStart = new Date(now);
        weekStart.setDate(now.getDate() - now.getDay());
        weekStart.setHours(0, 0, 0, 0);
        const weekEnd = new Date(weekStart);
        weekEnd.setDate(weekStart.getDate() + 6);
        weekEnd.setHours(23, 59, 59, 999);
        return appointmentDate >= weekStart && appointmentDate <= weekEnd;
      }
      if (filterValue === "this-month") {
        return (
          appointmentDate.getMonth() === now.getMonth() &&
          appointmentDate.getFullYear() === now.getFullYear()
        );
      }
      return true;
    });

    setFilteredAppointments(result);
  };

  return (
    <div className="md:p-8 p-5 bg-green-50 min-h-screen">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-2">
        <h1 className="md:text-2xl text-xl font-semibold font-serif text-gray-800">
          Appointment
        </h1>
        <div className="flex flex-col md:flex-row md:gap-4 mt-2 md:mt-0 ">
          <select
            className="border border-gray-300 rounded-md px-3 py-2 text-sm bg-white w-full md:w-auto focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent"
            value={filter}
            onChange={(e) => applyFilter(e.target.value)}
          >
            <option value="">All Time</option>
            <option value="today">Today</option>
            <option value="this-week">This Week</option>
            <option value="this-month">This Month</option>
          </select>
          <button className="bg-green-600 hover:bg-green-800 transition-colors text-white px-6 py-2 text-sm font-sans rounded-md">
            Appointment
          </button>
        </div>
      </div>

      <div className="flex flex-col text-left">
        <h1 className="font-serif text-xl font-bold text-gray-800 mb-4">
          <span className="text-green-600">Med</span>
          <span>Lab</span>
        </h1>
        <span className="text-xl font-sans text-gray-600">APPOINTMENT</span>
      </div>

      <div className="mt-6 bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
        <table className="w-full text-left border-collapse bg-white border border-gray-200">
          <thead>
            <tr className="border-b bg-white border-gray-200">
              <th className="px-4 py-3 text-sm font-semibold font-sans text-gray-700 w-12">
                #
              </th>
              <th className="px-4 py-3 text-sm font-semibold font-sans text-gray-700">
                Name
              </th>
              <th className="px-4 py-3 text-sm font-semibold font-sans text-gray-700">
                Email
              </th>
              <th className="px-4 py-3 text-sm font-semibold font-sans text-gray-700">
                Age
              </th>
              <th className="px-4 py-3 text-sm font-semibold font-sans text-gray-700">
                Gender
              </th>
              <th className="px-4 py-3 text-sm font-semibold font-sans  text-gray-700">
                Phone
              </th>
              <th className="px-4 py-3 text-sm font-semibold font-sans text-gray-700">
                Department
              </th>
              <th className="px-4 py-3 text-sm font-semibold font-sans text-gray-700">
                Date
              </th>
              <th className="px-4 py-3 text-sm font-semibold font-sans text-gray-700">
                Doctor
              </th>
              <th className="px-4 py-3 text-sm font-semibold font-sans text-gray-700">
                Status
              </th>
              <th className="px-4 py-3 text-sm font-semibold font-sans text-gray-700">
                Actions
              </th>
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-100">
            <AppointmentDetails
              appointments={filteredAppointments}
              loading={loading}
            />
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminAppointmentPage;
