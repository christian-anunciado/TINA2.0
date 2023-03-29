import { createContext, ReactNode, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import generate_response from "../api/response";
import {
  appendMessage,
  appendResponse,
  MessageType,
} from "../redux/convoRedux";

interface QueryContext {
  query: string;
  setQuery: (query: string) => void;
  responseStatus: ResponseStatus | null;
  setResponseStatus: (status: ResponseStatus | null) => void;
  handleQuery: (query: string) => void;
  initQuery: (query: string) => void;
  ResponseStatus: typeof ResponseStatus;
}

export const queryContext = createContext({} as QueryContext);

enum ResponseStatus {
  SUCCESS = "success",
  ERROR = "error",
  LOADING = "loading",
}

export const QueryProvider = ({ children }: { children: ReactNode }) => {
  const [query, setQuery] = useState("");
  const [responseStatus, setResponseStatus] = useState<ResponseStatus | null>(
    null
  );
  const conversation = useSelector((state: any) => state.conversation);

  const dispatch = useDispatch();

  const initQuery = (query: string) => {
    dispatch(
      appendMessage({
        text: query,
        created: new Date().toUTCString(),
        type: MessageType.Query,
      })
    );
    dispatch(
      appendMessage({
        text: "",
        created: new Date().toUTCString(),
        type: MessageType.Response,
      })
    );
  };

  const handleQuery = async (query: string) => {
    if (query.length === 0) return;
    initQuery(query);
    try {
      const req = await generate_response.get("/response/ask_tina", {
        params: {
          question: query,
        },
        timeout: 15000,
        timeoutErrorMessage: "Request timed out",
      });

      const txt: string = JSON.stringify(req.data.text);
      console.log("🚀 ~ file: queryContext.tsx:67 ~ handleQuery ~ txt:", txt);

      const res: string = JSON.stringify(req.data.text)
        .replace(/\\r/g, "")
        .replace(/\\\\n/g, "\n")
        .replace(/\\n/g, "\n")
        .replace(/"/g, "");
      console.log("🚀 ~ file: queryContext.tsx:73 ~ handleQuery ~ res:", res);

      dispatch(
        appendResponse({
          text: res,
          created: new Date().toUTCString(),
          type: MessageType.Response,
        })
      );
    } catch (error) {
      dispatch(
        appendResponse({
          text: "Sorry, something went wrong. Please try again later.",
          created: new Date().toUTCString(),
          type: MessageType.Response,
          error: true,
        })
      );
    }
  };

  return (
    <queryContext.Provider
      value={{
        query,
        setQuery,
        responseStatus,
        setResponseStatus,
        handleQuery,
        initQuery,
        ResponseStatus,
      }}
    >
      {children}
    </queryContext.Provider>
  );
};
