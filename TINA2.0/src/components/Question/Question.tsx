import { BsQuestionCircle } from "react-icons/bs";

type Props = {
  question: string;
};

const QuestionText = ({ question }: Props) => (
  <div className="flex w-full cursor-pointer items-center gap-3 rounded-lg py-3 pl-2 pr-2 hover:bg-soft dark:hover:bg-darkSoft">
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

function Question({ question }: Props) {
  return (
    <div className="group relative mr-1.5">
      <QuestionText question={question} />
    </div>
  );
}

export default Question;
