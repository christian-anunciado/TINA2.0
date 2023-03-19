import React, { useEffect, useState } from "react";
import { MdSend } from "react-icons/md";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import generate_response from "../../api/response";
import {
  appendMessage,
  appendResponse,
  MessageType,
} from "../../redux/convoRedux";

type Props = {};

const Loading = () => (
  <svg
    aria-hidden="true"
    className="mr-1 h-5 w-5 animate-spin fill-darkDivider text-transparent dark:fill-white"
    viewBox="0 0 100 101"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
      fill="currentColor"
    />
    <path
      d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
      fill="currentFill"
    />
  </svg>
);

const InputQuery = ({}: Props) => {
  const convo = useSelector((state: any) => state.conversation);
  const loading = convo.loading;
  const dispatch = useDispatch();

  const [query, setQuery] = useState("");
  const inputRef = React.useRef<HTMLInputElement>(null);

  useEffect(() => {
    !loading && inputRef.current?.focus();
  }, [loading]);

  const initQuery = () => {
    setQuery("");
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

  const handleQuery = async () => {
    if (query.length === 0) return;
    initQuery();
    try {
      const req = await generate_response.get("/response/ask_tina", {
        params: {
          question: query,
        },
        timeout: 15000,
        timeoutErrorMessage: "Request timed out",
      });

      console.log(req.data);

      dispatch(
        appendResponse({
          text: req.data.text,
          created: new Date().toUTCString(),
          type: MessageType.Response,
        })
      );
    } catch (error) {
      console.log("🚀 ~ file: Input.tsx:82 ~ handleQuery ~ error:", error);
      dispatch(
        appendResponse({
          text: "Sorry, something went wrong. Please try again later.",
          created: new Date().toUTCString(),
          type: MessageType.Response,
        })
      );
    }

    setQuery("");
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") handleQuery();
  };

  return (
    <div className="flex w-[50%] items-center justify-between rounded-lg bg-bgLighter px-4 py-3.5 text-text drop-shadow-lg dark:bg-darkSoft dark:text-darkText">
      <input
        type="text"
        placeholder="Ask your questions here..."
        className="w-full bg-transparent focus:outline-none focus:ring-0"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyDown={handleKeyDown}
        disabled={loading ? true : false}
        autoFocus
        ref={inputRef}
      />
      {!loading ? (
        <MdSend
          onClick={handleQuery}
          className="cursor-pointer hover:scale-110"
        />
      ) : (
        <Loading />
      )}
    </div>
  );
};

const SubText = ({}) => (
  <div className="mb-8 text-center text-xs text-darkTextSoft md:text-[10px] lg:text-xs">
    Please report any incorrect responses. Your feedback is valuable to me as it
    helps me improve my responses and provide better assistance in the future.
    Thank you!
  </div>
);

function Input({}: Props) {
  return (
    <div className="flex w-full flex-1 shrink-0 items-stretch md:h-48">
      <div className="absolute bottom-0 m-auto flex w-full flex-col items-center justify-center gap-4">
        <InputQuery />
        <SubText />
      </div>
    </div>
  );
}

export default Input;
