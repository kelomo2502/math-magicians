import React from 'react';
import renderer from 'react-test-renderer';
import CalculatorSection from '../CalculatorSection';

it('renders when there is item', () => {
  const tree = renderer.create(<CalculatorSection />).toJSON();
  expect(tree).toMatchSnapshot();
});
