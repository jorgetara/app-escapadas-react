import config from "../package.json"
import './App.css'
import { useState } from "react"
import Formulario from "./formulario/Formulario"

function App() {

  const [visible, setVisible] = useState(false)
  function cambiarVisibilidad() {
    setVisible(!visible)
  }


  return (
    <>
      <h1>{config.name}</h1>
      <h2>{config.version}</h2>
      <Formulario></Formulario>
    </>
  )
}

export default App
