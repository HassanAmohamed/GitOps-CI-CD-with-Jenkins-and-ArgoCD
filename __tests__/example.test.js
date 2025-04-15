// __tests__/example.test.js

// Example function to test
function add(a, b) {
    return a + b;
  }
  
  describe('Basic Math Operations', () => {
    test('adds 1 + 2 to equal 3', () => {
      expect(add(1, 2)).toBe(3);
    });
  
    test('adds 5 + 7 to equal 12', () => {
      expect(add(5, 7)).toBe(12);
    });
  
    test('adds -1 + 1 to equal 0', () => {
      expect(add(-1, 1)).toBe(0);
    });
  });