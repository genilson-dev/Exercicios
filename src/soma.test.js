// import { test, expect } from "vitest";
function soma(a, b) {
    return a + b;
}

test('Soma de 5 e 10 deve ser 15', () => {
    expect(soma(5, 10)).toBe(15);
});
