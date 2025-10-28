function Button({texto="Haz click", clase="btn",funcion=""}){
    
    return(
        <>
            < button style={{
                borderRadius:"6px",
                padding:"6px",
                backgroundColor:"lime",
                color:"maroon"
            }}
            
            onClick={funcion} className={clase}>{texto}</button>
        </>
    )
}

export default Button