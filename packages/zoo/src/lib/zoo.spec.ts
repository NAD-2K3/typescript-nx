import { zoo } from './zoo.js';

describe('zoo', () => {
  it('should work', () => {
    expect(zoo()).toMatch(/^\[zoo\] \w+ says \w+!$/);
  });
});
