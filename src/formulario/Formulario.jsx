import e from "cors"
import "./Formulario.css"
import { useState } from "react"


function Formulario() {
    const estilo = {
        display: "flex",
        flexDirection: "column",
        gap: "12px"
    }

    const [nombre, setNombre] = useState('')
    const [email, setEmail] = useState('')
    const [enviado, setEnviado]=useState('')
    function handlerNombre(event){
        setNombre(event.target.value)
    }
    function handlerEmail(event){
        setEmail(event.target.value)

    }

    function manejadorFormulario(event){
        event.preventDefault()
        setEnviado(true)
        console.log('El formulario se ha parado',nombre,email)

    }

    const escapadas=["Visita a Aranjuez", "ir a madrid","ia a leganes"]


    return (
        <>
            <form style={estilo} className="form" onSubmit={manejadorFormulario}>
                <label htmlFor="nombre">Nombre</label>
                <input onChange={handlerNombre} placeholder="Escribe tu nombre" type="text" />
                <p className="info">{nombre}</p>
                <label htmlFor="email">email:</label>
                <input onChange={handlerEmail} placeholder="Escribe tu email" type="text" />
                <label htmlFor="escapada"></label>
                <select name="escapada" id="escapada">
                    <option selected>Elige la escapada</option>
                    {escapadas.map(
                        (item,index)=>(
                            <option key={index} value={item}>{item}</option>
                        )
                    )}

                </select>
                <p className="info">{email}</p>
                <button > Enviar </button>
            </form>
            {enviado&&<p>Vas a enviar un formulario con nombre con {nombre} y {email}</p>}
        </>
    )
}

export default Formulario