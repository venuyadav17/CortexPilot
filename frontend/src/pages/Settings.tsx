import Sidebar from "../components/layout/Sidebar";
import TopNavbar from "../components/layout/TopNavbar";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

import {
  Settings as SettingsIcon,
  Moon,
  Lock,
  Info,
  LogOut,
} from "lucide-react";

export default function Settings() {
  const { logout } = useAuth();
  const navigate = useNavigate();

  function handleLogout() {
    logout();
    navigate("/login");
  }

  return (
    <div className="flex h-screen bg-[#09090B] text-white">
      <Sidebar />

      <div className="flex flex-1 flex-col">
        <TopNavbar />

        <main className="flex-1 overflow-y-auto p-8">

          <div className="flex items-center gap-3">
            <SettingsIcon size={36} />
            <h1 className="text-4xl font-bold">Settings</h1>
          </div>

          <p className="mt-2 text-zinc-400">
            Manage your CortexPilot preferences.
          </p>

          <div className="mt-10 space-y-5">

            <div className="rounded-xl bg-zinc-900 border border-zinc-800 p-6">
              <div className="flex items-center gap-4">
                <Moon className="text-violet-400" />
                <div>
                  <h2 className="font-semibold">Theme</h2>
                  <p className="text-sm text-zinc-500">
                    Dark Mode (Coming Soon)
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-xl bg-zinc-900 border border-zinc-800 p-6">
              <div className="flex items-center gap-4">
                <Lock className="text-violet-400" />
                <div>
                  <h2 className="font-semibold">Change Password</h2>
                  <p className="text-sm text-zinc-500">
                    Feature coming soon.
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-xl bg-zinc-900 border border-zinc-800 p-6">
              <div className="flex items-center gap-4">
                <Info className="text-violet-400" />
                <div>
                  <h2 className="font-semibold">Application</h2>
                  <p className="text-sm text-zinc-500">
                    CortexPilot v1.0.0
                  </p>
                </div>
              </div>
            </div>

            <button
              onClick={handleLogout}
              className="flex w-full items-center justify-center gap-2 rounded-xl bg-red-600 px-5 py-4 font-semibold transition hover:bg-red-700"
            >
              <LogOut size={18} />
              Logout
            </button>

          </div>

        </main>
      </div>
    </div>
  );
}