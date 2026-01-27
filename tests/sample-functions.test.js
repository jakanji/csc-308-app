const myFunctions = require('./sample-functions.js');

test('testing div --true', () =>{
    const result = myFunctions.div(9, 3);
    const target = 3;
    expect(result).toBe(target);
})

test('testing div -- by zero', () => {
    expect(myFunctions.div(10,0)).toBeUndefined;
})

test('testing div -- by negative', () => {
    expect(myFunctions.div(2, -1)).toBe(-2)
})

test('testing div -- by larger', () => {
    expect(myFunctions.div(2, 10)).toBe(0.2)
})

test('testing containNumbers -- false', () => {
    expect(myFunctions.containsNumbers("text")).toBe(false);
})

test('testing contiansNubmers -- first char number', () => {
    expect(myFunctions.containsNumbers("1text")).toBe(true);
})

test('testing contiansNubmers -- 2nd char number', () => {
    expect(myFunctions.containsNumbers("t1ext")).toBe(true);
})

test('testing contiansNubmers -- last char number', () => {
    expect(myFunctions.containsNumbers("text1")).toBe(true);
})

test('testing containsNumbers -- whitespaces', () => {
    expect(myFunctions.containsNumbers("text text")).toBe(false);
})

test('testing containsNumbers -- whitespaces w/ number', () => {
    expect(myFunctions.containsNumbers("text 1 text")).toBe(true);
})

