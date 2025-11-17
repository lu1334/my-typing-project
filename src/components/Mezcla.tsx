import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Cronometro } from "./Cronometro";
import { useCronometro } from "../context/CronoContex";

const FRASE_OBJETIVO =
  "¿cómo sería la función? también quiero probar crear algo rápido.";
const LISTADO_OBJETIVO = FRASE_OBJETIVO.split(" ");

export function Mezcla() {
  const { contador, setEnMarcha } = useCronometro();
  const [texto, setTexto] = useState<string>("");
  const [contadorTexto, setContadorTexto] = useState<number>(0);
  const navigate = useNavigate();
  const finalizado = contador >= 120;

  useEffect(() => {
    if (contador >= 120) {
      setEnMarcha(false);
    }
  }, [contador, setEnMarcha]);

  useEffect(() => {
    if (!texto.endsWith(" ")) return;

    const palabras = texto.trim().split(" ");
    const ultima = palabras[palabras.length - 1];
    const esCorrecta = LISTADO_OBJETIVO.includes(ultima);

    if (!esCorrecta) {
      setContadorTexto((prev) => prev + 1);
    }
  }, [texto]);

  useEffect(() => {
    if (contador === 120) {
      const palabras = texto.trim().split(" ");
      const ultima = palabras[palabras.length - 1];

      if (ultima.length === 0) return;

      const esCorrecta = LISTADO_OBJETIVO.includes(ultima);

      if (!esCorrecta) {
        setContadorTexto((prev) => prev + 1);
      }
    }
  }, [contador, texto]);

  useEffect(() => {
    if (contador === 0) {
      setTexto("");
      setContadorTexto(0);
    }
  }, [contador]);

  return (
    <section className="session-screen">
      <div className="timer-panel">
        <Cronometro id={120} />
        <div className="timer-meta">
          <p className={`status-pill ${finalizado ? "success" : ""}`}>
            {finalizado ? "Ejercicio finalizado" : "Mantén la precisión"}
          </p>
          <button className="menu-button" onClick={() => navigate(-1)}>
            Menú drill
          </button>
        </div>
      </div>

      <article className="session-card">
        <header className="session-header">
          <p className="eyebrow">Bloque 2 — 5 minutos</p>
          <h2>Drills de errores típicos del español:</h2>
          <p>2 minutos — mezcla:</p>
          <p>
            <strong>Escribe frases cortas que combinen todo</strong> Repite esta
            línea tres veces sin usar backspace dentro de cada palabra. Escribe
            despacio, buscando exactitud absoluta.
          </p>
        </header>

        <div className="quote-panel">
          <p>{FRASE_OBJETIVO}</p>
        </div>

        {!finalizado ? (
          <textarea
            className="precision-input"
            placeholder="Escribe aquí cuando empiece el cronómetro…"
            value={texto}
            onChange={(event) => setTexto(event.target.value)}
            rows={4}
            disabled={finalizado}
          />
        ) : (
          <div className="result-panel">
            <p className="result-title">
              {contadorTexto
                ? "Buen trabajo, sigue puliendo esas teclas ✨"
                : "¡Precisión impecable!"}
            </p>
            <p className="result-value">
              {contadorTexto} {contadorTexto === 1 ? "fallo" : "fallos"}
            </p>
            <p className="result-detail">
              Reinicia el cronómetro cuando quieras comenzar otro pase.
            </p>
          </div>
        )}
      </article>
    </section>
  );
}
