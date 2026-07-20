import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import ProtectedRoute from "./routes/ProtectedRoute";

import Landing from "./pages/Landing";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import Review from "./pages/Review";
import History from "./pages/History";
import Export from "./pages/Export";
import Profile from "./pages/Profile";
import Settings from "./pages/Settings";

// Temporary placeholders for upcoming phases
const PlaceholderPage = ({ title }: { title: string }) => (
  <div className="min-h-screen bg-[#09090B] flex items-center justify-center p-8">
    <div className="w-full max-w-lg rounded-3xl border border-zinc-800 bg-zinc-900/50 p-10 text-center backdrop-blur-xl">
      <h1 className="text-3xl font-bold text-white">
        {title}
      </h1>

      <p className="mt-4 text-zinc-400">
        This module will be implemented in the upcoming phase of CortexPilot.
      </p>

      <a
        href="/dashboard"
        className="mt-8 inline-flex rounded-xl bg-violet-600 px-6 py-3 font-medium text-white transition hover:bg-violet-500"
      >
        Back to Dashboard
      </a>
    </div>
  </div>
);

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>

          {/* Public Routes */}
          <Route path="/" element={<Landing />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          {/* Dashboard */}
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />

          {/* Upcoming Modules */}
          <Route
            path="/review"
            element={
              <ProtectedRoute>
                <Review />
              </ProtectedRoute>
            }
          />

          <Route
            path="/history"
            element={
              <ProtectedRoute>
                <History />
              </ProtectedRoute>
            }
          />

          <Route
            path="/profile"
            element={
              <ProtectedRoute>
                <Profile />
              </ProtectedRoute>
            }
          />

          <Route
            path="/settings"
            element={
              <ProtectedRoute>
                <Settings />
              </ProtectedRoute>
            }
          />

          <Route
            path="/export"
            element={
              <ProtectedRoute>
                <Export />
              </ProtectedRoute>
            }
          />

          {/* 404 */}
          <Route
            path="*"
            element={<Navigate to="/" replace />}
          />

        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;