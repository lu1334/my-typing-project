import { useEffect, useRef } from "react";
import { useCronometro } from "../context/CronoContex";

export function Cronometro({ id }: { id: number }) {
  const { contador, enMarcha, setContador, iniciar, parar, reset } =
    useCronometro();

  const intervalo = useRef<number | null>(null);

  useEffect(() => {
    if (enMarcha) {
      intervalo.current = window.setInterval(() => {
        setContador((prev) => prev + 1);
      }, 1000);
    }

    return () => {
      clearInterval(intervalo.current!);
    };
  }, [enMarcha]);

  return (
    <div>
      <h1>{contador}s</h1>
      {contador === id ? (
        <button onClick={reset}>Reset</button>
      ) : (
        <>
          <button onClick={iniciar}>Iniciar</button>
          <button onClick={parar}>Parar</button>
        </>
      )}
    </div>
  );
}
