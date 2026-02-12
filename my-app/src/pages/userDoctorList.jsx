import React, { useState, useEffect } from "react";

import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import { getRows } from "../utils/db";

const UserDoctorList = () => {
  const [doctors, setDoctors] = useState([]);
  const [loading, setLoading] = useState(true);

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
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {doctors.map((doctor, index) => (
          <div
            key={doctor.$id || index}
            className="group flex flex-col justify-center items-center gap-4 mt-10 border border-gray-100 bg-[#F9F9F9] transition-all pb-5 h-auto overflow-hidden rounded-md"
          >
            <div className="relative w-full h-64 overflow-hidden">
              <img
                src={doctor.Image || doctor.ImageURL || "/fallback.png"}
                alt={
                  `${doctor.FirstName || ""} ${doctor.LastName || ""}`.trim() ||
                  "Doctor"
                }
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />

              <div className="absolute left-0 right-0 bottom-0 flex justify-center gap-3 px-4 py-3 bg-green-800 text-white opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                <Facebook size={20} />
                <Twitter size={20} />
                <Instagram size={20} />
                <Linkedin size={20} />
              </div>
            </div>

            <div className="flex flex-col-reverse gap-1 p-4 w-full text-center">
              <p className="font-sans text-lg text-green-400">
                {doctor.Department || doctor.department}
              </p>
              <h3 className="font-serif text-2xl text-green-800">
                Dr {doctor.FirstName} {doctor.LastName}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserDoctorList;
