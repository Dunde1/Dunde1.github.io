import '../../../common/fonts/addFonts.css';
import './Main.css';
import MainBanner from './MainBanner';
import MainSearch from './MainSearch';
import MainContents from './MainContents';
import { atom, useRecoilValue } from 'recoil';

export const mainTheme = atom({ key: 'mainTheme', default: 'day' });

const Main = () => {
  const theme = useRecoilValue(mainTheme);

  return (
    <div className={`Main ${theme}`}>
      <section className="Main-header">
        <MainBanner />
        <MainSearch />
      </section>
      <MainContents />
    </div>
  );
};

export default Main;
