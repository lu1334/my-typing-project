import { Link } from "react-router-dom";

export function LayoutDrills(){

    return(
        <ul>
            <li><Link to="calentamientoPrecision">Calentamiento Precision</Link></li>
            <li><Link to="drillErrores">Drill de Errores</Link></li>
            <li><Link to="tildes">Tildes Importantes</Link></li>
        </ul>
    )
}