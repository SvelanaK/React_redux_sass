import { ChangeEvent, MouseEvent } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getCurrentUser } from '../state/trelloActions';
import { IState, IUserProps } from '../types/types';

function User({
  person,
  isSelect,
  setSelectedUsersArr,
}: IUserProps) {
  const emptyAvatar = './icons-svg/empty.svg';

  const { usersArr, currentUser } = useSelector((state: IState) => state)
  const status = currentUser ? (currentUser.id === person.id ? 'select' : '') : '';

  const dispatch = useDispatch();

  function stopProp(event: MouseEvent<HTMLInputElement>) {
    event.stopPropagation();
  }
  function selectUser(event: ChangeEvent<HTMLInputElement>) {
    person.isChecked = event.target.checked;
    const newArr = usersArr.filter((item) => item.isChecked)
    setSelectedUsersArr(newArr)
  }


  return (
    <div
      className='item-container person'
      id={status}
      key={person.id}
      onClick={() => dispatch(getCurrentUser(person))}
    >
      {person.status === 'message' &&
        <img className='message' src='./icons-svg/line.svg' alt='' />
      }
      {isSelect && (
        <input
          type='checkbox'
          checked={person.isChecked}
          className='checkbox-person'
          onChange={(event) => selectUser(event)}
          onClick={(event) => stopProp(event)}
        ></input>
      )}
      <div className='avatar'>
        <img src={person.avatar ? person.avatar : emptyAvatar} alt='avatar' />
      </div>
      <div className='person-name'>{person.name}</div>
      <img src={`./icons-svg/${person.status}.svg`} alt='' />
    </div>
  );
}

export default User;
