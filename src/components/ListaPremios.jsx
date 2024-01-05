import { useEffect, useState } from "react"
import { getAllPremios } from "../api/premios.api"
import TarjetaPremio from "./TarjetaPremio";


export default function ListaPremios() {

    const [premios, setPremios] = useState([]); 

useEffect(() => {
    async function loadPremios(){
       const res = await getAllPremios();
       setPremios(res.data)
    }
    loadPremios();
},[])

  return (
    <div>{premios.map(premio => (
        < TarjetaPremio key={premio.id} premio={ premio } />
    ))}</div>
  )
}
