

import api from "./api";

export const getDoctors = async () => {
  const res = await api.get("/doctor/");
  return res.data;
};