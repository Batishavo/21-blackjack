import React, { useState, useEffect } from "react";
import Style from "./Style.css";

const Cards = (
  { 
     index
    ,handCards
    ,setHandCars 
    ,setActual
    ,actual
  }) => {
  const [imagesLoaded, setImagesLoaded] = useState(false);

  const cardName = (name) => {
    return `https://github.com/Batishavo/21-blackjack/blob/main/src/assets/cartas/${name}.png?raw=true`;
  };

  useEffect(() => {
    const promises = handCards[index].map((card) => {
      return new Promise((resolve, reject) => {
        const img = new Image();
        img.onload = () => resolve();
        img.onerror = () => reject();
        img.src = cardName(card);
        setActual(0);
      });
    });

    Promise.all(promises)
      .then(() => {
        setImagesLoaded(true);
        //console.log(actual);
        setActual(1);
      })
      .catch((error) => {
        console.log("Error loading images", error);
      });
  }, [handCards, index,setActual,actual]);

  return (
    <div className="conten-card">
      <div className="child-cards">
        {imagesLoaded &&
          handCards[index].map((card) => (
            <img className="myCard" src={cardName(card)} alt="carta" />
          ))}
      </div>
    </div>
  );
};

export { Cards };
