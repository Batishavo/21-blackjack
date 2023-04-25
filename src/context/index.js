import React from "react";
import deck from '../functions/giveCarts';

const Context = React.createContext();

function Provider(props) {
    const [openModal,setOpenModal]=React.useState(1);
    const [players,setPlayers] = React.useState(7);
    const [posDeck,setPosDeck] = React.useState(0);

    return(
        <Context.Provider value={{
            openModal,
            setOpenModal,
            players,
            setPlayers,
            posDeck,
            setPosDeck
        }}>
            {props.children}
        </Context.Provider>
    );

}


export {Context,Provider};