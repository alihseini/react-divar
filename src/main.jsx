import ReactDOM from "react-dom/client";
import { defaultOptions } from "./config/reactquery.js";


import App from "./App.jsx";

import "./styles/index.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient({ defaultOptions });

ReactDOM.createRoot(document.getElementById("root")).render(
  <QueryClientProvider client={queryClient}>
    <App />
  </QueryClientProvider>
);
