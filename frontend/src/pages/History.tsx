import { useEffect, useState } from "react";

import Sidebar from "../components/layout/Sidebar";
import TopNavbar from "../components/layout/TopNavbar";

import HistoryCard from "../components/history/HistoryCard";

import {
  getHistory,
  type HistoryItem,
} from "../services/historyService";

export default function History() {

  const [reviews, setReviews] = useState<HistoryItem[]>([]);

  const [loading, setLoading] = useState(true);

  const [search, setSearch] = useState("");

  useEffect(() => {

    async function load() {

      try {

        const data = await getHistory();

        setReviews(data.reviews);

      } catch (err) {

        console.error(err);

      } finally {

        setLoading(false);

      }

    }

    load();

  }, []);

  const filtered = reviews.filter((item) =>
    item.review.summary.language
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  return (

    <div className="flex h-screen bg-[#09090B] text-white">

      <Sidebar />

      <div className="flex flex-1 flex-col">

        <TopNavbar />

        <main className="flex-1 overflow-y-auto p-8">

          <div className="mb-8">

            <h1 className="text-4xl font-bold">

              Review History

            </h1>

            <p className="mt-2 text-zinc-400">

              Browse all previous AI code reviews.

            </p>

          </div>

          <input
            value={search}
            onChange={(e)=>setSearch(e.target.value)}
            placeholder="Search by language..."
            className="mb-8 w-full rounded-xl border border-zinc-700 bg-zinc-900 px-5 py-3 outline-none"
          />

          {loading && (

            <p className="text-zinc-500">

              Loading...

            </p>

          )}

          <div className="grid gap-6">

            {filtered.map((review,index)=>(

              <HistoryCard

                key={index}

                item={review}

              />

            ))}

          </div>

        </main>

      </div>

    </div>

  );

}