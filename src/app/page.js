import { Routes, Route, useNavigate } from "react-router-dom"
import { useEffect } from "react"

import { Login } from "./pages/Login"
import { Quiniela } from "./pages/Quiniela"
import { NotFound } from "./pages/NotFound"
import { Dashboard } from "./pages/Dashboard"


import { client } from "./supabase/client"

import { Nav } from "./components/Nav"
import { Footer } from "./components/Footer"


import { TaskContextProvider } from "./context/TaskContext";
import { AuthProvider } from "./context/AuthContext";


export default function Home() {

  const navigate = useNavigate();

  useEffect(() => {
    client.auth.onAuthStateChange((_event, session) => {
      if (!session) {
        navigate("/Login");
      }
    });
  }, [navigate])
  return (
  <>
 <AuthProvider>
    <TaskContextProvider>
      <Nav/>
        <div className="container">
          <Routes >
            <Route path="/" element={<Dashboard/>}/>
            <Route path="/Login" element={<Login/>}/>
            <Route path="*" element={<NotFound/>}/>
            <Route path="/Quiniela" element={<Quiniela/>}/>
          </Routes>
        </div>
      <Footer/>
   </TaskContextProvider>
  </AuthProvider>

  </>
  );
}
