import '../../../common/fonts/addFonts.css';
import style from './Main.module.css';
import './Main.common.css';
import MainBanner from './MainBanner';
import MainSearch from './MainSearch';
import MainContents from './MainContents';
import { atom, useRecoilValue } from 'recoil';

export const mainTheme = atom({ key: 'mainTheme', default: 'day' });

const MainBackGround = () => {
  const theme = useRecoilValue(mainTheme);
  const { background } = style;

  return <div className={`${background} ${style[theme]}`} />;
};

const Main = () => {
  const { main, header } = style;

  return (
    <div className={main}>
      <MainBackGround />
      <section className={header}>
        <MainBanner />
        <MainSearch />
      </section>
      <MainContents />
    </div>
  );
};

export default Main;
