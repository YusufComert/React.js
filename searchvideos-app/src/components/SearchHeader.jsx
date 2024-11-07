import "@fortawesome/fontawesome-free/css/all.css";
import "bulma/css/bulma.css";
import { useState } from "react";

function SearchHeader({ search }) {
  const [valueInput, setValueInput] = useState("");

  const handleFormSubmit = (event) => {
    event.preventDefault();
    search(valueInput);
    setValueInput(""); // Formu sıfırla
  };

  const handleChange = (event) => {
    setValueInput(event.target.value);
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <div className="field">
        <div className="control has-icons-left has-icons-right">
          <input
            className="input is-medium"
            type="text"
            placeholder="Ara"
            value={valueInput}
            onChange={handleChange}
          />
          <span className="icon is-left">
            <i className="fas fa-search fa-sm"></i>
          </span>
        </div>
      </div>
    </form>
  );
}

export default SearchHeader;
