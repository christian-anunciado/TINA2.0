import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import App from "./App";
import Loading from "./components/Loading/Loading";
import { QueryProvider } from "./context/queryContext";
import "./index.css";
import { persistor, store } from "./redux/store";
import QuestionsProvider from "./context/questionsContext";

const PersistApp = () => {
  const [gateLifted, setGateLifted] = React.useState(false);

  const onBeforeLift = () => {
    setTimeout(() => {
      setGateLifted(true);
    }, 2500);
  };

  return (
    <Provider store={store}>
      <QueryProvider>
        <QuestionsProvider>
          <PersistGate
            persistor={persistor}
            loading={<Loading />}
            onBeforeLift={onBeforeLift}
          >
            {gateLifted ? <App /> : <Loading />}
          </PersistGate>
        </QuestionsProvider>
      </QueryProvider>
    </Provider>
  );
};

if (process.env.NODE_ENV !== "development") {
  console.log = () => {};
  console.error = () => {};
  console.debug = () => {};
}

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <PersistApp />
  </React.StrictMode>
);
