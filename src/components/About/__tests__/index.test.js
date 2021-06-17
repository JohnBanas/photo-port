import React from 'react';
//test methods from react library
import { render, cleanup } from '@testing-library/react';
//test from jest-dom which allows jest to test dom elements
import '@testing-library/jest-dom/extend-expect';
//bring in the about component for testing
import About from '..';

//after each test clear out memory data, so we don'g get false results with next test
afterEach(cleanup);

//in CLI enter `npm run test` to initiate 

//describe function declares the component being tested
describe('About component', () => {
  //renders About test
  // First Test 
  //verify component renders
  it('renders', () => {
    render(<About />);
  });

  // Second Test
  //compare snpshots of DOM
  //A snapshot is a serialized version of the DOM node structure, enabled by Jest.
  it('matches snapshot DOM node structure', () => {
    // render About
    //use the asFragment function, which returns a snapshot of the About component
    const { asFragment } = render(<About />);
    expect(asFragment()).toMatchSnapshot();
  });
})