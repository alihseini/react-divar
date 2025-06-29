import { Toaster } from "react-hot-toast";
import { BrowserRouter, Navigate, Route, Routes } from "react-router";
import AuthPage from "./pages/AuthPage";
import HomePage from "./pages/HomePage";
import Dashboard from "./pages/Dashboard";
import NotFoundPage from "./pages/NotFoundPage";
import Admin from "./pages/Admin";
import { useQuery } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { getProfile } from "./services/user.js";
import Loader from "./components/modules/Loader.jsx";

function App() {
  const { data, isPending } = useQuery({
    queryKey: ["profile"],
    queryFn: getProfile,
  });
  if (isPending) return <Loader />;
  console.log(data);
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<HomePage />} />
          <Route
            path="/dashboard"
            element={data ? <Dashboard /> : <Navigate to="/auth" />}
          />
          <Route
            path="/auth"
            element={data ? <Navigate to="/dashboard" /> : <AuthPage />}
          />
          <Route
            path="/admin"
            element={
              data && data.role === "ADMIN" ? <Admin /> : <Navigate to="/" />
            }
          />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
      <Toaster position="top-center" reverseOrder={false} />
      <ReactQueryDevtools />
    </>
  );
}

export default App;
