import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SentimentMonthDetailsComponent } from './sentiment-month-details.component';

describe('SentimentMonthDetailsComponent', () => {
  let component: SentimentMonthDetailsComponent;
  let fixture: ComponentFixture<SentimentMonthDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SentimentMonthDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SentimentMonthDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
