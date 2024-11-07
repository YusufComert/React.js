import QuestionShow from "./QuestionShow";

function QuestionList({ questions }) {
  return (
    <div className="blog-list">
      {questions.map((question, index) => {
        return <QuestionShow key={index} question={question} />;
      })}
    </div>
  );
}

export default QuestionList;
