import DispatchForm from "../components/forms/DispatchForm";

export default function Dispatch() {
  const vehicles = [
    { id: 1, license_plate: "GJ01AB1234", max_capacity: 1000, status: "AVAILABLE" },
    { id: 2, license_plate: "MH12XY5678", max_capacity: 2000, status: "ON_TRIP" },
  ];

  const drivers = [
    { id: 1, name: "Raj Patel", license_expiry: "2027-05-12", status: "AVAILABLE" },
    { id: 2, name: "Amit Shah", license_expiry: "2024-01-01", status: "AVAILABLE" },
    { id: 3, name: "Vikram Singh", license_expiry: "2026-10-15", status: "SUSPENDED" },
  ];

  return (
    <div>
      <h1 className="text-[28px] font-semibold tracking-tight mb-10">
        Dispatch Trip
      </h1>

      <DispatchForm vehicles={vehicles} drivers={drivers} />
    </div>
  );
}