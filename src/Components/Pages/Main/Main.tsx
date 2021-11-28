import './Main.css';

const Search = () => {
  return (
    <div className="Main-search">
      <button className="search-button">
        <img src="/search.svg" width="20px" height="20px" alt="search button" />
      </button>
      <input className="search-input" type="text" />
    </div>
  );
};

const Contents = () => {
  const tmp = <div className="content" />;

  return <section className="Main-contents">{[tmp, tmp, tmp, tmp]}</section>;
};

const Main = () => {
  return (
    <div className="Main">
      <section className="Main-header">
        <img className="Main-image" src="/main.png" alt="main hero image" />
        <Search />
      </section>
      <Contents />
    </div>
  );
};

export default Main;
