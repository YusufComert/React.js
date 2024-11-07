function QuestionShow({ question }) {
  console.log(question);
  return (
    <div className="card list-card">
      <header className="card-header" />
      <p
        className="card-header-title"
        style={{ justifyContent: "center", fontSize: "14px" }}
      >
        SORU : {question.question}
      </p>
      <div className="card-content">
        <p
          className="title"
          style={{
            fontSize: "12px",
            textAlign: "center",
            marginBottom: 45,
          }}
        >
          CEVAP A : {question.optionA}
        </p>
        <p
          className="title"
          style={{
            fontSize: "12px",
            textAlign: "center",
            marginBottom: 45,
          }}
        >
          CEVAP B : {question.optionB}
        </p>
        <p
          className="title"
          style={{
            fontSize: "12px",
            textAlign: "center",
            marginBottom: 45,
          }}
        >
          CEVAP C : {question.optionC}
        </p>
        <p
          className="title"
          style={{
            fontSize: "12px",
            textAlign: "center",
            marginBottom: 45,
          }}
        >
          CEVAP D : {question.optionD}
        </p>
        <p
          className="subtitle"
          style={{
            textAlign: "center",
            marginTop: "15px",
            fontSize: "small",
            fontWeight: "bold",
          }}
        >
          DOĞRU CEVAP : {question.selectedLabel}
        </p>
        <footer class="custom-footer">
          <p class="custom-footer-item">
            <span>{question.category}</span>
          </p>
        </footer>
      </div>
    </div>
  );
}

export default QuestionShow;
