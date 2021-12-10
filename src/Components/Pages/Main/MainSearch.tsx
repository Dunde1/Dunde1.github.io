import { useSetRecoilState } from 'recoil';
import { posts } from './MainContents';
import pageInfo from './pageInfo.json';

const MainSearchInput = ({}) => {
  const setPostPages = useSetRecoilState(posts);

  const searchAlgorism = (searchText: string) => {
    const parsingTexts = searchText
      .replace(',', '')
      .split(' ')
      .filter((text) => text !== '');

    if (parsingTexts.length === 0) {
      setPostPages(pageInfo);
      return;
    }

    const newPostPages = pageInfo.filter((page) => {
      if (
        parsingTexts.findIndex((text) => {
          if (page.name.includes(text)) return true;
          if (page.tag.filter((tag) => tag.includes(text)).length !== 0) return true;
          return false;
        }) !== -1
      )
        return true;
    });

    setPostPages(newPostPages);
  };

  let timer: NodeJS.Timeout;

  const onInput = (e: any) => {
    const WAITING_TIME = 500;

    clearTimeout(timer);

    timer = setTimeout(() => {
      searchAlgorism(e.target.value);
    }, WAITING_TIME);
  };

  return <input className="search-input" type="text" onInput={onInput} />;
};

const MainSearch = () => {
  return (
    <div className="Main-search box-outter">
      <button
        className="search-button"
        onClick={() => {
          alert('not yet');
        }}
      >
        <img src="/icons/search.svg" width="20px" height="20px" alt="search button" />
      </button>
      <MainSearchInput />
    </div>
  );
};

export default MainSearch;
