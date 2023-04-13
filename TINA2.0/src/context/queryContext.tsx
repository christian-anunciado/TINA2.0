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
      const req = await generate_response.get("/response/chat_tina", {
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
        .replace(/\\n/g, "\n");

      let firstIndex = res.indexOf('"');
      let lastIndex = res.lastIndexOf('"');
      let response =
        res.substring(0, firstIndex) +
        res.substring(firstIndex + 1, lastIndex) +
        res.substring(lastIndex + 1);

      dispatch(
        appendResponse({
          text: response,
          created: new Date().toUTCString(),
          type: MessageType.Response,
        })
      );
    } catch (error) {
      dispatch(
        appendResponse({
          text: "I'm sorry, it seems that I was not able to process your request properly. There seems to be an issue with the system at the moment, which is preventing me from processing your request. Could you please try asking again? Thank you.",
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
