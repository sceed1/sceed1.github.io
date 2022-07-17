import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { QuoteData } from '../model/stock';
import { StockService } from '../stock.service';

@Component({
  selector: 'app-stock-overview-card',
  templateUrl: './stock-overview-card.component.html',
  styleUrls: ['./stock-overview-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StockOverviewCardComponent implements OnInit {

  @Input() stockId: string = '';
  @Output() removeTracking = new EventEmitter<string>();

  companyName$: Observable<string> = of('');
  quoteData$: Observable<QuoteData> = of({} as QuoteData);

  constructor(private readonly stockService: StockService, private readonly router: Router) { }

  ngOnInit(): void {
    if (this.stockId) {
      this.companyName$ = this.stockService.retrieveCompanyName(this.stockId);
      this.quoteData$ = this.stockService.retrieveQuoteData(this.stockId);
    }
  }

  removeStockTracking = () => this.removeTracking.emit(this.stockId);

  navigateToSentimentDetials = (stockId: string) => this.router.navigate(['sentiment', stockId])

}
