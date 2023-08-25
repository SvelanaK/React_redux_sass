import Search from "./Search";
import UserList from "./UserList";

function MainPage() {

  return (
    <>
      <div className="header"></div>
      <section className="container">
        <nav className="left-nav">
          <Search />

          <UserList />
        </nav>
      </section>
    </>
  );
}

export default MainPage;
