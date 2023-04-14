import React from "react";
import {Provider} from "../context";
import {AppUI} from "./AppUI";

function App() {
  return (
    <Provider>
      <AppUI />
    </Provider>
  );
}

export default App;
