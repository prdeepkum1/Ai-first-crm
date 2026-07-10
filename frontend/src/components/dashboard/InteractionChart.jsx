
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from "recharts";

export default function InteractionChart({ interactions }) {

  const totalDoctors =
    new Set(interactions.map((item) => item.doctor_name)).size;

  const totalHospitals =
    new Set(interactions.map((item) => item.hospital)).size;

  const totalInteractions = interactions.length;

  const totalFollowUps =
    interactions.filter((item) => item.follow_up_date).length;

  const chartData = [
    {
      name: "Doctors",
      value: totalDoctors,
    },
    {
      name: "Interactions",
      value: totalInteractions,
    },
    {
      name: "Hospitals",
      value: totalHospitals,
    },
    {
      name: "Follow Ups",
      value: totalFollowUps,
    },
  ];

  return (
    <div className="bg-white rounded-2xl shadow-lg p-6">

      <h2 className="text-2xl font-bold mb-6">
        CRM Analytics
      </h2>

      <ResponsiveContainer width="100%" height={320}>

        <BarChart data={chartData}>

          <CartesianGrid strokeDasharray="3 3" />

          <XAxis dataKey="name" />

          <YAxis />

          <Tooltip />

          <Bar
            dataKey="value"
            fill="#2563eb"
            radius={[10, 10, 0, 0]}
          />

        </BarChart>

      </ResponsiveContainer>

    </div>
  );
}