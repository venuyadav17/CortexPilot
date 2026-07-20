import Sidebar from "../components/layout/Sidebar";
import TopNavbar from "../components/layout/TopNavbar";
import { useAuth } from "../context/AuthContext";

import {
  User,
  Mail,
  ShieldCheck,
} from "lucide-react";

export default function Profile() {
  const { user } = useAuth();

  return (
    <div className="flex h-screen bg-[#09090B] text-white">

      <Sidebar />

      <div className="flex flex-1 flex-col">

        <TopNavbar />

        <main className="flex-1 overflow-y-auto p-8">

          <h1 className="text-4xl font-bold">
            My Profile
          </h1>

          <p className="mt-2 text-zinc-400">
            View your account information.
          </p>

          <div className="mt-10 rounded-3xl border border-zinc-800 bg-zinc-900/70 p-8">

            <div className="flex justify-center">

              <div className="flex h-28 w-28 items-center justify-center rounded-full bg-violet-600">

                <User size={55} />

              </div>

            </div>

            <div className="mt-10 space-y-6">

              <div className="rounded-xl bg-zinc-800 p-5">

                <div className="flex items-center gap-3">

                  <Mail className="text-violet-400" />

                  <div>

                    <p className="text-sm text-zinc-500">

                      Email

                    </p>

                    <h2 className="text-lg font-semibold">

                      {user?.email}

                    </h2>

                  </div>

                </div>

              </div>

              <div className="rounded-xl bg-zinc-800 p-5">

                <div className="flex items-center gap-3">

                  <ShieldCheck className="text-green-400" />

                  <div>

                    <p className="text-sm text-zinc-500">

                      Account Status

                    </p>

                    <h2 className="text-lg font-semibold text-green-400">

                      Active

                    </h2>

                  </div>

                </div>

              </div>

            </div>

          </div>

        </main>

      </div>

    </div>
  );
}