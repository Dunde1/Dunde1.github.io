import { Link } from 'react-router-dom';
import pageInfo from './pageInfo.json';

const PostPages = pageInfo;

const MainContents = () => {
  return (
    <section className="Main-contents">
      {PostPages.map((v) => (
        <Link className="content box-outter" to={`/posts/${v.name}`} key={v.name} />
      ))}
    </section>
  );
};

export default MainContents;
