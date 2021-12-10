import { Link } from 'react-router-dom';
import './MainLink.css';

const MainLink = ({ mode }: { mode: 'dark' | 'bright' }) => {
  return (
    <Link className={`go-main ${mode}`} to={'/'}>
      <img src={`/icons/back-arrow-${mode}.svg`} alt={'go main'} />
    </Link>
  );
};
export default MainLink;
