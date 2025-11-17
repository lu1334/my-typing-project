import { Link, useNavigate } from "react-router-dom";

const drills = [
  {
    title: "Drill de errores típicos",
    description: "Secuencias conflictivas para reducir tropiezos.",
    to: "/drillErrores",
  },
  {
    title: "Tildes importantes",
    description: "Memoriza las combinaciones con acento más frecuentes.",
    to: "/tildes",
  },
  {
    title: "Signos españoles",
    description: "Memoriza las combinaciones con acento más frecuentes.",
    to: "/signos",
  },
  {
    title: "Mezcla",
    description: "Memoriza las combinaciones con acento más frecuentes.",
    to: "/mezcla",
  },
];

export function LayoutDrills() {
  const navigate = useNavigate();
  return (
    <section className="session-screen layout-drills">
      <header className="layout-drills__header">
        <p className="eyebrow">Bloque 2 — 5 minutos</p>
        <h2>Elige el drill</h2>
        <p>Escoge el patrón que quieras practicar hoy antes del texto real.</p>
      </header>

      <ul className="layout-drills__list">
        {drills.map((drill) => (
          <li key={drill.title}>
            <Link to={drill.to}>
              <div>
                <h3>{drill.title}</h3>
                <p>{drill.description}</p>
              </div>
            </Link>
          </li>
        ))}
      </ul>
      <div className="layout-drills__actions">
        <button
          className="menu-button layout-drills__back"
          onClick={() => navigate(-1)}
        >
          Menú principal
        </button>
      </div>
    </section>
  );
}
