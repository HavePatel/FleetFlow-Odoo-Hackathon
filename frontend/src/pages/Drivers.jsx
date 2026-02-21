import DataTable from "../components/common/DataTable";
import StatusPill from "../components/common/StatusPill";

export default function Drivers() {
  const drivers = [
    {
      id: 1,
      name: "Raj Patel",
      license_expiry: "2027-05-12",
      status: "AVAILABLE",
    },
    {
      id: 2,
      name: "Amit Shah",
      license_expiry: "2026-11-03",
      status: "ON_TRIP",
    },
    {
      id: 3,
      name: "Vikram Singh",
      license_expiry: "2025-02-18",
      status: "SUSPENDED",
    },
  ];

  const columns = [
    {
      header: "Driver Name",
      accessor: "name",
    },
    {
      header: "License Expiry",
      accessor: "license_expiry",
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
        Drivers
      </h1>

      <DataTable columns={columns} data={drivers} />
    </div>
  );
}