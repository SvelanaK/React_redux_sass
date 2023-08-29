import { useState } from 'react';
import { useSelector } from 'react-redux';

import User from './User';
import Select from './Select';
import { IState, IUser } from '../types/types';


function UserList() {
  const { usersArr } = useSelector((state: IState) => state)
  const [selectedUsersArr, setSelectedUsersArr] = useState<IUser[]>([]);
  const [isSelect, setIsSelect] = useState(false);

  return (
    <div>
      <Select
        selectedUsersArr={selectedUsersArr}
        setSelectedUsersArr={setSelectedUsersArr}
        isSelect={isSelect}
        setIsSelect={setIsSelect}
      />
      <div className='user-list'>
        {usersArr.map((person) => {
          return (
            <User
              setSelectedUsersArr={setSelectedUsersArr}
              isSelect={isSelect}
              person={person}
              key={person.id}
            />
          );
        })}</div>

    </div>
  );
}

export default UserList;
