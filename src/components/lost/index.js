import React from "react";
import Style from "./Style.css";

const Lost = () => {
  const juego_Nuevo =()=>{
    window.location.reload(true);
    //console.log("entro")
}
  return (
    <div className="container-aux">
      <div id="container">
        <div id="error-box">
          <div class="face2">
            <div class="eye"></div>
            <div class="eye right"></div>
            <div class="mouth sad"></div>
          </div>
          <div class="shadow move"></div>
          <div class="message">
            <h1 class="alert">Nadie gano</h1>
            <button 
              class="button-box"
              onClick={juego_Nuevo}
              >
              Juego nuevo
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export {Lost};
