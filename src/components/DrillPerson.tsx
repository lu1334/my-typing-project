import { useState} from "react";
import { useNavigate } from "react-router-dom";
import { Cronometro } from "./Cronometro";

export function DrillPersonalizado() {
  const [texto, setTexto] = useState<string>("");
  const navigate = useNavigate();


  return (
    <section className="session-screen">
      <div className="timer-panel">
        <Cronometro id={600} />
        <div className="timer-meta">
          <button className="menu-button" onClick={() => navigate(-1)}>
            Menú principal
          </button>
        </div>
      </div>

      <article className="session-card">
        <header className="session-header">
          <p className="eyebrow">BLOQUE 4 — 2 minutos</p>
          <h2>Drill personalizado:</h2>
          <p>
            Repite 3–5 veces las palabras o combinaciones que fallaste hoy. Esto
            acelera la mejora.
          </p>
        </header>

        <textarea
          className="precision-input"
          placeholder="Escribe aquí cuando empiece el cronómetro…"
          value={texto}
          onChange={(event) => setTexto(event.target.value)}
          rows={4}
        />
        <p className="result-detail">
          Reinicia el cronómetro cuando quieras comenzar otro pase.
        </p>
      </article>
    </section>
  );
}
