class StockPorfolio{

    constructor(){
        this.shares = 0;
        this.symbols = [];
    }

    checkEmpty(){
        return this.shares === 0;
    }

    checkShares(){
        return this.shares;
    }

    purchase(symbol, share){
        stock = this.symbols.find((user)=> user["symbol"] === symbol) //look for the stock in list
        if (stock === undefined){ //if it's not in the list...
            this.symbols.push({symbol: symbol, shares: share});//add it w/ shares
        } else {//if it is... 
            stock["shares"] = stock["shares"] + share//add the shares
        } 
        this.shares = this.shares + share;
    }

    sell(symbol, share){
        stock = this.symbols.find((user)=> user["symbol"] = symbol) //find the stock in list
        if(share > stock["shares"]){//if attempting to sell too much...
            throw new Error("Not possible to sell this number of shares");//throw an error
        }else{ 
            stock["shares"] = stock["shares"] - share; //remove given shares
            this.shares - share; //remove from total shares
        }
        if (stock["shares"] < 1){ //If we have no more stock...
            this.symbols.pop(stock);//...remove it from the list
        }
    }

    checkSymbols(){
        return this.symbols;
    }

    countSymbols(){
        count = 0;
        this.symbols.forEach(() => count++); //count the number of entries in stock list
        return count;
    }

    numShares(symbol){
    stock = this.symbols.find((user)=> user["symbol"] = symbol) //find the stock in list
    if (stock === undefined){ //if it doesn't exist...
        return 0; //return zero
    }else {// if it does...
        return stock["shares"];//return the shares
    }
    }
}

exports.StockPorfolio = StockPorfolio;