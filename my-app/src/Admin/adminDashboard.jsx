import React, { useState, useEffect, useMemo } from "react";
import {
  Accessibility,
  FileText,
  Users,
  Ambulance,
  BriefcaseMedical,
  Syringe,
  ChevronDown,
} from "lucide-react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  RadialBarChart,
  RadialBar,
} from "recharts";

import { getRows } from "../utils/db";

const DEPARTMENT_COLORS = {
  Neurology: "#ef4444",
  "Dental Care": "#f59e0b",
  Gynecology: "#10b981",
  Cardilogy: "#3b82f6",
  Other: "#cbd5e1",
};

const StatCard = ({ icon: Icon, value, label, color }) => (
  <div className="flex items-center gap-4 bg-white p-4 rounded-xl shadow-sm border border-gray-100">
    <div className={`p-3 rounded-lg ${color} bg-opacity-10 text-green-600`}>
      <Icon size={24} />
    </div>
    <div>
      <h3 className="text-xl font-bold text-gray-800">{value}</h3>
      <p className="text-sm text-gray-500 font-medium">{label}</p>
    </div>
  </div>
);
const AdminDashboard = () => {
  const [barData, setBarData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [doctorCount, setDoctorCount] = useState(0);
  const [appointmentCount, setAppointmentCount] = useState(0);
  const [activeDept, setActiveDept] = useState(null);
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    const fetchAppointments = async () => {
      try {
        const response = await getRows(
          import.meta.env.VITE_APPWRITE_APPOINTMENTS_TABLE_ID,
        );
        const rows = Array.isArray(response)
          ? response
          : response?.rows || response?.documents || [];
        const formattedData = processAppointmentData(rows);
        setBarData(formattedData);
        setAppointments(rows);
        setAppointmentCount(rows.length);
      } catch (error) {
        console.error("Error fetching appointment data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchAppointments();
  }, []);

  useEffect(() => {
    const fetchDoctor = async () => {
      try {
        const response = await getRows(
          import.meta.env.VITE_APPWRITE_DOCTORS_TABLE_ID,
        );
        const rows = Array.isArray(response)
          ? response
          : response?.rows || response?.documents || [];
        setDoctorCount(rows.length);
      } catch (error) {
        console.error("Error fetching doctor data:", error);
      }
    };

    fetchDoctor();
  }, []);

  const processAppointmentData = (appointments) => {
    const dataMap = {};
    appointments.forEach((appointment) => {
      const dateStr =
        appointment?.date ||
        appointment?.createdAt ||
        appointment?.$createdAt ||
        appointment?.created_at;
      const month = dateStr
        ? new Date(dateStr).toLocaleString("default", { month: "short" })
        : "Unknown";
      if (!dataMap[month])
        dataMap[month] = { name: month, men: 0, women: 0, kids: 0 };
      const gender = (appointment.gender || appointment.sex || "")
        .toString()
        .toLowerCase();
      if (gender.startsWith("m")) dataMap[month].men += 1;
      else if (gender.startsWith("f")) dataMap[month].women += 1;
      else dataMap[month].kids += 1;
    });
    return Object.values(dataMap);
  };

  const { chartData, totalCount } = useMemo(() => {
    if (appointments.length === 0) return { chartData: [], totalCount: 0 };

    const counts = appointments.reduce((acc, app) => {
      const dept = app.department || "Other";
      acc[dept] = (acc[dept] || 0) + 1;
      return acc;
    }, {});

    const total = appointments.length;
    const formattedData = Object.keys(counts)
      .map((name) => ({
        name,
        value: Math.round((counts[name] / total) * 100),
        fill: DEPARTMENT_COLORS[name] || DEPARTMENT_COLORS["Other"],
      }))
      .sort((a, b) => a.value - b.value);

    return { chartData: formattedData, totalCount: total };
  }, [appointments]);

  if (loading)
    return <div className="p-10 text-center">Loading Analytics...</div>;

  return (
    <div className="bg-slate-50 min-h-screen md:p-6 p-4 overflow-x-hidden">
      <div className="flex justify-between items-center mb-6">
        <h1 className="font-semibold text-xl md:text-2xl text-gray-800">Dashboard</h1>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-8 text-left">
        <StatCard
          icon={Accessibility}
          value={barData.reduce(
            (sum, month) => sum + month.men + month.women + month.kids,
            0,
          )}
          label="Patients"
          color="bg-green-100"
        />
        <StatCard
          icon={FileText}
          value="$2164"
          label="Avg. costs"
          color="bg-green-100"
        />
        <StatCard
          icon={Users}
          value={doctorCount}
          label="Staff Members"
          color="bg-green-100"
        />
        <StatCard
          icon={Ambulance}
          value="16"
          label="Vehicles"
          color="bg-green-100"
        />
        <StatCard
          icon={BriefcaseMedical}
          value={appointmentCount}
          label="Appointment"
          color="bg-green-100"
        />
        <StatCard
          icon={Syringe}
          value="10"
          label="Operations"
          color="bg-green-100"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-10 text-left">
        <div className="bg-white lg:col-span-2 p-4 md:p-6 rounded-2xl shadow-sm border border-gray-100">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6">
            <h2 className="font-bold text-gray-700">
              Patients visit by Gender
            </h2>
            <div className="flex gap-2">
              <span className="flex items-center gap-1 text-xs">
                <div className="w-3 h-3 bg-blue-500 rounded-full" /> Men
              </span>
              <span className="flex items-center gap-1 text-xs">
                <div className="w-3 h-3 bg-green-500 rounded-full" /> Women
              </span>
              <span className="flex items-center gap-1 text-xs">
                <div className="w-3 h-3 bg-amber-500 rounded-full" /> Kids
              </span>
            </div>
          </div>

          <div className="md:h-[350px] h-[300px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={barData}>
                <CartesianGrid
                  strokeDasharray="3 3"
                  vertical={false}
                  stroke="#f0f0f0"
                />
                <XAxis dataKey="name" axisLine={false} tickLine={false} />
                <YAxis axisLine={false} tickLine={false} />
                <Tooltip />
                <Bar
                  dataKey="men"
                  fill="#3b82f6"
                  radius={[4, 4, 0, 0]}
                  barSize={8}
                />
                <Bar
                  dataKey="women"
                  fill="#10b981"
                  radius={[4, 4, 0, 0]}
                  barSize={8}
                />
                <Bar
                  dataKey="kids"
                  fill="#f59e0b"
                  radius={[4, 4, 0, 0]}
                  barSize={8}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
        <div className="bg-white md:p-6 p-4 rounded-2xl shadow-sm border border-gray-100 w-full">
          <div className="flex justify-between items-start mb-4">
            <h2 className="font-bold text-gray-700 leading-tight">
              Patients by <br /> Department
            </h2>
            {/* <button className="flex items-center gap-2 border border-gray-200 px-3 py-1.5 rounded-lg text-sm text-gray-600 hover:bg-gray-50">
              Today <ChevronDown size={14} />
            </button> */}
          </div>
          <div className="h-[300px] w-full relative ">
            <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
              <span
                className="text-green-400 font-medium text-lg transition-colors"
                style={{ color: activeDept ? activeDept.fill : "" }}
              >
                {activeDept?.name || "total"}
              </span>
              <span className="text-3xl font-bold text-gray-500">
                {activeDept ? `${activeDept.value}%` : totalCount}
              </span>
            </div>

            <ResponsiveContainer width="100%" height="100%">
              <RadialBarChart
                cx="50%"
                cy="50%"
                innerRadius="30%"
                outerRadius="100%"
                barSize={60}
                data={chartData}
                startAngle={90}
                endAngle={450}
              >
                <RadialBar
                  minAngle={15}
                  background={{ fill: "#f1f5f9" }}
                  clockWise
                  dataKey="value"
                  cornerRadius={10}
                  onMouseEnter={(entry) =>
                    setActiveDept(entry?.payload || entry)
                  }
                  onMouseLeave={() => setActiveDept(null)}
                />
                <Tooltip />
              </RadialBarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3">

      <div className="bg-white mt-10 md:p-6 p-4 rounded-2xl shadow-sm border border-gray-100 w-full">
        <div className="flex flex-col sm:flex-row items-start justify-between sm:items-center mb-6">
          <h3 className="text-xl md:text-2xl text-left font-serif font-bold">Latest Appointment</h3>
          <p className="md:text-lg text-sm font-semibold text-gray-700 font-sans">{appointmentCount} Appointments</p>
        </div>
        <div className="flex gap-4 flex-col">
          {appointments.slice(0, 5).map((appointment) => (
            <div
              key={appointment.$id || appointment.id}
              className="flex  justify-between items-center gap-15"
            >
              <img
                src={appointment.image || "/fallback.png"}
                alt={appointment.fullName || "Appointment"}
                className="md:w-16 w-10 md:h-16 h-10 object-cover rounded-md"
              />
              <div className="flex flex-col justify-center">
                <h3 className="font-medium text-lg font-serif">
                  {appointment.fullName || "Unknown"}
                </h3>
                <p className="text-sm text-gray-500 font-sans">
                  Book on  {new Date(appointment.date).toLocaleDateString()}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
