import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { first, map, Observable } from 'rxjs';
import { ApiQuoteData, ApiSentimentData, ApiSymbolLookup, QuoteData, SentimentData } from './model/stock';

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

  retrieveSentimentData = (stockId: string, startDate: string, endDate: string): Observable<SentimentData[]> =>
    this.http.get<ApiSentimentData>(`https://finnhub.io/api/v1/stock/insider-sentiment?symbol=${stockId}&from=${startDate}&to=${endDate}&token=${this.token}`)
    .pipe(
      first(),
      map((result: ApiSentimentData) => {
        const sentimentData: SentimentData[] = [];
        result.data.flatMap(date => sentimentData.push({
          change: date.change, 
          mspr: date.mspr,
          month: date.month
        } as SentimentData))
        return sentimentData;
      })
    )
}
