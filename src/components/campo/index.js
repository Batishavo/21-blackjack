import React, {useEffect} from "react";
import campo from "./campo.css";
import {Cards} from "../cards";
import {PedirCarta} from "../butons/pedirCarta";
import {NuevoJuego} from "../butons/nuevoJuego";
import {PasarTurno} from "../butons/pasarTurno";

function Campo({
  players,
  posDeck,
  setPosDeck,
  deck,
  handCards,
  setHandCars,
  points,
  setPoints,
  turn,
  setTurn,
  setOpenModal,
}) {
  //console.log(handCards);

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
              setHandCars={setHandCars}
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
        <PedirCarta
          handCards={handCards}
          posDeck={posDeck}
          setPosDeck={setPosDeck}
          deck={deck}
          players={players}
          turn={turn}
          setTurn={setTurn}
          setHandCars={setHandCars}
          points={points}
          setPoints={setPoints}
          setOpenModal = {setOpenModal}
        />
        <PasarTurno />
        <h2>Turno actual {turn + 1}</h2>
      </div>
    </div>
  );
}

export {Campo};
