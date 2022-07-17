import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { SentimentData } from '../model/stock';
import { StockService } from '../stock.service';

@Component({
  selector: 'app-stock-sentiment',
  templateUrl: './stock-sentiment.component.html',
  styleUrls: ['./stock-sentiment.component.scss']
})
export class StockSentimentComponent {

  companyName$: Observable<string>;
  sentimentData$: Observable<SentimentData[]>;
  stockId: string;

  constructor(private readonly stockService: StockService, readonly ars: ActivatedRoute) {
    this.stockId = ars.snapshot.paramMap.get('stockId')!;
    this.companyName$ = this.stockService.retrieveCompanyName(this.stockId);

    const date = new Date();
    const startDate = new Date(date.getFullYear(), date.getMonth() - 3, 1).toLocaleDateString('en-CA');
    const endDate = new Date(date.getFullYear(), date.getMonth(), 0).toLocaleDateString('en-CA');

    this.sentimentData$ = this.stockService.retrieveSentimentData(this.stockId, startDate, endDate);
  }

}
