import client from "./client";

export const dispatchTrip = async (data) => {
  const response = await client.post("/trips", data);
  return response.data;
};

export const completeTrip = async (tripId) => {
  const response = await client.put(`/trips/${tripId}/complete`);
  return response.data;
};