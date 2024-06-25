import { useEffect } from "react"
import { client } from "../supabase/client"
import { useNavigate } from "react-router-dom";

export function Dashboard() {
  const navigate = useNavigate();

  useEffect(() => {
    if (!client.auth.getUser()) {
      navigate("/Login");
    }
  }, [navigate]);

  return(
  
  <>
    <main className="min-h-screen w-screen flex items-center justify-center bg-gradient-to-b from-sky to-blue overflow-hidden">
      <div className="w-full md:w-1/2 bg-white p-8 rounded shadow">
        <div className="flex items-center font-bold justify-center">Sesion Iniciada</div>
          <div className="flex items-center justify-center">
            <button 
                  className="bg-blue hover:bg-blue/70 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition-colors" 
                  onClick={() => client.auth.signOut()}>
                    Logout
            </button>
        </div>
        </div>
    </main>
  </>
  )  
}

export default Dashboard
