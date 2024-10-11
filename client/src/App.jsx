// import { createBrowserRouter, RouterProvider } from 'react-router-dom';
// import Main from './components/Main';
// import Quiz from './components/Quiz';
// import Result from './components/Result';
import LoginPage from './auth/login/LoginPage'
import SignUpPage from './auth/signup/SignUpPage'
import { Routes, Route, Navigate } from "react-router-dom";
// import { Toaster } from "react-hot-toast";
import { useQuery } from "@tanstack/react-query";
// import LoadingSpinner from "./components/common/LoadingSpinner";

function App() {
  // const router = createBrowserRouter([
  //   {
  //     path: '/',
  //     element: <Main></Main>
  //   },
  //   {
  //     path: '/quiz',
  //     element: <Quiz></Quiz>
  //   },
  //   {
  //     path: '/result',
  //     element: <Result></Result>
  //   },
  // ])


  const {
    data: authUser,
    isLoading
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
      {/* <RouterProvider router={router}/> */}
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
    </>
  )
}

export default App
