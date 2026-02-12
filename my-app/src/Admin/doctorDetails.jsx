import { useEffect, useState } from "react";
import { getRow } from "../utils/db";
import { Facebook, Linkedin, Instagram, Twitter } from "lucide-react";
import { useParams } from "react-router-dom";


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
    <div className="bg-white p-10">
    <div className=" bg-green-50 min-h-screen shadow-2xl rounded-2xl">
    <div className="h-25 bg-green-600"></div>
    <div className="flex justify-start items-center px-10">
    <div className="border border-green-300 rounded-full shadow-2xl h-35 w-35 -mt-20 overflow-hidden bg-white ">
      <img 
      src={doctor.Image || 'https://via.placeholder.com/150'} 
      alt={doctor.FirstName}
      className="object-cover w-full h-full"
       />
    </div>
    <div className="flex flex-col text-left">
      <h1 className="text-2xl font-bold font-serif ml-4">{doctor.FirstName} {doctor.LastName}</h1>
      <p className="ml-4 text-lg font-sans">{doctor.Department}</p>
    </div>
    </div>

    <div className="flex flex-col gap-4 justify-center p-10 items-start">
      <h1 className="font-serif text-3xl font-bold">Overview</h1>
      <p>{doctor.bio}</p>
    </div>
    </div>
    </div>
  )
}

export default DoctorDetails