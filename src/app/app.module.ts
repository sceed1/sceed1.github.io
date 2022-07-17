import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

import { StockTrackingComponent } from './stock-tracking/stock-tracking.component'
import { MatCardModule } from '@angular/material/card'
import {MatButtonModule} from '@angular/material/button';
import { MatInputModule } from '@angular/material/input'
import { MatIconModule } from '@angular/material/icon'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StockOverviewCardComponent } from './stock-overview-card/stock-overview-card.component';
import { StockSentimentComponent } from './stock-sentiment/stock-sentiment.component'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    StockTrackingComponent,
    StockOverviewCardComponent,
    StockSentimentComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatCardModule,
    MatButtonModule,
    MatInputModule,
    MatIconModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
