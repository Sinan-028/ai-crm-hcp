import api from "./api";

export const getHCPs = async () => {
  const response = await api.get("/api/hcps/");
  return response.data;
};

export const getUsers = async () => {
  const response = await api.get("/api/users/");
  return response.data;
};

export const getInteractions = async () => {
  const response = await api.get("/api/interactions/");
  return response.data;
};