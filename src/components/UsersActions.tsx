import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import { buttonsActionsArr } from '../mockData/buttonsActionsArr';
import { setSelectTab } from '../state/trelloActions';

function UsersActions() {
  const [currentTab, setCurrentTab] = useState('notions')
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(setSelectTab(currentTab))
  }, [currentTab, dispatch])

  return (
    <div className='actions-user-buttons'>
      <div className='actions-left'>
        {buttonsActionsArr.map((item) => (
          <button
            className={`${currentTab === item.name ? 'active-tab' : ''}`}
            onClick={() => setCurrentTab(item.name)}>
            {item.text}
          </button>
        ))}
      </div>
      <div className='action-right'>
        {currentTab === 'notions' && <button>Новая заметка</button>}
        {currentTab === 'consultations' && <button>Записать</button>}
        {(currentTab === 'video' || currentTab === 'events') && <button>Рекомендовать</button>}
        <button className='add-notion'></button>
      </div>
    </div>
  );
}

export default UsersActions;
