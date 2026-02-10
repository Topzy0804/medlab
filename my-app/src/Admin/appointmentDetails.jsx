import React, { useState, useEffect } from "react";

import { getRows } from "../utils/db";

const AppointmentDetails = () => {
  const [loading, setLoading] = useState(true);
  const [appointments, setAppointments] = useState([]);

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await getRows(
        import.meta.env.VITE_APPWRITE_APPOINTMENTS_TABLE_ID,
      );
      setAppointments(response.rows || []);
    } catch (error) {
      console.error("Error fetching appointments:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (loading) {
    return (
      <tr>
        <td colSpan="10">Loading...</td>
      </tr>
    );
  }

  if (!appointments.length) {
    return (
      <tr>
        <td colSpan="10">No appointments found.</td>
      </tr>
    );
  }

  return (
    <>
      {appointments.map((appointment) => (
        <tr
          key={appointment.$id}
          className="border-b hover:bg-gray-50 transition-colors"
        >
          <td className="px-6 py-4 text-sm font-bold text-gray-800">
            {/* {index + 1} */}
          </td>
          <td className="px-6 py-4">
            <div>
              <span className="text-sm font-medium text-gray-900">
                {appointment.fullName}
              </span>
            </div>
          </td>
          <td className="px-6 py-4 text-sm text-gray-600">
            {appointment.email}
          </td>
          <td className="px-6 py-4 text-sm text-gray-600">{appointment.age}</td>
          <td className="px-6 py-4 text-sm text-gray-600">
            {appointment.gender}
          </td>
          <td className="px-6 py-4 text-sm text-gray-600">
            {appointment.phoneNumber}
          </td>
          <td className="px-6 py-4 text-sm text-gray-600">
            {appointment.department}
          </td>
          <td className="px-6 py-4 text-sm text-gray-600">
            {new Date(appointment.date).toLocaleDateString()}
          </td>
          <td className="px-6 py-4 text-sm text-gray-600">
            {appointment.doctor}
          </td>
          <td>
            <button className="bg-green-600 border p-2 rounded-md text-white font-sans ">
              View
            </button>
          </td>
        </tr>
      ))}
    </>
  );
};

export default AppointmentDetails;
