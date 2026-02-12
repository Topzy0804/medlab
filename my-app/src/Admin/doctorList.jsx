import React, { useState, useEffect } from "react";

import { getRows } from "../utils/db";

const DoctorList = () => {
  const [loading, setLoading] = useState(true);
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    const fetchDoctors = async () => {
      try {
        const data = await getRows(
          import.meta.env.VITE_APPWRITE_DOCTORS_TABLE_ID,
        );
        console.log("Fetched doctors:", data);
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

  if (!doctors || doctors.length === 0) return <div>No doctors found.</div>;

  return (
    <div>
      {doctors.map((doctor, index) => (
        <div
          key={doctor.$id || index}
          className=" hover:bg-gray-50 transition-colors p-4 flex gap-3 "
        >
          <div>
            <img
              src={doctor.Image || doctor.ImageURL || "/fallback.png"}
              alt={
                doctor.FirstName || doctor.LastName
                  ? `${doctor.FirstName || ""} ${doctor.LastName || ""}`.trim()
                  : "Doctor"
              }
              className="w-30 h-30 object-cover"
            />
          </div>

          <div className="flex flex-col ml-4 text-start items-start justify-start gap-2">
            <h1 className="text-2xl font-serif font-bold text-gray-900">
              {doctor.FirstName} {doctor.LastName}
            </h1>
            <p className="text-lg font-sans text-gray-600">{doctor.Department || doctor.department}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DoctorList;
