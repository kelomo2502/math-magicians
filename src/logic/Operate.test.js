/* eslint-disable import/extensions */
import Operate from './Operate.js';

test('Testing operate  functions', () => {
  expect(Operate('1', '2', '+')).toBe('3');
  expect(Operate('3', '1', '-')).toBe('2');
  expect(Operate('3', '3', 'x')).toBe('9');
});
