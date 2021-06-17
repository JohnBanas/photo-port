import React from 'react';
//test methods from react library
import { render, cleanup } from '@testing-library/react';
//test from jest-dom which allows jest to test dom elements
import '@testing-library/jest-dom/extend-expect';
import ContactForm from '..';

afterEach(cleanup);

describe('Contact component', () => {
  it('renders', () => {
    render(<ContactForm />)
  });

  it('matches snapshot DOM node structure', () => {
    const { asFragment } = render(<ContactForm />);
    expect(asFragment()).toMatchSnapshot();
  });
});

describe('contact form h1 tag matches "contact me"', () => {
  const { getByTestId } = render(<ContactForm />);
  expect(getByTestId('h1contact')).toHaveTextContent('Contact Me');
  expect(getByTestId('contactbutton')).toHaveTextContent('Submit');
})