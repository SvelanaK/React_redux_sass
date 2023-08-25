import { useState } from "react";
import User from "./User";
import Select from "./Select";

function UserList() {
  const userArr = [
    {
      avatar:
        "https://static.vecteezy.com/system/resources/previews/014/194/232/original/avatar-icon-human-a-person-s-badge-social-media-profile-symbol-the-symbol-of-a-person-vector.jpg",
      name: "Кравцова Александра",
      status: "message",
      id: 1,
    },
    {
      avatar:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYyi-xeS9ZkM67gMKA-WWl0MLa1G6Wv7mZZTk06pA&s",
      name: "Рожков Денис",
      status: null,
      id: 2,
    },
    {
      avatar:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjRzkEEVtiPqqpsIeWxJzt-6pieZh0gl5wWncL3yQA1XDIZKWtEcYwAvp5qwbMnDWOAQI&usqp=CAU",
      name: "Диброва Алевтина",
      status: "warning",
      id: 3,
    },
    {
      avatar:
        "https://static.vecteezy.com/system/resources/previews/014/194/232/original/avatar-icon-human-a-person-s-badge-social-media-profile-symbol-the-symbol-of-a-person-vector.jpg",
      name: "nosikov@list.ru",
      status: null,
      id: 4,
    },
    {
      avatar:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjRzkEEVtiPqqpsIeWxJzt-6pieZh0gl5wWncL3yQA1XDIZKWtEcYwAvp5qwbMnDWOAQI&usqp=CAU",
      name: "Форс Александр",
      status: null,
      id: 5,
    },

    {
      avatar:
        "https://static.vecteezy.com/system/resources/previews/014/194/232/original/avatar-icon-human-a-person-s-badge-social-media-profile-symbol-the-symbol-of-a-person-vector.jpg",
      name: "Ахмедов Артур",
      status: null,
      id: 6,
    },
    {
      avatar:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYyi-xeS9ZkM67gMKA-WWl0MLa1G6Wv7mZZTk06pA&s",
      name: "Блажевич Игорь",
      status: null,
      id: 7,
    },

    {
      avatar:
        "https://static.vecteezy.com/system/resources/previews/014/194/232/original/avatar-icon-human-a-person-s-badge-social-media-profile-symbol-the-symbol-of-a-person-vector.jpg",
      name: "Валиева Руфина",
      status: null,
      id: 8,
    },
    {
      avatar: null,
      name: "Волошина Виктория",
      status: null,
      id: 9,
    },
  ];

  const [selectUser, setSelectUser] = useState(null);

  return (
    <div>
      <Select userArr={userArr}/>
      {userArr.map((person) => {
        return (
          <User
            person={person}
            key={person.id}
            setSelectUser={setSelectUser}
            selectUser={selectUser}
          />
        );
      })}
    </div>
  );
}

export default UserList;
