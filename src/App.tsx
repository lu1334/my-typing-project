import { Routes,Route } from 'react-router-dom'
import { Layout } from './components/Layout/Layout'
import { Home } from './components/Layout/Home'
import { CalentamientoPrecision } from './components/CalentamientoPrecision'
import { DrillErrores } from './components/DrillErrores'
import './App.css'

function App() {
 

  return (
    <Routes>
      <Route path='/' element={<Layout/>}>
      <Route index element={<Home/>}/>
      </Route>
     <Route path='calentamientoPrecision' element={<CalentamientoPrecision/>}/>
     <Route path='drillErrores' element={<DrillErrores/>}/>
    </Routes>
  )
}

export default App
