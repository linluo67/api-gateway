describe('Failing Tests', () => {
  test('this test should always fail', () => {
    // Intentional failing test
    expect(true).toBe(false);
  });

  test('another failing test', () => {
    // Another intentional failure
    expect(1 + 1).toBe(3);
  });
});