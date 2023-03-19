import React from "react";
import Question from "../Question/Question";

type Props = {};

function Questions({}: Props) {
  const sampleQuestions = [
    "What is the enrollment process?",
    "When is the enrollment period?",
    "What are the requirements for enrollment, such as age or residency?",
    "How do I apply for enrollment and what is the timeline?",
    "What documents do I need to submit for enrollment, such as transcripts or immunization records?",
    "What is the cost of enrollment?",
    "What kind of financial aid or scholarships are available?",
    "What is the enrollment capacity for each year level?",
    "What is the enrollment capacity for each grade level?",
  ];
  return (
    <div className="scroll-stable min-h-0 w-full flex-[2] overflow-hidden overflow-x-hidden hover:overflow-y-auto">
      <div className="flex flex-col gap-1">
        {sampleQuestions.map((question) => (
          <Question question={question} key={question} />
        ))}
      </div>
    </div>
  );
}

export default Questions;
