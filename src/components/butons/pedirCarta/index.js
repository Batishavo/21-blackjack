import React from "react";
import Style from "./Style.css";

const PedirCarta = ({posDeck,setPosDeck,deck})=>{
    
    const aksCard = ()=>{
        setPosDeck(posDeck+1);
    }

    return (
        <button onClick={aksCard} className="ask-card">
            Pedir Carta
        </button>
    );
}

export {PedirCarta}