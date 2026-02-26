import { useEffect, useState } from "react";
import { getVehicles } from "../api/vehicles";
import DataTable from "../components/common/DataTable";

export default function Vehicles() {
  const [vehicles, setVehicles] = useState([]);

  useEffect(() => {
    async function fetchVehicles() {
      const data = await getVehicles();
      setVehicles(data);
    }
    fetchVehicles();
  }, []);

  const columns = [
    { header: "License Plate", accessor: "license_plate" },
    { header: "Capacity", accessor: "max_capacity" },
    { header: "Status", accessor: "status" },
    { header: "Odometer", accessor: "odometer" },
  ];

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Vehicles</h1>
      <DataTable columns={columns} data={vehicles} />
    </div>
  );
}

const fetchVehicles = async () => {
  try {
    const data = await getVehicles();
    console.log("Vehicles data:", data);
    setVehicles(data);
  } catch (err) {
    console.error(err);
  }
};