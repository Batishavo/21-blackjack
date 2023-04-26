import React , { useEffect } from "react";
import Style from "./Style.css";
import red_back from "../../assets/cartas/red_back.png";

const Cards = ({index,handCards}) => {
  //console.log(index)
  return (
    <div className="conten-card">
      <div className="child-cards">
        <h2>{handCards}</h2>
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
