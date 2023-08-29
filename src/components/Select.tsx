import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import { ISelectProps, IState } from '../types/types';

function Select({
  isSelect, setIsSelect, selectedUsersArr, setSelectedUsersArr,
}: ISelectProps) {
  const [check, setCheck] = useState(false);
  const { usersArr } = useSelector((state: IState) => state);

  useEffect(() => {
    usersArr.forEach((person) => {
      person.isChecked = check;
    });
    if (check) {
      setSelectedUsersArr(usersArr);
    } else {
      setSelectedUsersArr([]);
    }
  }, [check]);

  const toggleCheckbox = () => {
    setCheck(!check);
  };

  return (
    <>
      {isSelect ? (
        <div className='select-container'>
          <div className='check-container'>
            <input
              checked={check}
              type='checkbox'
              onChange={toggleCheckbox}
            />
            <button onClick={toggleCheckbox}>Все</button>
          </div>
          <div className='chip-select-complete'>{selectedUsersArr.length}</div>
          <div className='action-button-container'>
            <button>Действия</button>
            <button onClick={() => setIsSelect(false)}>Отменить</button>
          </div>
        </div>
      ) : (
        <div className='select-container'>
          <div className='chip-select'>{usersArr.length}</div>
          <button onClick={() => setIsSelect(true)}>Выбрать</button>
        </div>
      )}
    </>
  );
}

export default Select;
