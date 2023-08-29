import { useState } from 'react';
import { useSelector } from 'react-redux';

import { IState } from '../types/types';

function UserInfo() {
  const [open, setOpen] = useState(false);
  const { currentUser } = useSelector((state: IState) => state)

  const emptyAvatar = './icons-svg/empty.svg';

  return (
    <>
      {currentUser &&
        <div className='person-info'>
          <div className='left-info'>
            <div className='info-avatar'>
              <img src={currentUser.avatar ? currentUser.avatar : emptyAvatar} alt='avatar' />
            </div>
            <div className='info-content'>
              <div className='info-name'>{currentUser.name}</div>
              <span className='info-more'>{currentUser.age} лет, {currentUser.gender}</span>
            </div>
          </div>
          <button className={`more-button ${open ? 'more-button-active' : ''}`} onClick={() => setOpen(!open)}></button>
          {open &&
            <ul className='modal-more'>
              <li>Изменить</li>
              <li>Удалить</li>
            </ul>
          }
        </div>
      }
    </>
  );
}

export default UserInfo;
