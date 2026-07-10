

import { useEffect, useState } from "react";
import StatsCard from "../components/dashboard/StatsCard";
import RecentInteraction from "../components/dashboard/RecentInteraction";
import InteractionChart from "../components/dashboard/InteractionChart";
import { getInteractions } from "../services/interactionService";

export default function Dashboard() {
  const [interactions, setInteractions] = useState([]);

  useEffect(() => {
    loadDashboard();
  }, []);

  const loadDashboard = async () => {
    try {
      const data = await getInteractions();
      setInteractions(data);
    } catch (error) {
      console.log(error);
    }
  };

  const totalInteractions = interactions.length;

  const totalDoctors =
    new Set(interactions.map((item) => item.doctor_name)).size;

  const totalHospitals =
    new Set(interactions.map((item) => item.hospital)).size;

  const totalFollowUps =
    interactions.filter((item) => item.follow_up_date).length;

  return (
    <div className="space-y-8">

      <div>
        <h1 className="text-4xl font-bold text-gray-800">
          Dashboard
        </h1>

        <p className="text-gray-500 mt-2">
          Welcome to AI First CRM
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

        <StatsCard
          title="Doctors"
          value={totalDoctors}
          color="bg-blue-500"
        />

        <StatsCard
          title="Interactions"
          value={totalInteractions}
          color="bg-green-500"
        />

        <StatsCard
          title="Hospitals"
          value={totalHospitals}
          color="bg-orange-500"
        />

        <StatsCard
          title="Follow Ups"
          value={totalFollowUps}
          color="bg-purple-500"
        />

      </div>

      <InteractionChart interactions={interactions} />

      <RecentInteraction />

    </div>
  );
}