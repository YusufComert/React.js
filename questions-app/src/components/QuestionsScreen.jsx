import "bulma/css/bulma.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

import React, { useState } from "react";

function QuestionScreen({ onCreate }) {
  const [isActive, setIsActive] = useState(false);
  const [selectedValue, setSelectedValue] = useState("");
  const [selectedLabel, setSelectedLabel] = useState("");
  const [question, setQuestion] = useState("");
  const [optionA, setOptionA] = useState("");
  const [optionB, setOptionB] = useState("");
  const [optionC, setOptionC] = useState("");
  const [optionD, setOptionD] = useState("");
  const [category, setCategory] = useState("");

  const handleChangeOptionA = (event) => {
    setOptionA(event.target.value);
  };
  const handleChangeOptionB = (event) => {
    setOptionB(event.target.value);
  };
  const handleChangeOptionC = (event) => {
    setOptionC(event.target.value);
  };
  const handleChangeOptionD = (event) => {
    setOptionD(event.target.value);
  };
  const handleChangeQuestion = (event) => {
    setQuestion(event.target.value);
  };
  const handleChangeCategory = (event) => {
    setCategory(event.target.value);
  };

  const toggleDropdown = (event) => {
    event.preventDefault();
    setIsActive(!isActive);
  };

  const handleSelect = (value, label) => {
    setSelectedValue(value);
    setSelectedLabel(label);
    setIsActive(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onCreate(
      selectedLabel,
      question,
      optionA,
      optionB,
      optionC,
      optionD,
      category
    );
    setSelectedLabel("");
    setQuestion("");
    setOptionA("");
    setOptionB("");
    setOptionC("");
    setOptionD("");
    setCategory("");
  };

  return (
    <div>
      <div className="blog-screen">
        <h3 className="title is-3" style={{ textAlign: "center" }}>
          SORU GİRİŞ EKRANI
        </h3>
        <form className="task-form bordered-shadow" onSubmit={handleSubmit}>
          <textarea
            className="textarea is-primary"
            placeholder="Soru Metni"
            rows={4}
            value={question}
            onChange={handleChangeQuestion}
          ></textarea>

          <div className="field">
            <div className="control has-icons-left has-icons-right hover-shadow">
              <input
                className="input is-success"
                placeholder="A Şıkkı"
                value={optionA}
                onChange={handleChangeOptionA}
              />
              <span className="icon is-small is-left">
                <i className="fa-solid fa-a"></i>
              </span>
            </div>
          </div>

          <div className="field">
            <div className="control has-icons-left has-icons-right hover-shadow">
              <input
                className="input is-success"
                placeholder="B Şıkkı"
                value={optionB}
                onChange={handleChangeOptionB}
              />
              <span className="icon is-small is-left">
                <i className="fa-solid fa-b"></i>
              </span>
            </div>
          </div>

          <div className="field">
            <div className="control has-icons-left has-icons-right hover-shadow">
              <input
                className="input is-success"
                placeholder="C Şıkkı"
                value={optionC}
                onChange={handleChangeOptionC}
              />
              <span className="icon is-small is-left">
                <i className="fa-solid fa-c"></i>
              </span>
            </div>
          </div>

          <div className="field">
            <div className="control has-icons-left has-icons-right hover-shadow">
              <input
                className="input is-success"
                placeholder="D Şıkkı"
                value={optionD}
                onChange={handleChangeOptionD}
              />
              <span className="icon is-small is-left">
                <i className="fa-solid fa-d"></i>
              </span>
            </div>
          </div>

          <div className="dropdown-container">
            <div className="dropdown">
              <div className="dropdown-trigger" onClick={toggleDropdown}>
                <span>{selectedLabel || "Doğru Cevap"}</span>
                <span className="icon is-small">
                  <i className="fas fa-angle-down" aria-hidden="true"></i>
                </span>
              </div>
              <div className={`dropdown-menu ${isActive ? "is-active" : ""}`}>
                <a
                  href="#"
                  className="dropdown-item"
                  onClick={() => handleSelect("1", "A")}
                >
                  A
                </a>
                <a
                  href="#"
                  className="dropdown-item"
                  onClick={() => handleSelect("2", "B")}
                >
                  B
                </a>
                <a
                  href="#"
                  className="dropdown-item"
                  onClick={() => handleSelect("3", "C")}
                >
                  C
                </a>
                <a
                  href="#"
                  className="dropdown-item"
                  onClick={() => handleSelect("4", "D")}
                >
                  D
                </a>
              </div>
            </div>
            <div className="input-container">
              <div className="control has-icons-left has-icons-right hover-shadow">
                <input
                  className="input is-success"
                  placeholder="Kategori İsmi"
                  value={category}
                  onChange={handleChangeCategory}
                />
                <span className="icon is-small is-left">
                  <i className="fa-solid fa-list"></i>
                </span>
              </div>
            </div>
          </div>

          <button
            className="custom-button full-width rounded large-text"
            type="submit"
          >
            KAYDET
          </button>
        </form>
      </div>
    </div>
  );
}

export default QuestionScreen;
