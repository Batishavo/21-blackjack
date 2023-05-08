import React, {useEffect} from "react";
import Style from "./Style.css";

const Cards = ({index, handCards,setHandCars}) => {
  //console.log(handCards);
  const cardName = name => {
    return `https://github.com/Batishavo/21-blackjack/blob/main/src/assets/cartas/${name}.png?raw=true`;
  };
  
  return (
    <div className="conten-card">
      <div className="child-cards">
        {handCards[index].map((card) => (
          <img className="myCard" src={cardName(card)} alt="carta" />
        ))}
      </div>
    </div>
  );
};

export {Cards};
