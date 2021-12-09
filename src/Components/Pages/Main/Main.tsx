import MainContents from './MainContents';
import './Main.css';

const Search = () => {
  return (
    <div className="Main-search box-outter">
      <button className="search-button">
        <img src="/search.svg" width="20px" height="20px" alt="search button" />
      </button>
      <input className="search-input" type="text" />
    </div>
  );
};

const Main = () => {
  return (
    <div className="Main">
      <section className="Main-header">
        <img className="Main-image box-outter" src="/main.png" alt="main hero image" />
        <Search />
      </section>
      <MainContents />
    </div>
  );
};

export default Main;
