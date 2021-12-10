import React from 'react';
import MainLink from '../common/MainLink';
import './CSS3D.css';

const CSS3D = () => {
  return (
    <section className="css3d">
      <MainLink mode={'dark'} />
      <div className="cube">
        <div className="top">
          <a className="go-youtube-btn" href="https://www.youtube.com/watch?v=nOdDtnHWaDo" target={'_blank'}>
            Go to youtube source!
          </a>
        </div>
        <div>
          <span style={{ '--i': 0 } as React.CSSProperties}></span>
          <span style={{ '--i': 1 } as React.CSSProperties}></span>
          <span style={{ '--i': 2 } as React.CSSProperties}></span>
          <span style={{ '--i': 3 } as React.CSSProperties}></span>
        </div>
      </div>
    </section>
  );
};

export default CSS3D;
