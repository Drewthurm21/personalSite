import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import HeroSection from '../components/home/hero/HeroSection';
import 'intersection-observer'

describe('renders HeroSection and DotGrid properly', () => {

  beforeEach(() => {
    render(<HeroSection />);
  })

  it('renders the title and subtitle with the proper text and styles', () => {
    const titleElement = screen.getByText(/Hey! I'm Drew/i);
    const subtitleElement = screen.getByText(/Full Stack Developer/i);

    expect(titleElement).toHaveStyle(`
      font-size: 1.5em;
      font-weight: bold;
    `);

    expect(subtitleElement).toHaveStyle(`
      visibility: visible;
    `);
  });

  it('renders the dot grid component', () => {
    const dotGrid = screen.getByTestId('dotGrid-wrapper')

    expect(dotGrid).toBeTruthy()
    expect(dotGrid).not.toBeEmptyDOMElement()
  });

})