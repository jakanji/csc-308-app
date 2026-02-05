const myFunctions = require('./stock-porfolio.js');


test("test 2.1 - stock porfolio", ()=> {
    const porfolio = new myFunctions.StockPorfolio();
    expect(porfolio.checkEmpty()).toBe(true);
})

test("test 2.2 - check empty after purchase", ()=> {
    const porfolio = new myFunctions.StockPorfolio();
    porfolio.purchase("TSLA");
    expect(porfolio.checkEmpty()).toBe(false);
})

test("test 2.3 - check purchase", ()=> {
    const porfolio = new myFunctions.StockPorfolio();
    porfolio.purchase("TSLA", 20);
    expect(porfolio.checkSymbols()).toStrictEqual([{symbol: "TSLA", shares: 20}])
})

test("test 2.4 - check sale ", ()=> {
    const porfolio = new myFunctions.StockPorfolio();
    porfolio.purchase("TSLA", 20);
    porfolio.sell("TSLA", 10);
    expect(porfolio.checkSymbols()).toStrictEqual([{symbol: "TSLA", shares: 10}])
})

test("test 2.5 - count ticker symbol", ()=> {  
    const porfolio = new myFunctions.StockPorfolio();
    porfolio.purchase("TSLA", 20);
    porfolio.purchase("RBLX", 10);
    expect(porfolio.countSymbols()).toBe(2)
})

test("test 2.6 - owned symbols", ()=> {  
    const porfolio = new myFunctions.StockPorfolio();
    porfolio.purchase("TSLA", 20);
    porfolio.sell("TSLA", 20);
    expect(porfolio.countSymbols()).toBe(0)
})

test("test 2.7 - num of shares for given symbol", ()=> {  
    const porfolio = new myFunctions.StockPorfolio();
    porfolio.purchase("TSLA", 20);
    expect(porfolio.numShares("TSLA")).toBe(20)
})

test("test 2.8 - Error if selling too much", ()=> {  
    const porfolio = new myFunctions.StockPorfolio();
    porfolio.purchase("TSLA", 20);
    expect(() => porfolio.sell("TSLA", 30)).toThrow("Not possible to sell this number of shares");
})

//I was successfully able to follow the test-first approach
//by going through the red-green-refactor cycle.
//At first it was hard to resist the urge to write more production code than sufficient
//to pass the failing unit test
//I think TDD is a great way of developing softwhere when you don't know where to start
//but know the requirements. 