import { useContext } from "react";
import { BsQuestionCircle } from "react-icons/bs";
import { useSelector } from "react-redux";
import { queryContext } from "../../context/queryContext";

type Props = {
  question: string;
};

const QuestionText = ({ question }: Props) => {
  const query = useContext(queryContext);

  const loading = useSelector((state: any) => state.conversation.loading);

  return (
    <div
      className={`flex w-full cursor-pointer items-center gap-3 rounded-lg py-3 pl-3 pr-2 hover:bg-white dark:hover:bg-darkSoft ${
        loading && "pointer-events-none cursor-not-allowed opacity-50"
      }`}
      onClick={() => query.handleQuery(question)}
    >
      <div>
        <BsQuestionCircle size={"0.9em"} />
      </div>
      <div className="flex min-w-0">
        <span className="prose text-sm dark:text-darkTextSoft md:text-[13px]">
          {question}
        </span>
      </div>
    </div>
  );
};

function Question({ question }: Props) {
  return (
    <div className="group relative mr-1.5">
      <QuestionText question={question} />
    </div>
  );
}

export default Question;
