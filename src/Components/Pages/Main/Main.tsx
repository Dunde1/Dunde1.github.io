import MainContents from './MainContents';
import MainSearch from './MainSearch';
import './Main.css';

const Main = () => {
  return (
    <div className="Main">
      <section className="Main-header">
        <img className="Main-image box-outter" src="/main.png" alt="main hero image" />
        <MainSearch />
      </section>
      <MainContents />
    </div>
  );
};

export default Main;
