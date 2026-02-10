import React from "react";
import AppointmentDetails from "./appointmentDetails";

const adminAppointmentPage = () => {

  const FilterAppointment = () => {}


  return (
    <div className="p-8 bg-green-50 min-h-screen">
      <div className="flex items-center justify-between mb-2">
        <h1 className="text-2xl font-semibold font-serif text-gray-800">Appointment</h1>
        <div className="flex gap-2">
          <select name="" id="" className="border border-gray-300 rounded-md px-3 py-2 text-sm bg-white">
            <option value="">Today</option>
            <option value="">This Week</option>
            <option value="">This Month</option>
            <option value="">All Time</option>
          </select>
          <button className="bg-green-600 hover:bg-green-800 transition-colors text-white px-6 py-2 text-sm font-sansrounded-md">Appointment</button>
        </div>
      </div>

      <div>
        <span>Med</span><span>Lab</span>
        <span>APPOINTMENT</span>
      </div>

      

      <div className="mt-6 bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
        <table className="w-full text-left border-collapse bg-white border border-gray-200">
          <thead>
            <tr className="border-b bg-white border-gray-200">
              <th className="px-4 py-3 text-sm font-semibold font-sans text-gray-700 w-12">#</th>
              <th className="px-4 py-3 text-sm font-semibold font-sans text-gray-700">Name</th>
              <th className="px-4 py-3 text-sm font-semibold font-sans text-gray-700">Email</th>
              <th className="px-4 py-3 text-sm font-semibold font-sans text-gray-700">Age</th>
              <th className="px-4 py-3 text-sm font-semibold font-sans text-gray-700">Gender</th>
              <th className="px-4 py-3 text-sm font-semibold font-sans  text-gray-700">Phone</th>
              <th className="px-4 py-3 text-sm font-semibold font-sans text-gray-700">Department</th>
              <th className="px-4 py-3 text-sm font-semibold font-sans text-gray-700">Date</th>
              <th className="px-4 py-3 text-sm font-semibold font-sans text-gray-700">Doctor</th>
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-100">
            <AppointmentDetails />
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default adminAppointmentPage;
