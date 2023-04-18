import React from "react";
import Style from "./Style.css";

const Winner = ({player_winer})=>{
    return (
        <div className="box-winner">
            <div className="winner">
                <h1 >El ganador es{player_winer}</h1>
            </div>
        </div>
    );
}

export {Winner}