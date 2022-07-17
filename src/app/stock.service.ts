import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { first, map, Observable, tap } from 'rxjs';
import { QuoteData } from './model/stock';

interface ApiQuoteData {
  c: number,
  d: number,
  dp: number,
  h: number,
  l: number,
  o: number,
  pc: number,
}

interface ApiSymbolLookup {
  count: number,
  result: {
    description: string,
    displaySymbol: string,
    symbol: string,
    type: string
  }[]
}

@Injectable({
  providedIn: 'root'
})
export class StockService {

  private readonly token = 'bu4f8kn48v6uehqi3cqg'

  constructor(private readonly http: HttpClient) { }

  retrieveQuoteData = (stockId: string): Observable<QuoteData> =>
    this.http.get<ApiQuoteData>(`https://finnhub.io/api/v1/quote?symbol=${stockId.toUpperCase()}&token=${this.token}`)
    .pipe(
      first(),
      map((result: ApiQuoteData) => ({
        currentPrice: result.c,
        change: result.d,
        percentChange: result.dp,
        highPriceOfTheDay: result.h,
        openPriceOfTheDay: result.o
      }))
    )

  retrieveCompanyName = (stockId: string): Observable<string> => 
    this.http.get<ApiSymbolLookup>(`https://finnhub.io/api/v1/search?q=${stockId}&token=${this.token}`)
    .pipe(
      first(),
      map((val: ApiSymbolLookup) => val.result[0].description)
    )
}
