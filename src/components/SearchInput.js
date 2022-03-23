import * as React from "react";
import SearchIcon from "@mui/icons-material/Search";
import style from "./search.module.css";

const InputWithIcon = ({ query }) => {
  const [input, setInput] = React.useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setInput(e.target.value);
    query(input);
  };

  return (
    <div className="wrap">
      <div className={style.hero_text}>
        <h1>Unsplashy</h1>
        The internet’s source of freely-usable images. Powered by creators
        everywhere.
      </div>
      <form className="search" onSubmit={handleSubmit}>
        <input
          type="text"
          className="searchTerm"
          placeholder="What are you looking for?"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button type="submit" className="searchButton">
          <SearchIcon />
        </button>
      </form>
    </div>
  );
};

export default InputWithIcon;
