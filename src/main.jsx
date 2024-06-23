import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import "./index.css";
import CounterPage from "./pages/CounterPage";
import { store } from "./redux/store/store";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <CounterPage />
    </Provider>
  </React.StrictMode>,
);
