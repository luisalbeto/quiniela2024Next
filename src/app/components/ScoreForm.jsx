import { useState } from "react"
import { client } from "../supabase/client"

function ScoreForm () {
    
    const [localScore, setLocalScore] = useState(0)
    const [visitorScore, setVisitorScore] = useState(0)

    const handleSubmit = async e => {
        e.preventDefault()

        try{
            const user = await client.auth.getUser()
            const result = await client.from("scores").insert({
                local_score: localScore,
                visitor_score: visitorScore,
                userId: user.data.user.id,
            })
                     
          console.log(result)
          alert("Marcador Agregado!");

        }catch(error) {
            console.error(error, error.message)
        }
   
    }
    return(
        <div className="bg-brick rounded-lg shadow p-4 w-50 mx-auto mt-8">
            <form onSubmit={handleSubmit}
                    className="flex items-center justify-center space-x-4">
                <input
                    className="w-10 h-10 text-3xl text-black bg-white rounded-full text-center font-bold outline-none focus:ring-2 focus:ring-blue/50 focus:ring-opacity-50" 
                    type="number" 
                    placeholder="0"
                    onChange={(e) => setLocalScore(e.target.value)} />
                <input
                    className="w-10 h-10 text-3xl text-black bg-white rounded-full text-center font-bold outline-none focus:ring-2 focus:ring-blue/50 focus:ring-opacity-50"
                    type="number" 
                    placeholder="0"
                    onChange={(e) => setVisitorScore(e.target.value)} />
                    <button className="bg-blue text-white py-1 px-1 rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue/50">save</button>
            </form>
        </div>
    )
}

export default ScoreForm