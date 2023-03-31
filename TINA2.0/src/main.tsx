import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import App from "./App";
import Loading from "./components/Loading/Loading";
import { QueryProvider } from "./context/queryContext";
import "./index.css";
import { persistor, store } from "./redux/store";

const PersistApp = () => {
  return (
    <Provider store={store}>
      <QueryProvider>
        <PersistGate persistor={persistor} loading={<Loading />}>
          <App />
        </PersistGate>
      </QueryProvider>
    </Provider>
  );
};

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <PersistApp />
  </React.StrictMode>
);
