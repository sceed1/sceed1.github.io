import { Component } from '@angular/core';
import { BrowserStorageService } from '../browser-storage.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  trackedStocks: string[];

  constructor(private readonly storageService: BrowserStorageService) {
    this.trackedStocks = storageService.getAllStockIds();
  }

  addToTrackedStocks = (stockId: string) => {
    if(!this.trackedStocks.some(stock => stock === stockId)) {
      this.trackedStocks.push(stockId)
      this.storageService.addStockId(stockId)
    }
  }

  removeFromTrackedStocks = (stockId: string) => {
    this.trackedStocks = this.trackedStocks.filter(stock => stock !== stockId);
    this.storageService.removeStockId(stockId);
  }
  
}
