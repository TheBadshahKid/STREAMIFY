import { Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import HomePage from "@/pages/home/HomePage";
import AuthCallbackPage from "@/pages/auth-callback/AuthCallbackPage";
export default function App() {
  return (
    <>
      <Routes>
        <Route path='/auth-callback' element={<AuthCallbackPage />} />
        <Route path='/' element={<HomePage />} />
      </Routes>
      <Toaster />
    </>
  );
}
					