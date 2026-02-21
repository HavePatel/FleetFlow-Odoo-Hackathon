import client from "./client";

export const getVehicles = async () => {
  const response = await client.get("/vehicles");
  return response.data;
};

export const createVehicle = async (data) => {
  const response = await client.post("/vehicles", data);
  return response.data;
};