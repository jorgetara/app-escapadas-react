import config from "../package.json"
import './App.css'

import Formulario from "./formulario/Formulario"

function App() {




  return (
    <>
      <h1>{config.name}</h1>
      <h2>{config.version}</h2>
      <Formulario></Formulario>
    </>
  )
}

export default App
