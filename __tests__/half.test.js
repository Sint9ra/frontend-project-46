// @ts-check

import test from 'node:test';
import { expect } from 'expect';
import half from '../index.js';

test('half', () => {
  expect(half(6)).toBe(3);
});
