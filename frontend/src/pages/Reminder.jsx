

import { useEffect, useState } from "react";
import { getReminders } from "../services/reminderService";

export default function Reminder() {
  const [reminders, setReminders] = useState([]);

  useEffect(() => {
    loadReminders();
  }, []);

  const loadReminders = async () => {
    try {
      const data = await getReminders();
      setReminders(data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">
        Reminders
      </h1>

      <div className="space-y-4">
        {reminders.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-xl shadow p-5"
          >
            <h2 className="font-bold text-lg">
              {item.doctor_name}
            </h2>

            <p className="text-gray-500">
              {item.message}
            </p>

            <p className="text-sm text-blue-600 mt-2">
              {item.reminder_date}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}