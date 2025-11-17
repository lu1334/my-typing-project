import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Cronometro } from "./Cronometro";
import { useCronometro } from "../context/CronoContex";

export function CorregirFinalTexto() {
  const { contador, setEnMarcha } = useCronometro();
  const [texto, setTexto] = useState<string>("");
  const navigate = useNavigate();
  const finalizado = contador >= 300;

  useEffect(() => {
    if (contador >= 300) {
      setEnMarcha(false);
    }
  }, [contador, setEnMarcha]);

  return (
    <section className="session-screen">
      <div className="timer-panel">
        <Cronometro id={300} />
        <div className="timer-meta">
          <p className={`status-pill ${finalizado ? "success" : ""}`}>
            {finalizado ? "Ejercicio finalizado" : "Mantén la precisión"}
          </p>
          <button className="menu-button" onClick={() => navigate(-1)}>
            Menú principal
          </button>
        </div>
      </div>

      <article className="session-card">
        <header className="session-header">
          <p className="eyebrow">BLOQUE 3 — 5 minutos</p>
          <h2>Texto real (modo controlado):</h2>
          <p>
            Escribe un párrafo durante 5 minutos con: - Velocidad baja - Sin
            borrar dentro de palabras -{" "}
            <strong>Corrección al final del párrafo</strong>
          </p>
          <p>Objetivo: Reducir errores poco a poco.</p>
        </header>

        <textarea
          className="precision-input"
          placeholder="Escribe aquí cuando empiece el cronómetro…"
          value={texto}
          onChange={(event) => setTexto(event.target.value)}
          rows={4}
          disabled={finalizado}
        />

        <p className="result-detail">
          Reinicia el cronómetro cuando quieras comenzar otro pase.
        </p>
      </article>
    </section>
  );
}
