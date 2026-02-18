import { useState, useEffect } from "react";
import { getRows } from "../utils/db";

const PatientDetail = () => {
  const [loading, setLoading] = useState(true);
  const [patient, setPatient] = useState([]);

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await getRows(
        import.meta.env.VITE_APPWRITE_APPOINTMENTS_TABLE_ID,
      );
      setPatient(response.rows || []);
    } catch (error) {
      console.error("Error fetching patient details:", error);
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

  if (!patient.length) {
    return (
      <tr>
        <td colSpan="10">No patient details found.</td>
      </tr>
    );
  }

  return (
    <>
      {patient.map((patient) => (
        <tr key={patient.$id} className="border-b hover:bg-gray-50 text-left transition-colors">
        <td className="px-6 py-4 text-sm font-bold text-gray-800">
        <div>
          <span>{patient.fullName}</span>
        </div>
        </td>
        <td className="px-6 py-4 text-sm text-gray-600">
        <div>
          <span>{patient.age}</span>
        </div>
        </td>
        <td className="px-6 py-4 text-sm text-gray-600">
        <div>
          <span>{patient.gender}</span>
        </div>
        </td>
        <td className="px-6 py-4 text-sm text-gray-600">
        <div>
          <span>{patient.email}</span>
        </div>
        </td>
        <td className="px-6 py-4 text-sm text-gray-600">
        <div>
          <span>{patient.department}</span>
        </div>
        </td>
        <td className="px-6 py-4 text-sm text-gray-600"><div>
          <span>{new Date(patient.date).toLocaleDateString()}</span>
        </div>
        </td>

      

        </tr>
      ))}
  
    </>
  );
};

export default PatientDetail;
