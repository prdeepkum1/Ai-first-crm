

import api from "./api";

export const getInteractions = async () => {
  const res = await api.get("/interactions/");
  return res.data;
};

export const createInteraction = async (data) => {
  const res = await api.post("/interactions/", data);
  return res.data;
};

export const updateInteraction = async (id, data) => {
  const res = await api.put(`/interactions/${id}`, data);
  return res.data;
};

export const deleteInteraction = async (id) => {
  const res = await api.delete(`/interactions/${id}`);
  return res.data;
};