import './Sample2.css';
import React from 'react';

const Sample2 = () => {
  return (
    <div className="sample2">
      <div className="box">
        {new Array(16).fill(0).map((_, i) => (
          <span style={{ '--i': i + 1 } as React.CSSProperties}>
            <i>CSS</i> is <i>A</i>wesome
          </span>
        ))}
      </div>
    </div>
  );
};

export default Sample2;
