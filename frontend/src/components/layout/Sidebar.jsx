import { NavLink } from "react-router-dom";

export default function Sidebar() {
  const baseStyle =
    "block text-sm transition-colors px-2 py-2 rounded-md";

  const activeStyle =
    "bg-primary-600/20 text-white";

  const inactiveStyle =
    "text-primary-200 hover:text-white";

  return (
    <div className="w-64 bg-primary-900 border-r border-white/10 min-h-screen p-8">
      <h2 className="text-xl font-semibold mb-12 tracking-tight">
        FleetFlow
      </h2>

      <nav className="space-y-4">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `${baseStyle} ${isActive ? activeStyle : inactiveStyle}`
          }
        >
          Dashboard
        </NavLink>

        <NavLink
          to="/vehicles"
          className={({ isActive }) =>
            `${baseStyle} ${isActive ? activeStyle : inactiveStyle}`
          }
        >
          Vehicles
        </NavLink>
        <NavLink
  to="/drivers"
  className={({ isActive }) =>
    `${baseStyle} ${isActive ? activeStyle : inactiveStyle}`
  }
>
  Drivers
</NavLink>
      </nav>
    </div>
  );
}
