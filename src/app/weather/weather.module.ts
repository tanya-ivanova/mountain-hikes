import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WeatherComponent } from './weather/weather.component';
import { WeatherForecastDayComponent } from './weather-forecast-day/weather-forecast-day.component';



@NgModule({
    declarations: [
        WeatherComponent,
        WeatherForecastDayComponent,
    ],
    imports: [
        CommonModule
    ],
    exports: [
        WeatherComponent,
        WeatherForecastDayComponent,
    ]
})
export class WeatherModule { }
