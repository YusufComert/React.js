import axios from "axios";
import "./App.css";
import "./Dropdown.css";
import QuestionScreen from "./components/QuestionsScreen";
import { useEffect, useState } from "react";
import QuestionList from "./components/QuestionList";

function App() {
  const [questions, setQuestions] = useState([]);
  const crateQuestions = async (
    selectedLabel,
    question,
    optionA,
    optionB,
    optionC,
    optionD,
    category
  ) => {
    const response = await axios.post("http://localhost:3000/question", {
      selectedLabel: selectedLabel,
      question: question,
      optionA: optionA,
      optionB: optionB,
      optionC: optionC,
      optionD: optionD,
      category: category,
    });
    const createdQuestion = [...questions, response.data];
    setQuestions(createdQuestion);
  };
  const fetchQuestions = async () => {
    const response = await axios.get("http://localhost:3000/question");
    setQuestions(response.data);
  };
  useEffect(() => {
    fetchQuestions();
  }, []);

  return (
    <div className="App">
      <QuestionScreen onCreate={crateQuestions} />
      <QuestionList questions={questions} />
    </div>
  );
}

export default App;
