import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./customCSS.css";
import Main from "./Components/MainComponent";
import { Provider } from "react-redux";
import store from "./Redux/store";

function App() {
  return (
    <Provider store={store}>
      <Main />
    </Provider>
  );
}

export default App;
