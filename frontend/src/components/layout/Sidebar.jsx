export default function Sidebar() {
  return (
    <div className="w-64 bg-primary-900 border-r border-white/10 min-h-screen p-8">
      <h2 className="text-xl font-semibold mb-12 tracking-tight">
        FleetFlow
      </h2>

      <nav className="space-y-6 text-sm">
        <div className="text-primary-200 hover:text-white transition-colors cursor-pointer">
          Dashboard
        </div>
        <div className="text-primary-200 hover:text-white transition-colors cursor-pointer">
          Vehicles
        </div>
        <div className="text-primary-200 hover:text-white transition-colors cursor-pointer">
          Drivers
        </div>
        <div className="text-primary-200 hover:text-white transition-colors cursor-pointer">
          Dispatch
        </div>
      </nav>
    </div>
  );
}