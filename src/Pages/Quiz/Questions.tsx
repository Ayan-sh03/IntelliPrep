import React from "react";
import SingleQuestion, { Question } from "./SingleQuestion";

interface QuestionsProps {
  questions: Question[];
}

const Questions: React.FC<QuestionsProps> = ({ questions }) => {
  return (
    <div className="mx-16 w-2/3 px-12  h-screen mt-20">
      {questions.map((question) => (
        <SingleQuestion key={question.question} question={question} />
      ))}
    </div>
  );
};

export default Questions;
