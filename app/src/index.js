import React from "react";
import ReactDOM from "react-dom";
// Default styles that can be overridden by your app
import "@solana/wallet-adapter-react-ui/styles.css";

import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import { FetchNFTClient } from '@audius/fetch-nft'

// Initialize fetch client
const fetchClient = new FetchNFTClient()

// Fetching all collectibles for the given wallets
fetchClient.getCollectibles({
  solWallets: ['GrWNH9qfwrvoCEoTm65hmnSh4z3CD96SfhtfQY6ZKUfY']
}).then(res => console.log(res))




ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
