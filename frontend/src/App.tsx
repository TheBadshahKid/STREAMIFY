import { Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import HomePage from "@/pages/home/HomePage";
import AuthCallbackPage from "@/pages/auth-callback/AuthCallbackPage";
import { AuthenticateWithRedirectCallback } from "@clerk/clerk-react";
import MainLayout from "./layout/MainLayout";
import ChatPage from "./pages/chat/ChatPage";

export default function App() {
  return (
    <>
      <Routes>
        <Route
					path='/sso-callback'
					element={<AuthenticateWithRedirectCallback signUpForceRedirectUrl={"/auth-callback"} />}
				/>
        <Route path='/auth-callback' element={<AuthCallbackPage />} />
        <Route element={<MainLayout />}>
          <Route path='/' element={<HomePage />} />
          <Route path='/chat' element={<ChatPage />} />
					{/* <Route path='/chat' element={<ChatPage />} />
					<Route path='/albums/:albumId' element={<AlbumPage />} />
					<Route path='*' element={<NotFoundPage />} /> */}
				</Route>
      </Routes>
      <Toaster />
    </>
  );
}
					