import React from "react";
import Style from "./Style.css"
import red_back from "../../assets/cartas/red_back.png"

const Cards=()=>{
    return (
        <div>

            <img className="myCard" src={red_back} alt="carta"/>

        </div>
        
    );
}

export {Cards};