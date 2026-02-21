import StatCard from "../components/common/StatCard";

export default function Dashboard() {
  const stats = {
    availableVehicles: 18,
    onTripVehicles: 6,
    inMaintenance: 2,
    totalDrivers: 24,
  };

  return (
    <div>
      <h1 className="text-[28px] font-semibold tracking-tight mb-10">
        Dashboard
      </h1>

      <div className="grid grid-cols-4 gap-6 mb-12">
        <StatCard
          label="Available Vehicles"
          value={stats.availableVehicles}
          subtext="Ready for dispatch"
        />

        <StatCard
          label="On Trip"
          value={stats.onTripVehicles}
          subtext="Currently active"
        />

        <StatCard
          label="In Maintenance"
          value={stats.inMaintenance}
          subtext="Unavailable vehicles"
        />

        <StatCard
          label="Total Drivers"
          value={stats.totalDrivers}
          subtext="Registered drivers"
        />
      </div>

      <div className="bg-white/5 border border-white/10 rounded-xl p-8">
        Upcoming analytics modules will appear here.
      </div>
    </div>
  );
}