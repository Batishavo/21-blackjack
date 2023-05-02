import React from "react";
import selecion from "./selecion.css"
function Selecion({setOpenModal,setPlayers,setHandCars,handCards,deck,posDeck,setPosDeck}){
    
    const cambio=(val)=>{
        //console.log(val)
        
        for(let i=0;i<val*2;i+=2){
            //console.log(deck[posDeck],posDeck)
            handCards[i/2]=[deck[i],deck[i+1]];
            //handCards[i].push(deck[i+1]);
        }
        setHandCars(handCards);
        setPosDeck(val*2);
        setPlayers(val);
        setOpenModal(1);
        //console.log(handCards[0])
    }
    
    return (

        <div className="container-select">
            <div className="select-players">
                <h1>Seleciona el numero de jugadores</h1>
                <ul>
                    <li onClick={()=>cambio(1)}>1</li>
                    <li onClick={()=>cambio(2)}>2</li>
                    <li onClick={()=>cambio(3)}>3</li>
                    <li onClick={()=>cambio(4)}>4</li>
                    <li onClick={()=>cambio(5)}>5</li>
                    <li onClick={()=>cambio(6)}>6</li>
                    <li onClick={()=>cambio(7)}>7</li>
                </ul>
            </div>
        </div>
    );
}

export {Selecion};