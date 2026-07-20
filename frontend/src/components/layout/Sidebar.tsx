import {
  LayoutDashboard,
  Code2,
  History,
  FileDown,
  User,
  Settings,
  LogOut,
} from "lucide-react";
import { NavLink, useNavigate } from "react-router-dom";

const links = [
  {
    title: "Dashboard",
    icon: LayoutDashboard,
    path: "/dashboard",
  },
  {
    title: "Review Code",
    icon: Code2,
    path: "/review",
  },
  {
    title: "History",
    icon: History,
    path: "/history",
  },
  {
    title: "Exports",
    icon: FileDown,
    path: "/export", // ✅ Fixed (was /exports)
  },
  {
    title: "Profile",
    icon: User,
    path: "/profile",
  },
  {
    title: "Settings",
    icon: Settings,
    path: "/settings",
  },
];

export default function Sidebar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("cortex_token");
    localStorage.removeItem("cortex_user");
    navigate("/login");
  };

  return (
    <aside className="w-72 border-r border-zinc-800 bg-[#0D0D10] flex flex-col justify-between">
      <div>
        <div className="h-20 flex items-center justify-center border-b border-zinc-800">
          <h1 className="text-2xl font-bold tracking-wide">
            Cortex
            <span className="text-violet-500">Pilot</span>
          </h1>
        </div>

        <nav className="px-5 py-8 space-y-2">
          {links.map((item) => {
            const Icon = item.icon;

            return (
              <NavLink
                key={item.title}
                to={item.path}
                className={({ isActive }) =>
                  `flex items-center gap-3 rounded-xl px-4 py-3 transition-all duration-200 ${
                    isActive
                      ? "bg-violet-600 text-white"
                      : "text-zinc-400 hover:bg-zinc-900 hover:text-white"
                  }`
                }
              >
                <Icon size={20} />
                {item.title}
              </NavLink>
            );
          })}
        </nav>
      </div>

      <div className="p-5">
        <button
          onClick={handleLogout}
          className="flex w-full items-center justify-center gap-2 rounded-xl border border-red-500/30 bg-red-500/10 py-3 text-red-400 transition hover:bg-red-500/20"
        >
          <LogOut size={18} />
          Logout
        </button>
      </div>
    </aside>
  );
}