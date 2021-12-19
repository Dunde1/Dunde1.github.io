import '../../../common/fonts/addFonts.css';
import './Main.css';
import MainBanner from './MainBanner';
import MainSearch from './MainSearch';
import MainContents from './MainContents';
import { atom, useRecoilValue } from 'recoil';

export const mainTheme = atom({ key: 'mainTheme', default: 'day' });

const MainBackGround = () => {
  const theme = useRecoilValue(mainTheme);

  return <div className={`background ${theme}`} />;
};

const Main = () => {
  return (
    <div className="Main">
      <MainBackGround />
      <section className="Main-header">
        <MainBanner />
        <MainSearch />
      </section>
      <MainContents />
    </div>
  );
};

export default Main;
