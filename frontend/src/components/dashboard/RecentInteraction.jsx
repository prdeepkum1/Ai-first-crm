

import { useEffect, useState } from "react";
import { getInteractions } from "../../services/interactionService";
import {
  FaUserMd,
  FaHospital,
  FaCalendarAlt,
} from "react-icons/fa";

export default function RecentInteraction() {
  const [interactions, setInteractions] = useState([]);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    try {
      const data = await getInteractions();
      setInteractions(data.slice(-5).reverse());
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="bg-white rounded-3xl shadow-lg p-6">

      <div className="flex justify-between items-center mb-6">

        <h2 className="text-2xl font-bold">
          Recent Interactions
        </h2>

        <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-semibold">
          {interactions.length} Recent
        </span>

      </div>

      {interactions.length === 0 ? (

        <div className="text-center py-10 text-gray-500">
          <p className="text-5xl mb-4">📋</p>

          <h3 className="text-xl font-semibold">
            No Interactions Found
          </h3>

          <p className="mt-2">
            Start by creating your first interaction.
          </p>
        </div>

      ) : (

        interactions.map((item) => (

          <div
            key={item.id}
            className="border rounded-2xl p-5 mb-4 hover:shadow-xl hover:border-blue-300 transition-all duration-300"
          >

            <div className="flex justify-between items-start">

              <div>

                <h3 className="font-bold text-xl flex items-center gap-2">
                  <FaUserMd className="text-blue-600" />
                  {item.doctor_name}
                </h3>

                <p className="text-gray-500 flex items-center gap-2 mt-2">
                  <FaHospital className="text-red-500" />
                  {item.hospital}
                </p>

              </div>

              <span
                className={`px-4 py-2 rounded-full text-sm font-semibold h-fit ${
                  item.interaction_type === "Meeting"
                    ? "bg-green-100 text-green-700"
                    : item.interaction_type === "Call"
                    ? "bg-blue-100 text-blue-700"
                    : item.interaction_type === "Visit"
                    ? "bg-orange-100 text-orange-700"
                    : "bg-gray-100 text-gray-700"
                }`}
              >
                {item.interaction_type}
              </span>

            </div>

            <p className="text-gray-700 mt-4 leading-relaxed">
              {item.notes}
            </p>

            {item.follow_up_date && (

              <div className="mt-4 flex items-center gap-2 text-purple-600 font-medium">

                <FaCalendarAlt />

                <span>
                  Follow Up: {item.follow_up_date}
                </span>

              </div>

            )}

          </div>

        ))

      )}

    </div>
  );
}