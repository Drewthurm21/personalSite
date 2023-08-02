import styles from "./dotgrid.module.scss";
import anime from "animejs";

export const DotGrid = () => {
  const GRID_WIDTH = 25;
  const GRID_HEIGHT = 20;
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
          <div className={`${styles.dot} dot-point`} data-index={index} />
        </div>
      );
      index++;
    }
  }

  function handleDotClick(e) {
    anime({
      targets: ".dot-point",
      scale: [
        { value: 1.35, easing: "easeOutSine", duration: 180 },
        { value: 1, easing: "easeInOutQuad", duration: 300 },
      ],
      translateY: [
        { value: -15, easing: "easeOutSine", duration: 180 },
        { value: 0, easing: "easeInOutQuad", duration: 300 },
      ],
      opacity: [
        { value: 0.1, easing: "easeOutSine", duration: 180 },
        { value: 1, easing: "easeInOutQuad", duration: 300 },
      ],
      delay: anime.stagger(100, {
        grid: [GRID_WIDTH, GRID_HEIGHT],
        from: e.target.dataset.index,
      }),
    });
  };

  return (
    <div
      style={{ gridTemplateColumns: `repeat(${GRID_WIDTH}, 1fr)` }}
      className={styles.dotGrid}
    >
      {dots.map((dot) => dot)}
    </div>
  );
};
