import React from "react";
import campo from "./campo.css";
import {Cards} from "../cards";
import {NuevoJuego} from "../butons/nuevoJuego";
import {PasarTurno} from "../butons/pasarTurno";
import {PedirCarta} from "../butons/pedirCarta";

function Campo({players}) {
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
            <Cards />
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
        <PedirCarta />
        <PasarTurno />
      </div>
    </div>
  );
}

export {Campo};
