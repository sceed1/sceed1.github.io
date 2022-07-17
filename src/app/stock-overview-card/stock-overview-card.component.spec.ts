import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StockOverviewCardComponent } from './stock-overview-card.component';

describe('StockOverviewCardComponent', () => {
  let component: StockOverviewCardComponent;
  let fixture: ComponentFixture<StockOverviewCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StockOverviewCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StockOverviewCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
