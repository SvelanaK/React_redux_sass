import { useSelector } from 'react-redux';

import { IState } from '../types/types';
import Consultations from './Consultations';
import Events from './Events';
import Notions from './Notions';
import Search from './Search';
import UserInfo from './UserInfo';
import UserList from './UserList';
import UsersActions from './UsersActions';
import Video from './Video';

function MainPage() {
  const { currentUser, selectTab } = useSelector((state: IState) => state)

  return (
    <>
      <div className='header'></div>
      <section className='container'>
        <nav className='left-nav'>
          <Search />
          <UserList />
        </nav>
        <section className='right-nav'>
          {currentUser &&
            <>
              <UserInfo />
              <UsersActions />
              {selectTab === 'notions' && <Notions />}
              {selectTab === 'consultations' && <Consultations />}
              {selectTab === 'video' && <Video />}
              {selectTab === 'events' && <Events />}
            </>
          }
        </section>
      </section>
    </>
  );
}

export default MainPage;
