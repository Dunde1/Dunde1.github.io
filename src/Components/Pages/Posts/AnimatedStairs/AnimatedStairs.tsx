import React, { useEffect, useRef, useState } from 'react';
import { atom, useRecoilValue, useSetRecoilState } from 'recoil';
import MainLink from '../common/MainLink';
import './AnimatedStairs.css';

const dragPixelAtom = atom({ key: 'dragPixel', default: 0 });
const sliderDefaultPixelAtom = atom({ key: 'sliderDefaultPixel', default: 0 });

const Stairs = ({ step, isAuto }: { step: number; isAuto: boolean }) => {
  const dragPixel = useRecoilValue(dragPixelAtom);
  const steps = new Array(step).fill('');

  return (
    <div className={`stairs${isAuto ? ' animated' : ''}`} style={{ '--drag': dragPixel + 'deg' } as React.CSSProperties}>
      <div className="base"></div>
      {steps.map((_, i) => (
        <div className="step" style={{ '--j': i + 1 } as React.CSSProperties}>
          <i></i>
          <i></i>
        </div>
      ))}
    </div>
  );
};

const ControlPanel = ({ isAuto, setIsAuto }: { isAuto: boolean; setIsAuto: React.Dispatch<React.SetStateAction<boolean>> }) => {
  const dragPixel = useRecoilValue(dragPixelAtom);
  const setSliderDefaultPixel = useSetRecoilState(sliderDefaultPixelAtom);

  const slider = React.createRef<HTMLDivElement>();

  useEffect(() => {
    setSliderDefaultPixel(slider.current?.getBoundingClientRect().x as number);
  }, []);

  return (
    <div className="control-panel">
      <div className="bar">
        <div className={`slider${isAuto ? ' disable' : ''}`} style={{ '--drag': dragPixel + 'px' } as React.CSSProperties} ref={slider}></div>
      </div>
      <button className={`auto-button${isAuto ? '' : ' disable'}`} onClick={() => setIsAuto(isAuto ? false : true)}>
        auto
      </button>
      <a className="go-to-youtube" href="https://www.youtube.com/watch?v=wNC_J0A45Jw" target={'_black'}>
        go to youtube source!
      </a>
    </div>
  );
};

const AnimatedStairs = () => {
  const [isAuto, setIsAuto] = useState(true);
  const setDragPixel = useSetRecoilState(dragPixelAtom);
  const sliderDefaultPixel = useRecoilValue(sliderDefaultPixelAtom);

  let isMouseDownSlider = false;

  const mouseDownSliderCheck = (e: React.MouseEvent<HTMLElement>) => {
    const { className } = e.target as HTMLElement;

    if (className === 'slider') {
      isMouseDownSlider = true;
    }
  };

  const sliderMove = (e: React.MouseEvent<HTMLElement>) => {
    if (!isMouseDownSlider) return;

    const [MIN_PIXEL, MAX_PIXEL] = [0, 360];
    const moveOffset = e.pageX - sliderDefaultPixel;

    if (moveOffset < MIN_PIXEL || moveOffset > MAX_PIXEL) return;

    setDragPixel(moveOffset < MIN_PIXEL ? MIN_PIXEL : moveOffset > MAX_PIXEL ? MAX_PIXEL : moveOffset);
  };

  return (
    <section
      className="animated-stairs"
      onMouseDown={mouseDownSliderCheck}
      onMouseMove={sliderMove}
      onMouseUp={() => {
        isMouseDownSlider = false;
      }}
    >
      <MainLink mode="bright" />
      <Stairs step={6} isAuto={isAuto} />
      <ControlPanel isAuto={isAuto} setIsAuto={setIsAuto} />
    </section>
  );
};

export default React.memo(AnimatedStairs);
