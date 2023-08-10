import { render } from '@testing-library/react';
import DotGrid, { handleDotClick, gridOptions } from '../components/home/hero/DotGrid';
import anime from 'animejs';

jest.mock('animejs');

describe('handleDotClick function', () => {

  beforeAll(() => {
    jest.useFakeTimers();
  });

  afterAll(() => {
    jest.useRealTimers();
  });

  it('should perform randomDotJump animation on [delay] interval', () => {
    render(<DotGrid />);

    jest.advanceTimersByTime(gridOptions.intervalDelay * 3);
    expect(anime).toHaveBeenCalledTimes(3);
  });

  it('should perform dotGridAnimation with expected properties', () => {
    const fakeEvent = {
      target: {
        dataset: {
          index: 42,
        },
      },
    };

    handleDotClick(fakeEvent);

    expect(anime).toHaveBeenCalledWith({
      scale: [
        { value: 1.35, easing: 'easeOutSine', duration: 250 },
        { value: 1, easing: 'easeInOutQuad', duration: 500 },
      ],
      translateY: [
        { value: -15, easing: 'easeOutSine', duration: 250 },
        { value: 0, easing: 'easeInOutQuad', duration: 500 },
      ],
      opacity: [
        { value: 0.1, easing: 'easeOutSine', duration: 250 },
        { value: 1, easing: 'easeInOutQuad', duration: 500 },
      ],
      targets: '.dot-point',
      background: 'linear-gradient(180deg, rgb(17, 17, 17), rgb(235, 236, 243))',
      delay: expect.any(Function),
    });
  });



});