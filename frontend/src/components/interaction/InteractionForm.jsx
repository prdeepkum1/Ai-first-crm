

import { useState } from "react";
import toast from "react-hot-toast";
import { createInteraction } from "../../services/interactionService";

export default function InteractionForm() {

  const [form, setForm] = useState({
    doctor_name: "",
    hospital: "",
    interaction_type: "",
    notes: "",
    follow_up_date: ""
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      setLoading(true);

      await createInteraction(form);

      toast.success("Interaction Saved Successfully 🎉");

      setForm({
        doctor_name: "",
        hospital: "",
        interaction_type: "",
        notes: "",
        follow_up_date: ""
      });

    } catch (err) {

      console.log(err);

      toast.error("Failed to Save Interaction ❌");

    } finally {

      setLoading(false);

    }

  };

  return (

    <form
      onSubmit={handleSubmit}
      className="space-y-4"
    >

      <input
        name="doctor_name"
        placeholder="Doctor Name"
        value={form.doctor_name}
        onChange={handleChange}
        className="w-full border rounded-lg p-3"
      />

      <input
        name="hospital"
        placeholder="Hospital"
        value={form.hospital}
        onChange={handleChange}
        className="w-full border rounded-lg p-3"
      />

      <select
        name="interaction_type"
        value={form.interaction_type}
        onChange={handleChange}
        className="w-full border rounded-lg p-3"
      >
        <option value="">Select Type</option>
        <option>Visit</option>
        <option>Call</option>
        <option>Meeting</option>
      </select>

      <textarea
        name="notes"
        placeholder="Notes"
        rows={5}
        value={form.notes}
        onChange={handleChange}
        className="w-full border rounded-lg p-3"
      />

      <input
        type="date"
        name="follow_up_date"
        value={form.follow_up_date}
        onChange={handleChange}
        className="w-full border rounded-lg p-3"
      />

      <button
        className="bg-blue-600 text-white px-6 py-3 rounded-lg"
      >
        {loading ? "Saving..." : "Save Interaction"}
      </button>

    </form>

  );

}