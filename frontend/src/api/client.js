import axios from "axios";

const client = axios.create({
  baseURL: "https://fleetflow-backend-wdy0.onrender.com",
  headers: {
    "Content-Type": "application/json",
  },
});

export default client;