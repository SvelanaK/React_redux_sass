import { useState } from "react";

function Select({ userArr }) {
  const [select, setSelect] = useState(false);

  return (
    <>
      {select ? (
        <div className="select-container">
          <input type="checkbox" id="checkbox"></input>
          <label htmlFor="checkbox">Все</label>
          <button>Действия</button>
          <button onClick={() => setSelect(false)}>Отменить</button>
        </div>
      ) : (
        <div className="select-container">
          <div className="chip-select">{userArr.length}</div>
          <button onClick={() => setSelect(true)}>Выбрать</button>
        </div>
      )}
    </>
  );
}

export default Select;
