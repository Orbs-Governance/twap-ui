import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Web3ReactProvider } from "@web3-react/core";
import Web3 from "web3";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);

export const getLibrary = (provider: any): Web3 => {
  const library = new Web3(provider);
  (library as any).pollingInterval = 12000;
  return library;
};

root.render(
  <React.StrictMode>
    <Web3ReactProvider getLibrary={getLibrary}>
      <App />
    </Web3ReactProvider>
  </React.StrictMode>
);
