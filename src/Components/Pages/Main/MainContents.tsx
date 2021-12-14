import { Link } from 'react-router-dom';
import { atom, useRecoilValue } from 'recoil';
import pageInfo from './pageInfo.json';
import './MainContents.css';

export const posts = atom({ key: 'pageInfo', default: pageInfo });

const MainContents = () => {
  const postPages = useRecoilValue(posts);

  return (
    <section className="Main-contents">
      {postPages.map((v) => (
        <Link className="content box-outter" to={`/posts/${v.name}`} key={v.name} style={{ backgroundImage: `url("Main/${v.thumbnail}")` }}>
          <span className="post-name" style={{ color: v.options.textColor, fontSize: v.options.textSize }}>
            {v.name}
          </span>
          <span className="post-tag" style={{ borderColor: v.options.textColor, color: v.options.textColor }}>
            {v.tag.map((t) => `${t}`).join(', ')}
          </span>
        </Link>
      ))}
    </section>
  );
};

export default MainContents;
