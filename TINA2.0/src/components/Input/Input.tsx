import React from "react";
import { MdSend } from "react-icons/md";
type Props = {};

const InputQuery = ({}) => (
  <div className="flex w-[50%] items-center justify-between rounded-lg bg-bgLighter px-4 py-3.5 text-text drop-shadow-lg dark:bg-darkSoft dark:text-darkText">
    <input
      type="text"
      placeholder="Ask your questions here..."
      className="w-full bg-transparent focus:outline-none focus:ring-0"
    />
    <MdSend />
  </div>
);

const SubText = ({}) => (
  <div className="mb-8 text-xs text-darkTextSoft">
    Please report any incorrect responses by letting me know what specifically
    is incorrect. Your feedback is valuable to me as it helps me improve my
    responses and provide better assistance in the future. Thank you!
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
