import { Link } from "react-router-dom";

const bloques = [
  {
    titulo: "Calentamiento de precisión",
    tiempo: "Bloque 1 · 3 min",
    descripcion:
      "Arranca despacio y sin prisas, enfocándote en pulsaciones suaves y limpias.",
    to: "calentamientoPrecision",
    cta: "Entrar al bloque",
  },
  {
    titulo: "Drills de errores típicos",
    tiempo: "Bloque 2 · 5 min",
    descripcion:
      "Secuencias con combinaciones conflictivas del español para reducir tropiezos.",
    to: "layoutDrill",
    cta: "Entrar al bloque",
  },
  {
    titulo: "Texto real",
    tiempo: "Bloque 3 · 5 min",
    descripcion:
      "Fragmentos de código y notas técnicas para entrenar en contexto.",
    to: "corregir",
    cta: "Entrar al bloque",
   
  },
  {
    titulo: "Drill personalizado",
    tiempo: "Bloque 4 · 2 min",
    descripcion:
      "La parte creativa: diseña tu propio patrón para trabajarlo a diario.",
    to: "drillPersonalizado",
    cta: "Entrar al bloque", 
  },
  
];

export function Home() {
  return (
    <section className="home-screen">
      <header className="home-hero">
        <p className="eyebrow">Plan diario — 15 minutos</p>
        <h1>
          Mecano vibes
          <span> · precisión antes que velocidad</span>
        </h1>
        <p>
          Reduce errores al escribir, mejora la memoria muscular y conserva la
          cabeza libre para seguir programando.
        </p>
      </header>

      <div className="home-grid">
        {bloques.map((bloque) => (
          <article className="home-card" key={bloque.titulo}>
            <p className="tag">{bloque.tiempo}</p>
            <h3>{bloque.titulo}</h3>
            <p>{bloque.descripcion}</p>
              <Link className="pill-link" to={bloque.to}>
                {bloque.cta}
              </Link>
          </article>
        ))}
      </div>
    </section>
  );
}
