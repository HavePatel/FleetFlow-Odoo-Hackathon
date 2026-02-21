import DataTable from "../components/common/DataTable";
import StatusPill from "../components/common/StatusPill";

export default function Vehicles() {
  const vehicles = [
    {
      id: 1,
      license_plate: "GJ01AB1234",
      max_capacity: 2000,
      status: "AVAILABLE",
    },
    {
      id: 2,
      license_plate: "GJ05CD5678",
      max_capacity: 1500,
      status: "ON_TRIP",
    },
    {
      id: 3,
      license_plate: "GJ09EF9999",
      max_capacity: 1800,
      status: "IN_SHOP",
    },
  ];

  const columns = [
    {
      header: "License Plate",
      accessor: "license_plate",
    },
    {
      header: "Capacity (kg)",
      accessor: "max_capacity",
    },
    {
      header: "Status",
      accessor: "status",
      cell: (row) => <StatusPill status={row.status} />,
    },
  ];

  return (
    <div>
      <h1 className="text-[28px] font-semibold tracking-tight mb-10">
        Vehicles
      </h1>

      <DataTable columns={columns} data={vehicles} />
    </div>
  );
}