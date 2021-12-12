import React, { useState } from 'react';
import './Sample2.css';

const Monitor = ({ active }: { active: number }) => {
  return (
    <div className="monitor">
      <div className="pages" style={{ '--i': active } as React.CSSProperties}>
        <div className={`page home ${active === 0 ? 'active' : ''}`}>
          <img src={'/icons/home.svg'} alt="home" />
        </div>
        <div className={`page person ${active === 1 ? 'active' : ''}`}>
          <img src={'/icons/person.svg'} alt="person" />
        </div>
        <div className={`page chat ${active === 2 ? 'active' : ''}`}>
          <img src={'/icons/chatbubble.svg'} alt="chat" />
        </div>
        <div className={`page camera ${active === 3 ? 'active' : ''}`}>
          <img src={'/icons/camera.svg'} alt="camera" />
        </div>
        <div className={`page setting ${active === 4 ? 'active' : ''}`}>
          <img src={'/icons/settings.svg'} alt="setting" />
        </div>
      </div>
    </div>
  );
};

const Navigation = ({ active, setActive }: { active: number; setActive: React.Dispatch<React.SetStateAction<number>> }) => {
  return (
    <div className="navigation">
      <ul>
        <li className={active === 0 ? 'active' : ''} onClick={() => setActive(0)}>
          <a href="#">
            <span className="icon">
              <img src="/icons/home.svg" />
            </span>
            <span className="text">Home</span>
          </a>
        </li>
        <li className={active === 1 ? 'active' : ''} onClick={() => setActive(1)}>
          <a href="#">
            <span className="icon">
              <img src="/icons/person.svg" />
            </span>
            <span className="text">Profile</span>
          </a>
        </li>
        <li className={active === 2 ? 'active' : ''} onClick={() => setActive(2)}>
          <a href="#">
            <span className="icon">
              <img src="/icons/chatbubble.svg" />
            </span>
            <span className="text">Messages</span>
          </a>
        </li>
        <li className={active === 3 ? 'active' : ''} onClick={() => setActive(3)}>
          <a href="#">
            <span className="icon">
              <img src="/icons/camera.svg" />
            </span>
            <span className="text">Photos</span>
          </a>
        </li>
        <li className={active === 4 ? 'active' : ''} onClick={() => setActive(4)}>
          <a href="#">
            <span className="icon">
              <img src="/icons/settings.svg" />
            </span>
            <span className="text">Settings</span>
          </a>
        </li>
        <div className="indicator" style={{ '--indicator': active } as React.CSSProperties}></div>
      </ul>
    </div>
  );
};

const Sample2 = () => {
  const [active, setActive] = useState(0);

  return (
    <div className="sample sample2">
      <Monitor active={active} />
      <Navigation active={active} setActive={setActive} />
    </div>
  );
};

export default Sample2;
