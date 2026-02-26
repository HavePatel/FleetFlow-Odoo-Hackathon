import { useState } from "react";
import { validateDispatch } from "../../utils/dispatchValidator";

export default function DispatchForm({ vehicles, drivers }) {
  const [selectedVehicleId, setSelectedVehicleId] = useState("");
  const [selectedDriverId, setSelectedDriverId] = useState("");
  const [cargoWeight, setCargoWeight] = useState("");
  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState(false);

  const selectedVehicle = vehicles.find(v => v.id === Number(selectedVehicleId));
  const selectedDriver = drivers.find(d => d.id === Number(selectedDriverId));

  const handleSubmit = (e) => {
    e.preventDefault();
    setSuccess(false);

    const validationErrors = validateDispatch({
      vehicle: selectedVehicle,
      driver: selectedDriver,
      cargoWeight: Number(cargoWeight),
    });

    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      setSuccess(true);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-xl bg-white/5 p-8 rounded-2xl border border-white/10 space-y-6"
    >
      {/* Vehicle */}
      <div>
        <label className="block text-sm mb-2">Vehicle</label>
        <select
          value={selectedVehicleId}
          onChange={(e) => setSelectedVehicleId(e.target.value)}
          className="w-full bg-transparent border border-white/20 rounded-lg p-3"
        >
          <option value="">Select vehicle</option>
          {vehicles.map(v => (
            <option key={v.id} value={v.id}>
              {v.license_plate}
            </option>
          ))}
        </select>
        {errors.vehicle && (
          <p className="text-red-400 text-sm mt-1">{errors.vehicle}</p>
        )}
      </div>

      {/* Driver */}
      <div>
        <label className="block text-sm mb-2">Driver</label>
        <select
          value={selectedDriverId}
          onChange={(e) => setSelectedDriverId(e.target.value)}
          className="w-full bg-transparent border border-white/20 rounded-lg p-3"
        >
          <option value="">Select driver</option>
          {drivers.map(d => (
            <option key={d.id} value={d.id}>
              {d.name}
            </option>
          ))}
        </select>
        {errors.driver && (
          <p className="text-red-400 text-sm mt-1">{errors.driver}</p>
        )}
      </div>

      {/* Cargo */}
      <div>
        <label className="block text-sm mb-2">Cargo Weight (kg)</label>
        <input
          type="number"
          value={cargoWeight}
          onChange={(e) => setCargoWeight(e.target.value)}
          className="w-full bg-transparent border border-white/20 rounded-lg p-3"
        />
        {errors.cargoWeight && (
          <p className="text-red-400 text-sm mt-1">{errors.cargoWeight}</p>
        )}
      </div>

      <button
        type="submit"
        className="w-full bg-primary-700 hover:bg-primary-600 transition-all duration-200 rounded-lg p-3 font-medium"
      >
        Dispatch Trip
      </button>

      {success && (
        <div className="text-green-400 text-sm">
          Trip dispatched successfully.
        </div>
      )}
    </form>
  );
}