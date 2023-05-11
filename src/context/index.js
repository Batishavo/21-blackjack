import React from "react";
import deck from '../functions/giveCarts';

const Context = React.createContext();

function Provider(props) {
    const [openModal,setOpenModal]=React.useState(2);
    const [players,setPlayers] = React.useState(7);
    const [posDeck,setPosDeck] = React.useState(0);
    const [handCards,setHandCars] 
        = React.useState([[], [], [], [], [], [], []]);
    const [points,setPoints] = React.useState([0, 0, 0, 0, 0, 0, 0]);
    const [turn,setTurn] = React.useState(0);


    return(
        <Context.Provider value={{
            openModal,
            setOpenModal,
            players,
            setPlayers,
            posDeck,
            setPosDeck,
            deck,
            handCards,
            setHandCars,
            points,
            setPoints,
            turn,
            setTurn,
        }}>
            {props.children}
        </Context.Provider>
    );

}


export {Context,Provider};