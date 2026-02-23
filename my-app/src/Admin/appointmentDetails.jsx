import React from "react";
import { Link } from "react-router-dom";

const AppointmentDetails = ({ appointments = [], loading = false }) => {
  if (loading) {
    return (
      <tr>
        <td colSpan="11">Loading...</td>
      </tr>
    );
  }

  if (!appointments || !appointments.length) {
    return (
      <tr>
        <td colSpan="11">No appointments found.</td>
      </tr>
    );
  }

  return (
    <>
      {appointments.map((appointment, index) => (
        <tr
          key={appointment.$id}
          className="border-b hover:bg-gray-50 transition-colors"
        >
          <td className="px-6 py-4 text-sm font-bold text-gray-800">
            {index + 1}
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
            {appointment.date
              ? new Date(appointment.date).toLocaleDateString()
              : "-"}
          </td>
          <td className="px-6 py-4 text-sm text-gray-600">
            {appointment.doctor}
          </td>
          <td
            className="px-6 py-4 text-sm text-gray-600"
            style={{
              color:
                appointment.status === "completed"
                  ? "green"
                  : appointment.status === "cancelled"
                    ? "red"
                    : "blue",
            }}
          >
            {appointment.status}
          </td>
          <td>
            <Link to={`/admin/appointment-details/${appointment.$id}`}>
              <button className="bg-green-600 border p-2 rounded-md text-white font-sans">
                View Details
              </button>
            </Link>
          </td>
        </tr>
      ))}
    </>
  );
};

export default AppointmentDetails;
