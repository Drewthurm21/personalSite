import React, { useEffect } from "react";
import styles from "./dotgrid.module.scss";
import anime from "animejs";

export const gridOptions = {
  width: 11,
  height: 19,
  intervalDelay: 2000,

  get area() {
    return this.height * this.width
  }
}

//create a grid of dot elements to show behind the hero section
const dotGrid = (() => {
  const dots = [];
  let index = 0;
  for (let i = 0; i < gridOptions.width; i++) {
    for (let j = 0; j < gridOptions.height; j++) {
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
  return dots
})();

//create the index options for randomDotJump below
let selectedDots = (() => {
  //only include idx options for dots that don't interfere with hero text
  let options = []
  let i = 0
  let j = (gridOptions.area) - (gridOptions.width * 3);
  while (i < (gridOptions.width * 4) && j < ((gridOptions.area) - 1)) {
    options.push(i, j); i++; j++;
  }
  return options
})();

export function randomDotJump(
  idx = Math.floor(Math.random() * ((selectedDots.length) - 0 + 1))
) {
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
      { value: 1, easing: "easeOutSine", duration: 180 },
      { value: 1, easing: "easeInOutQuad", duration: 300 },
    ],
    targets: `.dot-${selectedDots[idx]}`,
    background: 'rgb(10, 255, 157)',
  })
}

export function handleDotClick(e) {
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
      grid: [gridOptions.width, gridOptions.height],
      from: e.target.dataset.index,
    }),
  });
};

export default function DotGrid() {

  useEffect(() => {
    let dotClick;
    let wave = setTimeout(() => {
      handleDotClick({ target: { dataset: { index: 98 } } })
      dotClick = setInterval(randomDotJump, gridOptions.intervalDelay)
    }, 2000)

    return () => {
      clearTimeout(wave)
      clearInterval(dotClick)
    }

  }, [])

  return (
    <div
      data-testid="dotGrid-wrapper"
      style={{ gridTemplateColumns: `repeat(${gridOptions.width}, 1fr)` }}
      className={styles.dotGrid}
    >
      {dotGrid.map((dot) => dot)}
    </div>
  );
};