import React from "react";
import { useDispatch } from "react-redux";
import { MessageType, appendResponse } from "../redux/convoRedux";
import { useSelector } from "react-redux";

function useOnPageReload() {
  const dispatch = useDispatch();
  const loading = useSelector((state: any) => state.conversation.loading);

  React.useEffect(() => {
    if (loading) {
      window.onbeforeunload = () => {
        dispatch(
          appendResponse({
            text: "Unable to finished your request. You may have reloaded or close the page while I was still finding your answer. Please try again.",
            created: new Date().toUTCString(),
            type: MessageType.Response,
            error: true,
          })
        );
      };

      return () => {
        window.onbeforeunload = null;
      };
    }
  }, [loading]);
}

export default useOnPageReload;
