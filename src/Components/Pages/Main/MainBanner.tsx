import './MainBanner.css';
import { useRecoilState } from 'recoil';
import { mainTheme } from './Main';

const MainBanner = () => {
  const [theme, setTheme] = useRecoilState(mainTheme);

  const themeToggle = () => {
    setTheme((prev) => (prev === 'day' ? 'night' : 'day'));
  };

  return (
    <div className="Main-banner">
      <div className="contents">
        <span className="text" onClick={themeToggle}>
          Dunde : web
        </span>
        <i className={`effect ${theme}`} onClick={themeToggle} />
      </div>
    </div>
  );
};

export default MainBanner;
