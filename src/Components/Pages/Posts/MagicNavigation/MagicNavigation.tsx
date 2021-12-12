import Sample1 from './Sample1';
import MainLink from '../common/MainLink';
import DisplayPosts from '../common/DisplayPosts';
import './MagicNavigation.css';

const MagicNavigation = () => {
  return (
    <section className="magic-navigation">
      <MainLink mode="dark" />
      <DisplayPosts mode="bright">
        <Sample1 />
      </DisplayPosts>
    </section>
  );
};

export default MagicNavigation;
