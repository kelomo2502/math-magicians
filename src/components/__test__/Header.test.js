import React from 'react';
import renderer from 'react-test-renderer';
import Header from '../Header';

it('renders when there is item', () => {
  const tree = renderer.create(<Header />).toJSON();
  expect(tree).toMatchSnapshot();
});
