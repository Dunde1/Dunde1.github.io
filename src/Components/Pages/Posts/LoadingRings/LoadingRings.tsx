import MainLink from '../common/MainLink';
import './LoadingRings.css';

const LoadingRings = () => {
  return (
    <section className="loading-rings">
      <MainLink mode={'dark'} />
      <a className="go-to-youtube" href="https://www.youtube.com/watch?v=1Aq9OJuS3ok" target={'_blank'}>
        Go to youtube source!
      </a>
      <div className="container">
        <div className="ring"></div>
        <div className="ring"></div>
        <div className="ring"></div>
        <div className="ring"></div>
        <div className="ring"></div>
        <p>Loading...</p>
      </div>
    </section>
  );
};

export default LoadingRings;
