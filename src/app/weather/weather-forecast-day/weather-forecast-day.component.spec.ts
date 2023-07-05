import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherForecastDayComponent } from './weather-forecast-day.component';

describe('WeatherForecastDayComponent', () => {
  let component: WeatherForecastDayComponent;
  let fixture: ComponentFixture<WeatherForecastDayComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WeatherForecastDayComponent]
    });
    fixture = TestBed.createComponent(WeatherForecastDayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
