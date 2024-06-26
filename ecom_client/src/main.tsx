import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { BrowserRouter as Router } from "react-router-dom";
import { PrimeReactProvider } from "primereact/api";
import { Provider } from "react-redux";
import { store } from "./redux/store.ts";
import { Toaster } from "react-hot-toast";
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Router>
      <Provider store={store}>
        <PrimeReactProvider>
          <Toaster position="top-center" />
          <App />
        </PrimeReactProvider>
      </Provider>
    </Router>
  </React.StrictMode>
);
