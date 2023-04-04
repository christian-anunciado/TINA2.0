import React, { Dispatch, SetStateAction } from "react";
import Dropdown from "./Dropdown";
import { QuestionType, QuestionsContext } from "../../context/questionsContext";

type Props = {};

const Wrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="mt-2 flex w-full flex-col items-center justify-center gap-5">
      {children}
    </div>
  );
};

const Header = () => {
  return (
    <div className="text text-center font-bold uppercase md:flex md:justify-center">
      <span className="relative text-darkText before:absolute before:-inset-1 before:block before:-skew-y-1 before:rounded-sm before:bg-red before:p-3">
        <span className="relative">Frequently Asked Questions</span>
      </span>
    </div>
  );
};

function FAQ({}: Props) {
  const questionsContext = React.useContext(QuestionsContext);
  const options = Object.values(QuestionType);

  return (
    <Wrapper>
      <Header />
      <Dropdown
        options={options}
        selected={questionsContext.questionType}
        handler={questionsContext.setQuestionType}
      />
    </Wrapper>
  );
}

export default FAQ;
