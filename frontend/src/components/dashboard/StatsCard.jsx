


import { FaUserDoctor } from "react-icons/fa6";
import {
  FaHospital,
  FaCalendarCheck,
  FaNotesMedical,
} from "react-icons/fa";

export default function StatsCard({ title, value, color }) {
  const getIcon = () => {
    switch (title) {
      case "Doctors":
        return <FaUserDoctor size={28} />;
      case "Interactions":
        return <FaNotesMedical size={28} />;
      case "Hospitals":
        return <FaHospital size={28} />;
      case "Follow Ups":
        return <FaCalendarCheck size={28} />;
      default:
        return <FaNotesMedical size={28} />;
    }
  };

  return (
    <div className="bg-white rounded-3xl shadow-lg p-6 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 border border-gray-100">

      <div className="flex justify-between items-center">

        <div>

          <p className="text-gray-500 font-medium">
            {title}
          </p>

          <h2 className="text-4xl font-bold mt-3">
            {value}
          </h2>

        </div>

        <div className={`${color} p-5 rounded-2xl text-white`}>
          {getIcon()}
        </div>

      </div>

    </div>
  );
}