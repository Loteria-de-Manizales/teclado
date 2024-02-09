import { useEffect, useState } from "react"
import { getAllResultados } from "../api/axios/resultados.api"

export const UltimoResultado = ({ ultimoResultado, setUltimoResultado }) => {

    const [parciales, setParciales ] = useState([]);

    const handleClick = () => {
        setUltimoResultado(parciales[parciales.length-1])       
     }

    useEffect(() => {
        const loadParciales = async function () {
           const res = await getAllResultados();
           setParciales(res.data)
           handleClick()
        }
        loadParciales();
    },[])


   

    //setUltimoResultado(parciales[0])

    return (
        <>
            <div id="carouselExample" className="carousel slide">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <h1>
                            {
                                ultimoResultado ? `NUMEROS: ${ultimoResultado.numero} SERIE: ${ultimoResultado.serie}` : "RESULTADOS"
                            }
                        </h1>

                    </div>

                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button onClick={handleClick} className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </>
    )
}
