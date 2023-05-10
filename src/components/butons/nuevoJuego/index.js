import React from "react";
import Style from "./Style.css";

const NuevoJuego=()=>{
    const juego_Nuevo =()=>{
        window.location.reload(true);
        //console.log("entro")
    }
    return (
        <button 
            className="new-game"
            onClick={juego_Nuevo}
            >
                Nuevo Juego
        </button>
    );
}

export {NuevoJuego}