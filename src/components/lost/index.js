import React from "react";
import Style from "./Style.css";

const Lost = () => {
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
            <p>oh no, something went wrong.</p>
            <button class="button-box">
              <h1 class="red">try again</h1>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export {Lost};