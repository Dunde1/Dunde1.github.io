import Sample1 from './Sample1';
import Sample2 from './Sample2';
import MainLink from '../common/MainLink';
import DisplayPosts from '../common/DisplayPosts';
import './MagicNavigation.css';

const MagicNavigation = () => {
  return (
    <section className="magic-navigation">
      <MainLink mode="dark" />
      <DisplayPosts mode="bright">
        <Sample1 />
        <Sample2 />
      </DisplayPosts>
    </section>
  );
};

export default MagicNavigation;
