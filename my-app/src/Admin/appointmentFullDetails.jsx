import React from "react";
import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { getRow } from "../utils/db";
import { ArrowLeft } from "lucide-react";

const AppointmentFullDetails = () => {
  const { id } = useParams();

  const [appointment, setAppointment] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchAppointmentDetails = async (id) => {
    setLoading(true);
    try {
      const response = await getRow(
        import.meta.env.VITE_APPWRITE_APPOINTMENTS_TABLE_ID,
        id,
      );
      setAppointment(response);
    } catch (error) {
      console.error("Error fetching appointment details:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (id) fetchAppointmentDetails(id);
  }, [id]);

  if (loading) {
    return <div>Loading appointment details...</div>;
  }
  if (!appointment) {
    return <div>No appointment details found.</div>;
  }

  return (
    <div className="p-8 bg-green-50 min-h-screen max-w-4xl mx-auto rounded-md">
      <Link
        to="/admin/appointments"
        className="flex items-center gap-2 text-green-600 mb-8 hover:underline"
      >
        <ArrowLeft className="w-4 h-4" /> Back to Blogs
      </Link>
      <div className="flex flex-col items-start justify-between mb-6">
        <h1 className="text-4xl font-semibold font-serif text-gray-800">
          Appointment Details
        </h1>

        <div>
          <h3 className="text-2xl font-serif font-bold text-gray-800 capitalize text-left px-4 pt-3">{appointment?.fullName}</h3>

          <div className="flex flex-col justify-center items-start capitalize gap-4 mt-4 bg-green-50 p-4 rounded-md">
            <h1 className="text-3xl font-serif font-bold">patient Details</h1>

            <div className="flex flex-col justify-center items-start font-sans gap-2 text-gray-700 text-lg">
              <p>
                email: <span>{appointment?.email}</span>
              </p>
              <p className="flex items-center gap-2">
                age: <span>{appointment?.age}</span><span>Years</span>
              </p>
              <p>
                gender: <span>{appointment?.gender}</span>
              </p>
            </div>
          </div>

          <div className="flex flex-col justify-center items-start capitalize gap-4 mt-4 bg-green-50 p-4 rounded-md">
            <h1 className="text-3xl font-serif font-bold">medical details</h1>
            <p className="flex items-center gap-2 font-sans text-gray-700 text-lg">
              department: <span>{appointment.department}</span>
            </p>
            <p className="flex items-center gap-2 font-sans text-gray-700 text-lg">
              doctor: <span>{appointment.doctor}</span>
            </p>
            <p className="flex items-center gap-2 font-sans text-gray-700 text-lg">
              date: <span>{appointment.date}</span>
            </p>
            <p className="flex items-center gap-2 font-sans text-gray-700 text-lg">
              message: <span>{appointment.message}</span>
            </p>
          </div>
        </div>
        <div className="flex justify-start items-center gap-4 mt-6 font-sans">
          <button className="bg-blue-500 rounded-xl hover:bg-blue-700 text-white font-bold py-4 px-4 rounded">
            Process Appointment
          </button>
          <button className="bg-green-500 rounded-xl hover:bg-green-700 text-white font-bold py-4 px-4 rounded ml-2">
            Complete Appointment
          </button>
          <button className="bg-red-500 rounded-xl hover:bg-red-700 text-white font-bold py-4 px-4 rounded ml-2">
            Cancel Appointment
          </button>
        </div>
      </div>
    </div>
  );
};

export default AppointmentFullDetails;
