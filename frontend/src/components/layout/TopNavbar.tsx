import { Bell, Search } from "lucide-react";

export default function TopNavbar() {
  return (
    <header className="h-20 border-b border-zinc-800 flex items-center justify-between px-8">

      <div className="relative w-96">

        <Search
          className="absolute left-4 top-3.5 text-zinc-500"
          size={18}
        />

        <input
          placeholder="Search..."
          className="w-full rounded-xl border border-zinc-800 bg-zinc-900 py-3 pl-11 pr-4 text-white outline-none focus:border-violet-600"
        />

      </div>

      <div className="flex items-center gap-6">

        <button className="rounded-xl bg-zinc-900 p-3 transition hover:bg-zinc-800">

          <Bell />

        </button>

        <div className="flex items-center gap-3">

          <div className="flex h-11 w-11 items-center justify-center rounded-full bg-violet-600 text-white font-semibold">

            V

          </div>

          <div>

            <p className="font-semibold text-white">

              Venu

            </p>

            <p className="text-sm text-zinc-500">

              AI Developer

            </p>

          </div>

        </div>

      </div>

    </header>
  );
}