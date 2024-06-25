'use client'
import { useState, useEffect } from "react"
import { client } from "../supabase/client"
import { Logo } from "../components/Logo"
import { useTasks } from "../context/TaskContext";
import { useNavigate } from "react-router-dom";

export function Login() {

	const [email, setEmail] = useState("")
	const { loading, loginWithMagicLink } = useTasks()
	const navigate = useNavigate()
	const handleSubmit = (e) => {
	  e.preventDefault();
	  loginWithMagicLink(email);
	}
  
	useEffect(() => {
	  if (!client.auth.getUser()) {
		navigate("/Login");
	  }
	  console.log("called");
	}, [navigate]);

	return(
<>
  <main className="min-h-screen w-screen flex items-center justify-center bg-gradient-to-b from-sky to-blue overflow-hidden">
    <div className="w-full md:w-1/2 bg-white p-8 rounded shadow">
      <div className="flex items-center justify-center">
        <Logo />   
      </div>
      <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray text-sm font-bold mb-2">
              Inicia Sesion
            </label>		
            <input  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray leading-tight focus:outline-none focus:shadow-outline"
                  required
                  type="email" 
                  name="email" 
                  placeholder="Email" 
                  onChange={(e) => setEmail(e.target.value)}/>
          </div>
            <div className="flex items-center justify-center">
          <button
            disabled={loading} 
            className="bg-blue hover:bg-blue/70 hover:text-turquesa text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition-colors">
            {loading ? "Cargando..." : "Inicia Sesion"}</button></div>
      </form>
    </div>
  </main>
</>
	)
}

