import React, { useContext, useEffect, useState } from "react";
import { MdSend } from "react-icons/md";
import { useSelector } from "react-redux";
import generate_response from "../../api/response";
import { queryContext } from "../../context/queryContext";
import SurveyButton from "../FloatingButton/SurveyButton";

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
  const [query, setQuery] = useState("");
  const queryRef = React.useRef<string>("");
  const inputRef = React.useRef<HTMLInputElement>(null);
  const loading = useSelector((state: any) => state.conversation.loading);
  const context = useContext(queryContext);

  useEffect(() => {
    if (queryRef.current !== query) {
      !loading && inputRef.current?.focus();
    }
    queryRef.current = query;
  }, [loading, query]);

  const requestResponse = async (query: string) => {
    const req = await context.handleQuery(query);

    setQuery("");
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      requestResponse(query);
    }
  };

  return (
    <div
      className={`flex w-[75%] items-center justify-between rounded-full bg-bgLighter px-4 py-3.5 text-text drop-shadow-lg md:w-[65%] xl:w-[50%] ${
        loading && "cursor-not-allowed"
      }`}
    >
      <input
        type="text"
        placeholder="Ask your questions here..."
        className={`w-full bg-transparent placeholder:text-sm focus:outline-none focus:ring-0 md:placeholder:text-base ${
          loading && "cursor-not-allowed"
        }`}
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyDown={handleKeyDown}
        disabled={loading ? true : false}
        autoFocus
        ref={inputRef}
      />
      {!loading ? (
        <MdSend
          onClick={() => requestResponse(query)}
          className="cursor-pointer hover:scale-110"
        />
      ) : (
        <Loading />
      )}
    </div>
  );
};

const SubText = ({}) => {
  type DateObj = {
    deployed: string;
  };
  const [date, setDate] = useState<DateObj | null>(null);
  let deployedDate: string = "";

  useEffect(() => {
    generate_response.get("/deployed").then((res) => {
      setDate(res.data);
    });
  }, []);

  const formatDateToMonthandDay = (date: string) => {
    const dateObj = new Date(date.replace(/-/g, "/"));
    const month = dateObj.toLocaleString("default", { month: "short" });
    const day = dateObj.toLocaleString("default", { day: "2-digit" });
    return `${month} ${day}`;
  };

  if (date) deployedDate = formatDateToMonthandDay(date.deployed);

  return (
    <div className="block px-8 text-center text-[9px] text-darkTextSoft md:px-6 md:text-[10px] lg:text-xs">
      Please report any incorrect responses. Your feedback is valuable to me as
      it helps me improve and provide better assistance in the future. Thank
      you!
      <span className="pl-1.5 underline">{`TINA version: ${deployedDate}.`}</span>
    </div>
  );
};

function Input({}: Props) {
  const loading = useSelector((state: any) => state.conversation.loading);
  return (
    <div
      className={`shrink-0" w-full border-t border-t-gray-300 bg-redLight dark:border-t-gray-500 dark:bg-gradient-to-t dark:from-darkBgLighter dark:to-darkBgLight`}
    >
      <div
        className={`flex h-full w-full flex-col justify-end gap-2 pb-4 pt-4 lg:pt-6 lg:pb-6 ${
          loading && "opacity-50"
        }`}
      >
        <div className="relative flex w-full items-center justify-center gap-4">
          <InputQuery />
          <SurveyButton />
        </div>
        <SubText />
      </div>
    </div>
  );
}

export default Input;
