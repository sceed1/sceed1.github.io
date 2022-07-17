import { ChangeDetectionStrategy, Component, EventEmitter, Output } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-stock-tracking',
  templateUrl: './stock-tracking.component.html',
  styleUrls: ['./stock-tracking.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StockTrackingComponent {

  stockId = new FormControl('', [Validators.required ,Validators.pattern('^[A-Za-z]+$')])

  @Output() stockTracked = new EventEmitter<string>();


  trackStock = (value: string) => 
    this.stockId.valid ? this.stockTracked.emit(value.toUpperCase()) : console.log('not today son');

}
