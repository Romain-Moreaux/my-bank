import React from "react";
import ReactDOM from "react-dom";
import "./style.css";
import App from "./App";

import WebFont from "webfontloader";

WebFont.load({
  google: {
    families: ["Raleway:300,400,500,800", "sans-serif"]
  }
});

ReactDOM.render(<App />, document.getElementById("root"));
