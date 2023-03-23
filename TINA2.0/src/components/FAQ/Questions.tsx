import React from "react";
import Question from "../Question/Question";

type Props = {};

function Questions({}: Props) {
  const sampleQuestions = [
    "How can I check my grades?",
    "How can I get a student ID card?",
    "How can I get a copy of my study load?",
    "How can I view my tuition fee breakdown?",
    "How can I pay my tuition fee?",
    "How can I get a refund for an overpayment?",
    "How can I apply for financial aid or scholarships at CIT?",
    "What is the Enrollment Technical Office (ETO)?",
    "What services does ETO provide?",
    "How can I apply for admission to CIT?",
    "How do I register for classes at CIT?",
    "How can I get in touch with ETO?",
    "What are the office hours of ETO?",
    "What are the requirements for admission to CIT?",
  ];
  return (
    <div className="scroll-stable min-h-0 w-full flex-[5] overflow-y-auto overflow-x-hidden scroll-smooth lg:overflow-hidden lg:hover:overflow-y-auto">
      <div className="flex flex-col gap-1">
        {sampleQuestions.map((question) => (
          <Question question={question} key={question} />
        ))}
      </div>
    </div>
  );
}

export default Questions;
