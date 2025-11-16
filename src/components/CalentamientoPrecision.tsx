import { useState ,useEffect} from "react";
import { useNavigate } from "react-router-dom";
import { Cronometro } from "./Cronometro";
import { useCronometro } from "../context/CronoContex";


export function CalentamientoPrecision() {

  const aux = useCronometro()
 
  const [texto, setTexto] = useState("");
  const navigate = useNavigate();

 useEffect(() => {
  if (aux.contador >= 5) {
    aux.setEnMarcha(false); // se apaga 
   
  }
}, [aux.contador]);
  return (
    <> 
    <Cronometro id={5}/> 
    {aux.contador >= 5 && <p>Ejercicio Finalizado</p>}
      <h2>BLOQUE 1 — 3 minutos</h2>
      <h3>Calentamiento de precisión:</h3>
      <p>
        Repite esta línea 3 veces sin usar backspace dentro de la palabra
        Escribe despacio, buscando exactitud absoluta :
      </p>

      <p>“que con los del para pero cuando”</p>
      {aux.contador <= 5?<input
        type="textarea"
        value={texto}
        onChange={(event) => setTexto(event.target.value)}
      />: <p>Tiempo finalizado</p>}
      
      <button onClick={()=>navigate(-1)}>Menu Principal</button>
    </>
  );
}
