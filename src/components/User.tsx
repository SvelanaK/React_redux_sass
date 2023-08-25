function User({ person, selectUser, setSelectUser }) {
  const emptyAvatar = "./empty.svg";

  const status = selectUser === person.id ? "select" : "";

  return (
    <div
      className="item-container person"
      id={status}
      key={person.id}
      onClick={() => setSelectUser(person.id)}
    >
      <div className="avatar">
        <img src={person.avatar ? person.avatar : emptyAvatar} alt="avatar" />
      </div>
      <div className="person-name">{person.name}</div>
      <img src={`./${person.status}.svg`} alt=""></img>
    </div>
  );
}

export default User;
