import React from 'react'
import PatientDetail from './patientDetail'

const adminPatientPage = () => {
  return (
    <div>
      <div className='mt-6 bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden'>
        <table className='w-full border-collapse bg-white border border-gray-200'>
          <thead>
            <tr className='border-b bg-white border-gray-200'>
              <th className="p-4 text-left font-sans font-semibold text-gray-700">Patient Name</th>
              <th className="p-4 text-left font-sans font-semibold text-gray-700">Age</th>
              <th className="p-4 text-left font-sans font-semibold text-gray-700">Gender</th>
              <th className="p-4 text-left font-sans font-semibold text-gray-700">Email</th>
              <th className="p-4 text-left font-sans font-semibold text-gray-700">Department</th>
              <th className="p-4 text-left font-sans font-semibold text-gray-700">Date</th>
              <th className="p-4 text-left font-sans font-semibold text-gray-700">Action</th>
            </tr>
          </thead>

          <tbody className='divide-y divide-gray-100'>
            <PatientDetail />
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default adminPatientPage