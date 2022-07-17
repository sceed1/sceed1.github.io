export interface QuoteData {
    currentPrice: number,
    change: number,
    percentChange: number,
    highPriceOfTheDay: number,
    openPriceOfTheDay: number,
}

export interface SentimentData {
    month: number,
    change: number,
    mspr: number
}

export interface ApiQuoteData {
    c: number,
    d: number,
    dp: number,
    h: number,
    l: number,
    o: number,
    pc: number,
  }
  
  export interface ApiSymbolLookup {
    count: number,
    result: {
      description: string,
      displaySymbol: string,
      symbol: string,
      type: string
    }[]
  }
  
  export interface ApiSentimentData {
    data: {
      symbol: string,
      year: number,
      month: number,
      change: number,
      mspr: number
    }[]
  }
