import { sampleMenuData } from './mockedData'
import { findNodeById } from './utils'

describe("findNodeById", () => {
  it("should work properly", () => {
    const actual = findNodeById(sampleMenuData, node => node.label === 'BMW')

    expect(actual?.label).toBe('BMW');
  });
});

