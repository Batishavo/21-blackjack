import React from "react";
import deck from '../functions/giveCarts';

const Context = React.createContext();

function Provider(props) {
    const [openModal,setOpenModal]=React.useState(2);
    const [players,setPlayers] = React.useState(7);
    const [posDeck,setPosDeck] = React.useState(0);
    const [handCards,setHandCars] 
        = React.useState([[], [], [], [], [], [], []]);


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
            setHandCars
        }}>
            {props.children}
        </Context.Provider>
    );

}


export {Context,Provider};