import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import App from "./App";
import { QueryProvider } from "./context/queryContext";
import "./index.css";
import { persistor, store } from "./redux/store";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <QueryProvider>
        <PersistGate loading={null} persistor={persistor}>
          <App />
        </PersistGate>
      </QueryProvider>
    </Provider>
  </React.StrictMode>
);
