import * as React from "react";

import { createRoot } from "react-dom/client";

import { MAny } from "./utils/my-types";
// import SignIn from "./components/Signin";
import BTCChart from "./components/Charts/BTC";
// import AAPLChart from "./components/Charts/AAPL";
// import EURUSDChart from "./components/Charts/EURUSD";
import MyNavbar from "./components/Navbar";
import Chat from "./components/OldChat";
import App from "./components/App";
import App2 from "./components/App2";

interface DisplayChart {
  chart: string;
}
// const [chart, setChart] = React.useState<DisplayChart>({chart: 'apple'});

// UI Injection
const rootHTMLElement: HTMLElement = document.createElement("div");
document.body.appendChild(rootHTMLElement);

const PAINT = (htmlEle: HTMLElement, rEle: MAny) => {
  createRoot(htmlEle).render(rEle);
};

PAINT(
  rootHTMLElement,
  <div>
    <App />
  </div>
);
