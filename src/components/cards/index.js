import React, {useEffect} from "react";
import Style from "./Style.css";

const Cards = ({index, handCards}) => {
  const images = require.context("../../assets/cartas", true);
  
  
  {
    handCards.map((card, index) => (
      <img
        key={index}
        className="myCard"
        src={images(`./${[card[0]]}.png`).default}
        alt={card[0]}
      />
    ));
  }
  return (
    <div className="conten-card">
      <div className="child-cards">
        <h2>{handCards[index]}</h2>
        {/* <img className="myCard" src={red_back} alt="carta" />
        <img className="myCard" src={red_back} alt="carta" />
        <img className="myCard" src={red_back} alt="carta" />
        <img className="myCard" src={red_back} alt="carta" />
        <img className="myCard" src={red_back} alt="carta" />
        <img className="myCard" src={red_back} alt="carta" />
        <img className="myCard" src={red_back} alt="carta" /> */}
      </div>
    </div>
  );
};

export {Cards};
