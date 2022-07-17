import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { StockService } from '../stock.service';

@Component({
  selector: 'app-stock-sentiment',
  templateUrl: './stock-sentiment.component.html',
  styleUrls: ['./stock-sentiment.component.scss']
})
export class StockSentimentComponent {

  companyName$: Observable<string>;
  stockId: string;

  constructor(private readonly stockService: StockService, readonly ars: ActivatedRoute) {
    this.stockId = ars.snapshot.paramMap.get('stockId')!;
    this.companyName$ = this.stockService.retrieveCompanyName(this.stockId);
  }

}
