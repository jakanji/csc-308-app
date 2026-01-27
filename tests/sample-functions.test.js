const myFunctions = require('./sample-functions.js');

test('basic div test', () =>{
    const result = myFunctions.div(9, 3);
    const target = 3;
    expect(result).toBe(target);
})

test('div by zero', () => {
    expect(myFunctions.div(10,0)).toBeUndefined;
})

test('div by negative', () => {
    expect(myFunctions.div(2, -1)).toBe(-2)
})

test('div by larger', () => {
    expect(myFunctions.div(2, 10)).toBe(0.2)
})

test('containNumbers false', () => {
    expect(myFunctions.containsNumbers("text")).toBe(false);
})

test('test first char number', () => {
    expect(myFunctions.containsNumbers("1text")).toBe(true);
})

test('testing 2nd char number', () => {
    expect(myFunctions.containsNumbers("t1ext")).toBe(true);
})

test('testing 2nd char number', () => {
    expect(myFunctions.containsNumbers("text1")).toBe(true);
})