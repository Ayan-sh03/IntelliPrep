import React, { useState } from "react";

export interface Question {
  question: string;
  description: string | null;
  answers: {
    answer_a: string | null;
    answer_b: string | null;
    answer_c: string | null;
    answer_d: string | null;
    answer_e: string | null;
    answer_f: string | null;
  };
  multiple_correct_answers: string;
  correct_answers: {
    answer_a_correct: string;
    answer_b_correct: string;
    answer_c_correct: string;
    answer_d_correct: string;
    answer_e_correct: string;
    answer_f_correct: string;
  };
  correct_answer: string;
  explanation: string | null;
  tip: string | null;
  tags: { name: string }[];
}

const QuestionComponent: React.FC<{ question: Question }> = ({ question }) => {
  // Component logic for rendering a single question
  const [showAns, setShowAns] = useState<boolean>(false);
  function handleClick() {
    setShowAns(!showAns);
  }
  const correctAnswersArray = (
    Object.keys(question.correct_answers) as Array<
      keyof typeof question.correct_answers
    >
  ).map((key) => question.correct_answers[key]);

  // console.log(question);
  return (
    <div className="font-montserrat w-full pb-10">
      <h1 className="text-3xl mb-3">{question.question}</h1>
      {question.description && (
        <p className="text-lg">Description: {question.description}</p>
      )}
      <ul className="flex flex-col gap-2">
        <li className="block border-black  bg-amber-500 w-80 text-center p-2 ">
          {question.answers.answer_a}
        </li>

        <li className="block border-black  bg-amber-500 w-80 text-center p-2 ">
          {question.answers.answer_b}
        </li>

        <li className="block border-black  bg-amber-500 w-80 text-center p-2 ">
          {question.answers.answer_c}
        </li>

        <li className="block border-black  bg-amber-500 w-80 text-center p-2 ">
          {question.answers.answer_d}
        </li>

        {question.answers.answer_e && (
          <>
            <li className="block border-black  bg-amber-500 w-80 text-center p-2 ">
              {question.answers.answer_e}
            </li>
            <li className="block border-black  bg-amber-500 w-80 text-center p-2 ">
              {question.answers.answer_f}
            </li>
          </>
        )}
      </ul>
      <button
        className={`rounded-md bg-lightbg focus:translate-y-${
          showAns ? "2" : "0"
        } transition px-4 py-2 mt-2`}
        onClick={handleClick}
      >
        {showAns ? "Hide answer" : "Show answer"}
      </button>
      {showAns && (
        <div>
          <h3 className="mt-2">Correct Answers:</h3>
          <ul>
            {correctAnswersArray.map((answer, index) => (
              <li key={index}>
                {answer !== "false" ? `option ${index + 1}` : ""}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default QuestionComponent;
