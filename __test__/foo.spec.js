const { add, branch } = require('../src/index');

describe('branch test', () => {
  test('add 1 + 2', () => {
    expect(add(1, 2)).toEqual(3);
  })

  test('branch', () => {
    expect(branch('hello I am string')).toEqual('string');
  })
})