import LoginPage from './auth/login/LoginPage'
import SignUpPage from './auth/signup/SignUpPage'
import { Routes, Route, Navigate } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { useQuery } from "@tanstack/react-query";

function App() {

  const {
    data: authUser,
    // isLoading
  } = useQuery({
    queryKey: ["authUser"],
    queryFn: async () => {
      try {
        const res = await fetch("/api/auth/me");
        const data = await res.json();
        if (data.error) return null;
        if (!res.ok) {
          throw new Error(data.error || "Somthing went wrong");
        }
        console.log("authUser is here:", data);
        return data;
      } catch (error) {
        throw new Error(error);
      }
    },
  });

  return (
    <>
      <Routes>
        <Route
          path="/login"
          element={!authUser ? <LoginPage /> : <Navigate to="/" />}
        />
        <Route
          path="/signup"
          element={!authUser ? <SignUpPage /> : <Navigate to="/" />}
        />
      </Routes>
      <Toaster />
    </>
  )
}

export default App
