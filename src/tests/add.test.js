const add = (a,b) => a + b;

test('should add two numbers', () => {
    const result = add(2,5);
    expect(result).toBe(7);
});