import React, { useState, useEffect } from "react";
import { getRows } from "../utils/db";
import { Facebook, Linkedin, Instagram, Twitter } from "lucide-react";


import { Link } from "react-router-dom";

const DoctorFullList = () => {
  const [loading, setLoading] = useState(true);
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    const fetchDoctors = async () => {
      try {
        const data = await getRows(
          import.meta.env.VITE_APPWRITE_DOCTORS_TABLE_ID,
        );
        const rows = Array.isArray(data)
          ? data
          : data?.rows || data?.documents || [];
        setDoctors(rows);
      } catch (error) {
        console.error("Error fetching doctors:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchDoctors();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (!doctors.length) return <div>No doctors found.</div>;

  return (
    <div className="grid md:grid-cols-5 grid-cols-2 gap-10 p-5 md:p-8">
    
      {doctors.map((doctor, index) => (
        <div
          key={doctor.$id || index}
          className="shadow-sm border border-green-200 rounded-xl  relative group"
        >
          <div className="flex flex-col bg-white group">
            <img
              src={doctor.Image || doctor.ImageURL || "/fallback.png"}
              alt={
                doctor.FirstName || doctor.LastName
                  ? `${doctor.FirstName || ""} ${doctor.LastName || ""}`.trim()
                  : "Doctor"
              }
              className="w-full md:h-72 h-56 object-cover rounded-md"
            />
            <div className="group-hover:bg-green-600 flex flex-col gap-3 justify-center items-center group-hover:text-white py-3">
              <h1>
                {doctor.FirstName} {doctor.LastName}
              </h1>
              <p>{doctor.Department || doctor.department}</p>
            </div>
            <div>
              <Link to={`/admin/doctors/${doctor.$id}`}>
                <button className="w-full h-12 border border-green-300 bg-green-600 text-xl text-white">View Details</button>
              </Link>
            </div>
          </div>

          <div className="flex flex-col gap-4 absolute top-0 left-0 py-8 px-6 invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all duration-300 text-green-800 font-bold">
          <div className="border rounded-full bg-green-300 p-3">
            <Facebook size={20} />
          </div>
          <div className="border rounded-full bg-green-300 p-3">
            <Linkedin size={20} />
          </div>
          <div className="border rounded-full bg-green-300 p-3">
            <Instagram size={20} />
          </div>
          <div className="border rounded-full bg-green-300 p-3">
            <Twitter size={20} />
          </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DoctorFullList;
