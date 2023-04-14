import React from "react";
import campo from "./campo.css";
import {Cards} from "../cards";

function Campo({players}) {
  const divs = Array.from({length: players}, (_, index) => (
    <div key={index} className="campo-item">
      <div className="contendor">
        <div className="item-left">
          <p>Div {index + 1}</p>
        </div>
        <div className="item-right">
          <div className="deck-cards">
            <Cards />
            <Cards />
            <Cards />
            <Cards />
          </div>
       
        </div>
      </div>
    </div>
  ));
  return <div className="campo">{divs}</div>;
}

export {Campo};
