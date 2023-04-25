import React from "react";
import {Context} from "../context";
import {Selecion} from "../components/Selecion";
import {Modal} from "../components/modal";
import {Campo} from "../components/campo";
import {Header} from "../components/header";
import {Winner} from "../components/winnesr";

function AppUI() {
  const 
    {
      openModal, 
      setOpenModal, 
      players, 
      setPlayers,
      posDeck,
      setPosDeck
    } = React.useContext(Context);
  return (
    <React.Fragment>
      <Header />
      {openModal === 2 && (
        <Modal>
          <Selecion 
            setOpenModal={setOpenModal} 
            setPlayers={setPlayers} 
          />
        </Modal>
      )}
      {openModal === 3 && (
        <Modal>
          <Winner 
            className="winner"
            player_winer={"5"} 
          />
        </Modal>
      )}
      { openModal === 1 &&(
        <Campo 
          players={players} 
          posDeck = {posDeck}
          setPosDeck = {setPosDeck}
        />

      )

      }
    </React.Fragment>
  );
}

export {AppUI};
