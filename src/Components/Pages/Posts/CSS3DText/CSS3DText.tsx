import './CSS3DText.css';
import DisplayPosts from '../common/DisplayPosts';
import MainLink from '../common/MainLink';
import Sample1 from './Sample1';
import Sample2 from './Sample2';

const CSS3DText = () => {
  return (
    <section className="css3d-text">
      <MainLink mode="dark" />
      <DisplayPosts mode="bright">
        <Sample1 />
        <Sample2 />
      </DisplayPosts>
    </section>
  );
};

export default CSS3DText;
