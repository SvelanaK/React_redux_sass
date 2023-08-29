import { useSelector } from 'react-redux';

import { IState } from '../types/types';
import NotionItem from './NotionItem';


function Notions() {
  const { currentUser } = useSelector((state: IState) => state);

  return (
    <div className='notion'>
      {currentUser?.notions ?
        (currentUser?.notions?.map((notion) => (
          <NotionItem key={notion.id} notion={notion} />
        ))
        ) : <div>Empty</div>}

    </div>
  );
}

export default Notions;





