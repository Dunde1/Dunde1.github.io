import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Monitor = ({ active }: { active: number }) => {
  return (
    <div className="monitor">
      <div className="pages" style={{ '--i': active } as React.CSSProperties}>
        <div className="page home">
          <Link to="/">Go to main!</Link>
          <img src={'/icons/back-arrow-dark.svg'} alt="move arrow" />
        </div>
        <div className="page git">
          <a href="https://github.com/Dunde1" target={'_blank'}>
            Go to my git!
          </a>
          <img src={'/icons/back-arrow-bright.svg'} alt="move arrow" />
        </div>
        <div className="page blog">
          <a href="https://velog.io/@dunde" target={'_blank'}>
            Go to my blog!
          </a>
          <img src={'/icons/back-arrow-dark.svg'} alt="move arrow" />
        </div>
        <div className="page source">
          <a href="https://www.youtube.com/watch?v=ArTVfdHOB-M" target={'_blank'}>
            Go to youtube source!
          </a>
          <img src={'/icons/back-arrow-bright.svg'} alt="move arrow" />
        </div>
      </div>
    </div>
  );
};

const Navigation = ({ active, setActive }: { active: number; setActive: React.Dispatch<React.SetStateAction<number>> }) => {
  const color = ['white', 'dimgray', 'aquamarine', 'cadetblue'];

  return (
    <div className="navigation" style={{ '--shadow-color': color[active] } as React.CSSProperties}>
      <ul>
        <li className={`list ${active === 0 ? 'active' : ''}`} onClick={() => setActive(0)}>
          <a href="#">
            <span className="icon">
              <img src={'/icons/home.svg'} />
            </span>
            <span className="text">Home</span>
          </a>
        </li>
        <li className={`list ${active === 1 ? 'active' : ''}`} onClick={() => setActive(1)}>
          <a href="#">
            <span className="icon">
              <img src={'/icons/git.svg'} />
            </span>
            <span className="text">Git</span>
          </a>
        </li>
        <li className={`list ${active === 2 ? 'active' : ''}`} onClick={() => setActive(2)}>
          <a href="#">
            <span className="icon">
              <img src={'/icons/blog.svg'} />
            </span>
            <span className="text">Blog</span>
          </a>
        </li>
        <li className={`list ${active === 3 ? 'active' : ''}`} onClick={() => setActive(3)}>
          <a href="#">
            <span className="icon">
              <img src={'/icons/youtube.svg'} />
            </span>
            <span className="text">Source</span>
          </a>
        </li>
        <div className="indicator"></div>
      </ul>
    </div>
  );
};

const Sample1 = () => {
  const [active, setActive] = useState(0);

  return (
    <div className="sample">
      <Monitor active={active} />
      <Navigation active={active} setActive={setActive} />
    </div>
  );
};

export default Sample1;
