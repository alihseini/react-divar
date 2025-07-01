import { Toaster } from "react-hot-toast";
import { BrowserRouter, Navigate, Route, Routes } from "react-router";
import AuthPage from "./pages/AuthPage";
import HomePage from "./pages/HomePage";
import Dashboard from "./pages/DashboardPage.jsx";
import NotFoundPage from "./pages/NotFoundPage";
import AdminPage from "./pages/AdminPage";
import { useQuery } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { getProfile } from "./services/user.js";
import Loader from "./components/modules/Loader.jsx";
import Layout from "./layout/layout.jsx";
import ProfilePage from "./pages/ProfilePage.jsx";

function App() {
  const { data, isPending } = useQuery({
    queryKey: ["profile"],
    queryFn: getProfile,
  });
  if (isPending) return <Loader />;
  return (
    <>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route index element={<HomePage />} />
            <Route
              path="/dashboard"
              element={data ? <Dashboard /> : <Navigate to="/auth" />}
            />
            <Route
              path="/profile"
              element={data ? <ProfilePage /> : <Navigate to="/auth" />}
            />
            <Route
              path="/auth"
              element={data ? <Navigate to="/dashboard" /> : <AuthPage />}
            />
            <Route
              path="/admin"
              element={
                data && data.role === "ADMIN" ? <AdminPage /> : <Navigate to="/" />
              }
            />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Layout>
      </BrowserRouter>
      <Toaster position="top-center" reverseOrder={false} />
      <ReactQueryDevtools />
    </>
  );
}

export default App;
