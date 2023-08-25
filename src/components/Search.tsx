import { useState } from "react";

function Search() {
  const [open, setOpen] = useState(false);

  return (
    <div className="item-container">
      {open ? (
        <div className="buttons-container">
          <input className="search-input"></input>
          <button
            className="close-button"
            onClick={() => setOpen(false)}
          ></button>
        </div>
      ) : (
        <div className="buttons-container">
          <button
            className="search-button"
            onClick={() => setOpen(true)}
          ></button>
          <div>
            <button className="filter-button"></button>
            <button className="add-button"></button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Search;
