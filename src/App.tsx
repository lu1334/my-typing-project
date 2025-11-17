import { Routes, Route } from "react-router-dom";
import { Layout } from "./components/Layout/Layout";
import { Home } from "./components/Layout/Home";
import { CalentamientoPrecision } from "./components/CalentamientoPrecision";
import { DrillErrores } from "./components/DrillErrores";
import { TildesImportantes } from "./components/TildesImportantes";
import { LayoutDrills } from "./components/Layout/LayoutDrills";
import { SignosESP } from "./components/signos_esp";
import { Mezcla } from "./components/Mezcla";
import { CorregirFinalTexto } from "./components/CorregirFrase";
import "./App.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
      </Route>
      <Route
        path="calentamientoPrecision"
        element={<CalentamientoPrecision />}
      />
      <Route path="layoutDrill" element={<LayoutDrills />} />
      <Route path="drillErrores" element={<DrillErrores />} />
      <Route path="tildes" element={<TildesImportantes />} />
      <Route path="signos" element={<SignosESP />} />
      <Route path="mezcla" element={<Mezcla />} />
      <Route path="corregir" element={<CorregirFinalTexto />} />
    </Routes>
  );
}

export default App;
