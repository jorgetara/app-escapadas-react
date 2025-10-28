import config from "../package.json"
import './App.css'


function App() {




  return (
    <>
      <h1>{config.name}</h1>
      <h2>{config.version}</h2>
      
    </>
  )
}

export default App
