import { Link } from "react-router-dom";
export function Home() {

  return (
    <>
      <h1>PLAN DIARIO DE MECANOGRAFÍA (15 MINUTOS)</h1>
      <h2>
        Objetivo: Reducir errores al escribir, mejorar precisión y mantener el
        enfoque principal en tus estudios de programación.
      </h2>
      <ul>
       <li><h3>BLOQUE 1 — 3 minutos</h3></li>
       <li><Link to="calentamientoPrecision">Calentamiento de precisión</Link></li>
       <li><h3>BLOQUE 2 — 5 minutos</h3></li>
       <li><Link to="drillErrores">Drills de errores típicos del español</Link></li>
       <li><h3>BLOQUE 3 — 5 minutos</h3></li>
       <li><Link to="texto">Texto real</Link></li>
       <li><h3>BLOQUE 4 — 2 minutos</h3></li>
       <li><Link to="drillPersonalizado">Drill personalizado</Link></li>
      </ul>
    </>
  );
}
