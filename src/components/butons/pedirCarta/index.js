import React from "react";
import Style from "./Style.css";

const PedirCarta = ()=>{
    
    const aksCard = ()=>{
        //console.log("Pido una carta")
    }

    return (
        <button onClick={aksCard} className="ask-card">
            Pedir Carta
        </button>
    );
}

export {PedirCarta}