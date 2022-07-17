import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BrowserStorageService {

  addStockId = (stockId: string) => window.localStorage.setItem(stockId, stockId);

  getAllStockIds = () => Object.keys(window.localStorage);

  removeStockId = (stockId: string) => window.localStorage.removeItem(stockId);

}
