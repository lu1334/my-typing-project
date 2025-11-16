import { useEffect, useRef } from "react";
import { useCronometro } from "../context/CronoContex";

export function Cronometro({ id }: { id: number }) {
  const { contador, enMarcha, setContador, iniciar, parar, reset } =
    useCronometro();

  const intervalo = useRef<number | null>(null);
  const progreso = Math.min((contador / id) * 100, 100);
  const haFinalizado = contador >= id;
  const tiempoFormateado = contador.toString().padStart(2, "0");

  useEffect(() => {
    if (enMarcha) {
      intervalo.current = window.setInterval(() => {
        setContador((prev) => prev + 1);
      }, 1000);
    }

    return () => {
      clearInterval(intervalo.current!);
    };
  }, [enMarcha, setContador]);

  return (
    <div className="timer-widget" aria-live="polite">
      <div className="timer-time">
        <span className="timer-label">Cronómetro</span>
        <p className="timer-display">
          {tiempoFormateado}
          <span>s</span>
        </p>
      </div>

      <div className="timer-progress">
        <div
          className="timer-track"
          role="progressbar"
          aria-valuemin={0}
          aria-valuemax={id}
          aria-valuenow={Math.min(contador, id)}
        >
          <span
            className="timer-fill"
            style={{ width: `${progreso}%` }}
            aria-hidden="true"
          />
        </div>
        <p className="timer-caption">Meta — {id}s</p>
      </div>

      <div className="timer-controls">
        {haFinalizado ? (
          <button className="primary-button" onClick={reset}>
            Volver a empezar
          </button>
        ) : (
          <>
            <button className="primary-button" onClick={iniciar}>
              Iniciar
            </button>
            <button className="ghost-button" onClick={parar}>
              Pausar
            </button>
            <button className="ghost-button" onClick={reset}>
              Reiniciar
            </button>
          </>
        )}
      </div>
    </div>
  );
}
