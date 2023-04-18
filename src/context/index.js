import React from "react";

const Context = React.createContext();

function Provider(props) {
    const [openModal,setOpenModal]=React.useState(false);
    const [players,setPlayers] = React.useState(7);
    return(
        <Context.Provider value={{
            openModal,
            setOpenModal,
            players,
            setPlayers,
        }}>
            {props.children}
        </Context.Provider>
    );

}


export {Context,Provider};