import React, {useEffect} from "react";
import Style from "./Style.css";
import {confetti} from "https://cdn.jsdelivr.net/npm/tsparticles-confetti/+esm";

const Winner = ({player_winer}) => {
  const juego_Nuevo = () => {
    window.location.reload(true);
    //console.log("entro")
  };

  const duration = 15 * 1000,
    animationEnd = Date.now() + duration,
    defaults = {startVelocity: 30, spread: 360, ticks: 60, zIndex: 0};

  function randomInRange(min, max) {
    return Math.random() * (max - min) + min;
  }

  const run = () => {
    const interval = setInterval(function () {
      const timeLeft = animationEnd - Date.now();

      if (timeLeft <= 0) {
        return clearInterval(interval);
      }

      const particleCount = 50 * (timeLeft / duration);

      // since particles fall down, start a bit higher than random
      confetti(
        Object.assign({}, defaults, {
          particleCount,
          origin: {x: randomInRange(0.1, 0.3), y: Math.random() - 0.2},
        })
      );
      confetti(
        Object.assign({}, defaults, {
          particleCount,
          origin: {x: randomInRange(0.7, 0.9), y: Math.random() - 0.2},
        })
      );
    }, 250);
  };

  //document.getElementById("run").addEventListener("click", run);
  useEffect(() => {
    run();
  }, []);

  return (
    <div className="box-winner">
      <div className="winner">
        <h1>El ganador es el jugador {player_winer}</h1>
        <button class="button-box" onClick={juego_Nuevo}>
          Juego nuevo
        </button>
      </div>
    </div>
  );
};

export {Winner};
