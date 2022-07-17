import { Component, Input } from '@angular/core';
import { SentimentData } from '../model/stock';

@Component({
  selector: 'app-sentiment-month-details',
  templateUrl: './sentiment-month-details.component.html',
  styleUrls: ['./sentiment-month-details.component.scss']
})
export class SentimentMonthDetailsComponent {

  monthName = '';

  @Input() sentimentData: SentimentData = {} as SentimentData;

  toMonthName = (monthNumber: number) => {
    const date = new Date();
    date.setMonth(monthNumber - 1);
  
    return date.toLocaleString('en-US', {
      month: 'long',
    });
  }

}
