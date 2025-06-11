import { Toaster } from "react-hot-toast";
import AuthPage from "./pages/AuthPage";

function App() {
  return (
    <div>
      <h1>پروژه دیوار</h1>
      <AuthPage />
      <Toaster position="top-center" reverseOrder={false} />
    </div>
  );
}

export default App;
