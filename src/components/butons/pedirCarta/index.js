import React from "react";
import Style from "./Style.css";
import {sum_Points} from "../../../functions/Sum_Points";
const PedirCarta = ({
  handCards,
  posDeck,
  setPosDeck,
  deck,
  players,
  turn,
  setTurn,
  setHandCars,
  points,
  setPoints,
  setOpenModal,
}) => {
  //console.log(handCards);
  const aksCard = () => {
    handCards[turn].push(deck[posDeck]);
    points[turn] += sum_Points(deck[posDeck]);
    if (points[turn] === 21) {
      //setOpenModal(3);
    }
    setHandCars(handCards);
    setPosDeck(posDeck + 1);
    setPoints(points);
    let aux = turn;
    aux = (aux + 1) % players;
    while (points[aux] > 21) {
      if (aux === turn) {
        break;
      }
      aux = (aux + 1) % players;
    }
    turn = aux;
    setTurn(turn);
  };

  return (
    <button onClick={aksCard} className="ask-card">
      Pedir Carta
    </button>
  );
};

export {PedirCarta};
