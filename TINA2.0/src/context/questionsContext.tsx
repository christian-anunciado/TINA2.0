import React, { Dispatch, SetStateAction } from "react";
import { QuestionsList } from "./questionsList";

export enum QuestionType {
  General = "General",
  College = "College",
  SeniorHighSchool = "Senior High School",
  JuniorHighSchool = "Junior High School",
  Elementary = "Elementary",
}

interface QuestionsContextProps {
  questions: string[];
  setQuestions: (questions: string[]) => void;
  questionType: QuestionType;
  setQuestionType: Dispatch<SetStateAction<QuestionType>>;
}

export const QuestionsContext = React.createContext(
  {} as QuestionsContextProps
);

function QuestionsProvider({ children }: { children: React.ReactNode }) {
  const questionsList = QuestionsList;

  const [questionType, setQuestionType] = React.useState<QuestionType>(
    QuestionType.General
  );
  const [questions, setQuestions] = React.useState<string[]>(
    questionsList.General
  );

  React.useEffect(() => {
    setQuestions(questionsList[questionType]);
  }, [questionType]);

  return (
    <QuestionsContext.Provider
      value={{
        questions,
        setQuestions,
        questionType,
        setQuestionType,
      }}
    >
      {children}
    </QuestionsContext.Provider>
  );
}

export default QuestionsProvider;
