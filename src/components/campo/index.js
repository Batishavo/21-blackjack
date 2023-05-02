import React, {useEffect} from "react";
import campo from "./campo.css";
import {Cards} from "../cards";
import {NuevoJuego} from "../butons/nuevoJuego";
import {PasarTurno} from "../butons/pasarTurno";
import {PedirCarta} from "../butons/pedirCarta";

function Campo({players, posDeck, setPosDeck, deck, handCards, setHandCars}) {
  //console.log(handCards)
  let turno = 1;

  const points = [0, 0, 0, 0, 0, 0, 0];
  const divs = Array.from({length: players}, (_, index) => (
    <div key={index} className="campo-item">
      <div className="contendor">
        <div className="item-left">
          <p>Jugador {index + 1}</p>
          <p>Puntos: {points[index]}</p>
        </div>
        <div className="item-right">
          <div className="deck-cards">
            <Cards 
              index={index} 
              handCards={handCards} 
         
            />
          </div>
        </div>
      </div>
    </div>
  ));
  return (
    <div className="campo">
      {divs}
      <div className="action-butons">
        <NuevoJuego />
        <PedirCarta posDeck={posDeck} setPosDeck={setPosDeck} deck={deck} />
        <PasarTurno />
        <h2>Turno actual {turno}</h2>
      </div>
    </div>
  );
}

export {Campo};
