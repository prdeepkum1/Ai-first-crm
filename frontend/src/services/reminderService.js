import api from "./api";

export const getReminders = async () => {
  const res = await api.get("/reminder/");
  return res.data;
};

export const deleteReminder = async (id) => {
  const res = await api.delete(`/reminder/${id}`);
  return res.data;
};