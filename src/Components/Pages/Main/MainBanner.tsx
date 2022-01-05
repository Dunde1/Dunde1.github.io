import style from './MainBanner.module.css';
import { useRecoilState } from 'recoil';
import { mainTheme } from './Main';

const MainBanner = () => {
  const [theme, setTheme] = useRecoilState(mainTheme);
  const { banner, contents, text, effect } = style;

  const themeToggle = () => {
    setTheme((prev) => (prev === 'day' ? 'night' : 'day'));
  };

  return (
    <div className={banner}>
      <div className={contents}>
        <span className={text} onClick={themeToggle}>
          Dunde : web
        </span>
        <i className={`${effect} ${style[theme]}`} onClick={themeToggle} />
      </div>
    </div>
  );
};

export default MainBanner;
