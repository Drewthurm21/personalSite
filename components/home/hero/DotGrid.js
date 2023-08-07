
import { useEffect } from "react";
import styles from "./dotgrid.module.scss";
import anime from "animejs";


export const DotGrid = () => {
  const GRID_WIDTH = 11;
  const GRID_HEIGHT = 19;
  const dots = [];

  let index = 0;
  for (let i = 0; i < GRID_WIDTH; i++) {
    for (let j = 0; j < GRID_HEIGHT; j++) {
      dots.push(
        <div
          onClick={handleDotClick}
          className={styles.dotWrapper}
          data-index={index}
          key={`${i}-${j}`}
        >
          <div className={`${styles.dot} dot-point dot-${index}`} data-index={index} />
        </div>
      );
      index++;
    }
  }

  //only create dot options that do not interfere with hero text
  let selectedDots = (() => {
    let options = [], i = 0,
      j = (GRID_HEIGHT * GRID_WIDTH) - (GRID_WIDTH * 3);
    while (i < (GRID_WIDTH * 4) && j < ((GRID_HEIGHT * GRID_WIDTH) - 1)) {
      options.push(i, j); i++; j++;
    }
    return options
  })();

  function randomDotJump() {
    const idx = Math.floor(Math.random() * ((selectedDots.length) - 0 + 1))
    anime({
      scale: [
        { value: 1.5, easing: "easeOutSine", duration: 180 },
        { value: 2, easing: "easeInOutQuad", duration: 300 },
      ],
      translateY: [
        { value: -15, easing: "easeOutSine", duration: 180 },
        { value: 0, easing: "easeInOutQuad", duration: 300 },
      ],
      opacity: [
        { value: 0.1, easing: "easeOutSine", duration: 180 },
        { value: 1, easing: "easeInOutQuad", duration: 300 },
      ],
      targets: `.dot-${selectedDots[idx]}`,
      background: 'rgb(10, 255, 157)',
    })
  }

  function handleDotClick(e) {
    anime({
      scale: [
        { value: 1.35, easing: "easeOutSine", duration: 250 },
        { value: 1, easing: "easeInOutQuad", duration: 500 },
      ],
      translateY: [
        { value: -15, easing: "easeOutSine", duration: 250 },
        { value: 0, easing: "easeInOutQuad", duration: 500 },
      ],
      opacity: [
        { value: 0.1, easing: "easeOutSine", duration: 250 },
        { value: 1, easing: "easeInOutQuad", duration: 500 },
      ],
      targets: ".dot-point",
      background: 'linear-gradient(180deg, rgb(17, 17, 17), rgb(235, 236, 243))',
      delay: anime.stagger(100, {
        grid: [GRID_WIDTH, GRID_HEIGHT],
        from: e.target.dataset.index,
      }),
    });
  };

  useEffect(() => {
    let dotClick;
    let wave = setTimeout(() => {
      handleDotClick({ target: { dataset: { index: 98 } } })
      dotClick = setInterval(randomDotJump, 2000)
    }, 2000)
    return () => {
      clearTimeout(wave)
      clearInterval(dotClick)
    }

  }, [])

  return (
    <div
      style={{ gridTemplateColumns: `repeat(${GRID_WIDTH}, 1fr)` }}
      className={styles.dotGrid}
    >
      {dots.map((dot) => dot)}
    </div>
  );
};