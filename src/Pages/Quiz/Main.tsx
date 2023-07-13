import axios from "axios";
import React, { useState, useEffect } from "react";
import Questions from "./Questions";
import NavbarNeo from "../../Components/Navbar";

function Main() {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedDifficulty, setSelectedDifficulty] = useState("");
  const [submited, setSubmited] = useState<boolean>(false);
  const [questions, setQuestions] = useState<any[]>([]);
  //   const [showQuestions, setShowQuestions] = useState<boolean>(false);

  const handleCategoryChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setSelectedCategory(event.target.value);
  };

  const handleDifficultyChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setSelectedDifficulty(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    console.log("Form submitted");
    console.log("Selected Category:", selectedCategory);
    console.log("Selected Difficulty:", selectedDifficulty);
    setSubmited(true);
    // setShowQuestions(true);

    fetchQuestions();
  };

  const fetchQuestions = async () => {
    try {
      const { data } = await axios.get(
        `https://quizapi.io/api/v1/questions?apiKey=YMS8H5B8wFuduRL1SntBJ32UUwjD57YAuAW1BEbs&limit=10&category=${selectedCategory}&difficulty=${selectedDifficulty}`
      );
      setQuestions(data);
      //   console.log(data);
    } catch (e) {
      alert(e);
    }
  };

  useEffect(() => {
    if (submited && selectedCategory && selectedDifficulty) {
      fetchQuestions();
    }
  }, [selectedCategory, selectedDifficulty]);

  return (
    <>
      <NavbarNeo />

      <div className="flex items-center justify-center h-screen font-montserrat">
        <div
          className={
            !submited
              ? "w-full max-w-md mt-5  h-full"
              : " max-w-screen mt-5 h-full"
          }
        >
          <h1 className="text-center text-6xl mt-28">Quiz</h1>
          {!submited ? (
            <form onSubmit={handleSubmit}>
              <div className="mb-6">
                <label
                  htmlFor="category"
                  className="text-lg font-semibold mb-2"
                >
                  Category
                </label>
                <select
                  id="category"
                  value={selectedCategory}
                  onChange={handleCategoryChange}
                  className="block w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
                >
                  <option value="">Select a category</option>
                  <option value="Linux">Linux</option>
                  <option value="DevOps">DevOps</option>
                  <option value="Kubernetes">Kubernetes</option>
                  <option value="SQL">SQL</option>
                  <option value="Code">Code</option>
                </select>
              </div>
              <div className="mb-6">
                <label
                  htmlFor="difficulty"
                  className="text-lg font-semibold mb-2"
                >
                  Difficulty
                </label>
                <select
                  id="difficulty"
                  value={selectedDifficulty}
                  onChange={handleDifficultyChange}
                  className="block w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
                >
                  <option value="">Select a difficulty</option>
                  <option value="Easy">Easy</option>
                  <option value="Medium">Medium</option>
                  <option value="Hard">Hard</option>
                </select>
              </div>
              <button
                type="submit"
                className="h-10 mt-7 rounded-md bg-amber-900 px-4"
              >
                Submit
              </button>
            </form>
          ) : (
            <Questions questions={questions} />
          )}
        </div>
      </div>
    </>
  );
}

export default Main;
