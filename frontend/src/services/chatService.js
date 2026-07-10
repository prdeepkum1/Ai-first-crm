import api from "./api";

export const sendMessage = async (message) => {
  const res = await api.get("/chat/", {
    params: {
      message,
    },
  });

  return res.data;
};