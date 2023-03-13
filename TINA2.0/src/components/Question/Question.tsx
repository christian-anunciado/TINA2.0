import React from "react";
import { MdOutlineQuestionAnswer } from "react-icons/md";

type Props = {
  question: string;
};

const QuestionText = ({ question }: Props) => (
  <div className="flex h-[46px] w-[244px] cursor-pointer items-center gap-3 rounded-lg pl-2 pr-2 hover:bg-soft dark:hover:bg-darkSoft">
    <div>
      <MdOutlineQuestionAnswer size={"1em"} />
    </div>
    <div className="overflow-hidden overflow-ellipsis whitespace-nowrap text-sm">
      {question}
    </div>
  </div>
);

function Question({ question }: Props) {
  return (
    <div className="group relative">
      <QuestionText question={question} />
      {question.length > 32 && (
        <div>
          <span className="invisible absolute top-full left-1/4 z-20 mx-auto mt-2 overflow-visible whitespace-nowrap rounded-md bg-divider p-2 text-xs opacity-0 transition-opacity group-hover:visible group-hover:opacity-100 dark:bg-darkDivider">
            {question}
          </span>
        </div>
      )}
    </div>
  );
}

export default Question;
