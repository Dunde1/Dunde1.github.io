import './Sample1.css';

const Sample1 = () => {
  return (
    <div className="sample1">
      <div className="cigarette">
        {new Array(10).fill(0).map((_, i) => (
          <span style={{ '--i': i + 1 } as React.CSSProperties}>
            <i>Nooooo</i>Smooooooooking<i>|</i>
          </span>
        ))}
      </div>
    </div>
  );
};

export default Sample1;
