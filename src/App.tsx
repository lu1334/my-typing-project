import { Routes, Route } from "react-router-dom";
import { Layout } from "./components/Layout/Layout";
import { Home } from "./components/Layout/Home";
import { CalentamientoPrecision } from "./components/CalentamientoPrecision";
import { DrillErrores } from "./components/DrillErrores";
import { TildesImportantes } from "./components/TildesImportantes";
import "./App.css";
import { LayoutDrills } from "./components/Layout/LayoutDrills";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
      </Route>
      <Route path="layoutDrill" element={<LayoutDrills />} />
      <Route
        path="calentamientoPrecision"
        element={<CalentamientoPrecision />}
      />
      <Route path="drillErrores" element={<DrillErrores />} />
      <Route path="tildes" element={<TildesImportantes />} />
    </Routes>
  );
}

export default App;
