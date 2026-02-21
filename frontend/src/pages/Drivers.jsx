import { useEffect, useState } from "react";
import { getDrivers, createDriver } from "../api/drivers";
import DataTable from "../components/common/DataTable";
import StatusPill from "../components/common/StatusPill";

export default function Drivers() {
  const [drivers, setDrivers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [form, setForm] = useState({
    name: "",
    license_expiry: "",
  });

  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    fetchDrivers();
  }, []);

  const fetchDrivers = async () => {
    try {
      setLoading(true);
      const data = await getDrivers();
      setDrivers(data);
    } catch (err) {
      console.error(err);
      setError("Failed to load drivers");
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await createDriver({
        name: form.name,
        license_expiry: form.license_expiry,
      });

      setForm({ name: "", license_expiry: "" });
      setShowForm(false);
      fetchDrivers();
    } catch (err) {
      console.error("Error creating driver:", err);
      alert("Failed to create driver");
    }
  };

  const columns = [
    { header: "Name", accessor: "name" },
    { header: "License Expiry", accessor: "license_expiry" },
    {
      header: "Status",
      accessor: "status",
      render: (value) => <StatusPill status={value} />,
    },
  ];

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Drivers</h1>
        <button
          onClick={() => setShowForm(!showForm)}
          className="bg-blue-600 px-4 py-2 rounded"
        >
          Add Driver
        </button>
      </div>

      {showForm && (
        <form
          onSubmit={handleSubmit}
          className="bg-[#11183c] p-6 rounded-xl mb-6"
        >
          <div className="mb-4">
            <label className="block mb-2">Driver Name</label>
            <input
              type="text"
              value={form.name}
              onChange={(e) =>
                setForm({ ...form, name: e.target.value })
              }
              required
              className="w-full p-2 rounded bg-[#1b2559]"
            />
          </div>

          <div className="mb-4">
            <label className="block mb-2">License Expiry</label>
            <input
              type="date"
              value={form.license_expiry}
              onChange={(e) =>
                setForm({ ...form, license_expiry: e.target.value })
              }
              required
              className="w-full p-2 rounded bg-[#1b2559]"
            />
          </div>

          <button
            type="submit"
            className="bg-green-600 px-4 py-2 rounded"
          >
            Submit
          </button>
        </form>
      )}

      <DataTable columns={columns} data={drivers} />
    </div>
  );
}