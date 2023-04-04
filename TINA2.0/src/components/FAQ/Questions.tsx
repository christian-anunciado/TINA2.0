import React from "react";
import Question from "../Question/Question";
import { QuestionsContext } from "../../context/questionsContext";

type Props = {};

function Questions({}: Props) {
  const questionsContext = React.useContext(QuestionsContext);

  return (
    <div className="scroll-stable min-h-0 w-full flex-[5] overflow-y-auto overflow-x-hidden scroll-smooth lg:overflow-hidden lg:hover:overflow-y-auto">
      <div className="flex flex-col gap-1">
        {questionsContext.questions.map((question) => (
          <Question question={question} key={question} />
        ))}
      </div>
    </div>
  );
}

export default Questions;
