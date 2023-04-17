import React from "react";
import {Context} from "../context";
import {Selecion} from "../components/Selecion";
import {Modal} from "../components/modal";
import { Campo } from "../components/campo";
import { Header } from "../components/header";

function AppUI() {
  const {
    openModal,
    setOpenModal,
    players,
    setPlayers,
  } = React.useContext(Context);
  return <React.Fragment>
    <Header/>
    {!!openModal &&
     <Modal>
         <Selecion 
          setOpenModal={setOpenModal}
          setPlayers={setPlayers}
         />
     </Modal>
    }
    <Campo
      players={players}
    />
    </React.Fragment>;
}

export {AppUI};
