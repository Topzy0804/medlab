import { useEffect, useState } from "react";
import { getRow } from "../utils/db";
import { Facebook, Linkedin, Instagram, Twitter } from "lucide-react";
import { useParams } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

import { Link } from "react-router-dom";


const DoctorDetails = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
const [doctor, setDoctor] = useState(null);

useEffect(() => {
  const fetchDoctorDetails = async () => {
    try {
      const data = await getRow(
       import.meta.env.VITE_APPWRITE_DOCTORS_TABLE_ID, id
      );
      setDoctor(data);
    } catch (error) {
console.error("Error fetching doctor details:", error);
    } finally {
setLoading(false);
    }
  };
fetchDoctorDetails();
}, [id]);

if (loading) return <div>Loading...</div>;
if (!doctor) return <div>Doctor not found.</div>;


  return (
    <div className="bg-white md:p-10 p-6 rounded-2xl shadow-lg">
    <div className=" bg-green-50 min-h-screen shadow-2xl rounded-2xl">
    <div className="md:h-24 h-28 bg-green-600"></div>
    <div className="flex flex-col md:flex-row md:justify-start justify-center items-start md:items-center md:px-10 px-6 ">
    <div className="border border-green-300 rounded-full shadow-2xl md:h-35 md:w-35 w-28 h-28 -mt-20 overflow-hidden bg-white ">
      <img 
      src={doctor.Image || 'https://via.placeholder.com/150'} 
      alt={doctor.FirstName}
      className="object-cover w-full h-full"
       />
    </div>
    <div className="flex flex-col text-left">
      <h1 className="md:text-2xl text-xl font-bold font-serif ml-4">{doctor.FirstName} {doctor.LastName}</h1>
      <p className="ml-4 md:text-lg text-md font-sans"><span>Department: </span>{doctor.Department}</p>
    </div>
    </div>

    <div className="flex flex-col gap-4 justify-center p-10 items-start">
      <h1 className="font-serif md:text-3xl text-2xl font-bold">Overview</h1>
      <p>{doctor.bio}</p>
    </div>
    </div>
     <Link
            to="/admin/doctors"
            className="flex items-center gap-2 text-green-600 mb-8 hover:underline"
          >
            <ArrowLeft className="w-4 h-4" /> Back
          </Link>
    </div>
  )
}

export default DoctorDetails