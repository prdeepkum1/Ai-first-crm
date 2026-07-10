

import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import {
  getInteractions,
  deleteInteraction,
} from "../services/interactionService";

export default function InteractionHistory() {
  const [interactions, setInteractions] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadInteractions();
  }, []);

  const loadInteractions = async () => {
    try {
      const data = await getInteractions();
      setInteractions(data);
    } catch (error) {
      console.log(error);
      toast.error("Failed to load interactions");
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this interaction?"
    );

    if (!confirmDelete) return;

    try {
      await deleteInteraction(id);

      setInteractions((prev) =>
        prev.filter((item) => item.id !== id)
      );

      toast.success("Interaction Deleted Successfully 🗑️");
    } catch (err) {
      console.log(err);
      toast.error("Delete Failed");
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-96">
        <div className="animate-spin rounded-full h-14 w-14 border-b-4 border-blue-600"></div>
      </div>
    );
  }

  return (
    <div>

      <div className="flex justify-between items-center mb-8">

        <div>

          <h1 className="text-4xl font-bold text-gray-800">
            Interaction History
          </h1>

          <p className="text-gray-500 mt-2">
            Manage all doctor interactions
          </p>

        </div>

      </div>

      <div className="bg-white rounded-2xl shadow-xl overflow-hidden">

        <table className="w-full">

          <thead className="bg-blue-600 text-white">

            <tr>

              <th className="p-4 text-left">
                Doctor
              </th>

              <th className="p-4 text-left">
                Hospital
              </th>

              <th className="p-4 text-left">
                Type
              </th>

              <th className="p-4 text-left">
                Follow Up
              </th>

              <th className="p-4 text-center">
                Actions
              </th>

            </tr>

          </thead>

          <tbody>

            {interactions.length === 0 ? (

              <tr>

                <td
                  colSpan={5}
                  className="text-center py-10 text-gray-500 text-lg"
                >
                  No Interaction Found
                </td>

              </tr>

            ) : (

              interactions.map((item) => (

                <tr
                  key={item.id}
                  className="border-b hover:bg-gray-50 transition"
                >

                  <td className="p-4 font-semibold">
                    {item.doctor_name}
                  </td>

                  <td className="p-4">
                    {item.hospital}
                  </td>

                  <td className="p-4">

                    <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm">

                      {item.interaction_type}

                    </span>

                  </td>

                  <td className="p-4">
                    {item.follow_up_date || "-"}
                  </td>

                  <td className="p-4">

                    <div className="flex justify-center gap-3">

                      <button
                        className="bg-amber-500 hover:bg-amber-600 transition text-white px-4 py-2 rounded-lg"
                      >
                        Edit
                      </button>

                      <button
                        onClick={() => handleDelete(item.id)}
                        className="bg-red-600 hover:bg-red-700 transition text-white px-4 py-2 rounded-lg"
                      >
                        Delete
                      </button>

                    </div>

                  </td>

                </tr>

              ))

            )}

          </tbody>

        </table>

      </div>

    </div>
  );
}