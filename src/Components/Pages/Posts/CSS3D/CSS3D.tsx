import React from 'react';
import { Link } from 'react-router-dom';
import '../common/common.css';
import './CSS3D.css';

const CSS3D = () => {
  return (
    <section className="css3d">
      <Link className="go-main" to={'/'}>
        <img src={'/icons/back-arrow.svg'} alt={'go main'} />
      </Link>
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
