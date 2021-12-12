import React, { useState } from 'react';
import './DisplayPosts.css';

const DisplayPosts = ({ children, mode }: { children: React.ReactElement[] | React.ReactElement; mode: 'dark' | 'bright' }) => {
  const childrenCount = Array.isArray(children) ? children.length : 1;
  const [viewIdx, setViewIdx] = useState(0);
  const isEnd = { prev: viewIdx === 0, next: childrenCount - 1 === viewIdx };

  const DISABLE = 'disable';

  if (Array.isArray(children)) {
    children = children.map((child, i) => (
      <div className="display-child" style={{ '--idx': i - viewIdx } as React.CSSProperties} key={i}>
        {child}
      </div>
    ));
  } else {
    children = (
      <div className="display-child" style={{ '--idx': 0 } as React.CSSProperties}>
        {children}
      </div>
    );
  }

  const onClick = {
    prev: () => {
      if (!isEnd.prev) setViewIdx(viewIdx - 1);
    },
    next: () => {
      if (!isEnd.next) setViewIdx(viewIdx + 1);
    },
  };

  return (
    <section className="display-posts">
      <button className={`prev ${isEnd.prev ? DISABLE : ''}`} onClick={onClick.prev}>
        <img src={`/icons/left-arrow-${mode}.svg`} />
      </button>
      {children}
      <button className={`next ${isEnd.next ? DISABLE : ''}`} onClick={onClick.next}>
        <img src={`/icons/left-arrow-${mode}.svg`} />
      </button>
    </section>
  );
};

export default DisplayPosts;
