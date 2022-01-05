import style from './AnimatedStairs.module.css';
import React, { useEffect, useState } from 'react';
import { atom, useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import MainLink from '../common/MainLink';

const dragPixelAtom = atom({ key: 'dragPixel', default: 0 });
const sliderDefaultPixelAtom = atom({ key: 'sliderDefaultPixel', default: 0 });

const Stairs = ({ step, isAuto }: { step: number; isAuto: boolean }) => {
  const dragPixel = useRecoilValue(dragPixelAtom);
  const steps = new Array(step).fill('');
  const { stairs, animated, base } = style;

  return (
    <div className={style['stairs-scale']}>
      <div className={`${stairs} ${isAuto ? animated : ''}`} style={{ '--drag': dragPixel + 'deg' } as React.CSSProperties}>
        <div className={base}></div>
        {steps.map((_, i) => (
          <div className={style.step} style={{ '--j': i + 1 } as React.CSSProperties} key={i}>
            <i></i>
            <i></i>
          </div>
        ))}
      </div>
    </div>
  );
};

const ControlPanel = ({ isAuto, setIsAuto }: { isAuto: boolean; setIsAuto: React.Dispatch<React.SetStateAction<boolean>> }) => {
  const [dragPixel, setDragPixel] = useRecoilState(dragPixelAtom);
  const setSliderDefaultPixel = useSetRecoilState(sliderDefaultPixelAtom);

  const slider = React.createRef<HTMLDivElement>();

  const setSlider = (sliderElement: HTMLDivElement | null) => {
    setSliderDefaultPixel(sliderElement?.getBoundingClientRect().x as number);
  };

  useEffect(() => {
    setSlider(slider.current);
  }, []);

  useEffect(() => {
    const resizeEvent = () => {
      setSlider(slider.current);
      setDragPixel(0);
    };

    window.addEventListener('resize', resizeEvent);

    return () => {
      window.removeEventListener('resize', resizeEvent);
    };
  }, [slider]);

  const { bar, disable } = style;

  return (
    <div className={style['control-panel']}>
      <div className={bar}>
        <div
          className={`${style.slider}${isAuto ? ' ' + disable : ''}`}
          style={{ '--drag': dragPixel + 'px' } as React.CSSProperties}
          ref={slider}
        ></div>
      </div>
      <button className={`${style['auto-button']}${isAuto ? '' : ' ' + disable}`} onClick={() => setIsAuto(isAuto ? false : true)}>
        auto
      </button>
      <a className={style['go-to-youtube']} href="https://www.youtube.com/watch?v=wNC_J0A45Jw" target={'_black'}>
        go to youtube source!
      </a>
    </div>
  );
};

const AnimatedStairs = () => {
  const [isAuto, setIsAuto] = useState(true);
  const setDragPixel = useSetRecoilState(dragPixelAtom);
  const sliderDefaultPixel = useRecoilValue(sliderDefaultPixelAtom);
  const { slider } = style;

  let isMouseDownSlider = false;

  const mouseDownSliderCheck = (e: React.MouseEvent<HTMLElement>) => {
    const { className } = e.target as HTMLElement;

    if (className === slider) {
      isMouseDownSlider = true;
    }
  };

  const sliderMove = (e: React.MouseEvent<HTMLElement>) => {
    if (!isMouseDownSlider) return;

    const [MIN_PIXEL, MAX_PIXEL, SLIDER_HARF_WIDTH] = [0, 360, 10];
    const moveOffset = e.pageX - sliderDefaultPixel - SLIDER_HARF_WIDTH;

    if (moveOffset < MIN_PIXEL || moveOffset > MAX_PIXEL) return;

    setDragPixel(moveOffset < MIN_PIXEL ? MIN_PIXEL : moveOffset > MAX_PIXEL ? MAX_PIXEL : moveOffset);
  };

  return (
    <section
      className={style['animated-stairs']}
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
