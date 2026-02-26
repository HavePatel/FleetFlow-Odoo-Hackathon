import StatCard from "../components/common/StatCard";

export default function Dashboard() {
  return (
    <div>
      <h1 className="text-2xl font-semibold mb-8 tracking-tight">
        Dashboard Overview
      </h1>

      <div className="grid grid-cols-4 gap-6">
        <StatCard
          title="Available Vehicles"
          value="18"
        />

        <StatCard
          title="On Trip"
          value="6"
        />

        <StatCard
          title="In Maintenance"
          value="2"
        />

        <StatCard
          title="Total Drivers"
          value="24"
        />
      </div>
    </div>
  );
}