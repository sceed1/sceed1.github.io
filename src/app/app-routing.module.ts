import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { StockSentimentComponent } from './stock-sentiment/stock-sentiment.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'sentiment/:stockId',
    component: StockSentimentComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
