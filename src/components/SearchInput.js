import * as React from "react";
import SearchIcon from "@mui/icons-material/Search";
import style from "./search.module.css";

const InputWithIcon = (props) => {
  // const [input, setInput] = React.useState("");
  // const handleSubmit = (e) => {
  //   e.preventDefault();

  // };
  return (
    <div className="wrap">
      <div className={style.hero_text}>
        <h1>Unsplashy</h1>
        The internet’s source of freely-usable images. Powered by creators
        everywhere.
      </div>
      <form className="search" onSubmit={props.handleSubmit}>
        <input
          type="text"
          className="searchTerm"
          placeholder="What are you looking for?"
          value={props.input}
          onChange={(e) => props.setInput(e.target.value)}
        />
        <button type="submit" className="searchButton">
          <SearchIcon />
        </button>
      </form>
    </div>
  );
};

export default InputWithIcon;
