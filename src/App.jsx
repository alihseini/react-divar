import { Toaster } from "react-hot-toast";
import { BrowserRouter, Route, Routes } from "react-router";
import AuthPage from "./pages/AuthPage";
import HomePage from "./pages/HomePage";
import Dashboard from "./pages/Dashboard";
import NotFoundPage from "./pages/NotFoundPage";
import Admin from "./pages/Admin";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { defaultOptions } from "./config/reactquery.js";

const queryClient = new QueryClient({ defaultOptions });
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route index element={<HomePage />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/auth" element={<AuthPage />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
      <Toaster position="top-center" reverseOrder={false} />
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
}

export default App;
