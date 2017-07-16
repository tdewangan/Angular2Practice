import { Component, OnInit } from '@angular/core';
import { WeatherAppService } from './weather-app.service';

@Component({
  selector: 'app-weather-app',
  templateUrl: './weather-app.component.html',
  styleUrls: ['./weather-app.component.css']
})
export class WeatherAppComponent implements OnInit {
  public city: string;
  public citiesWeather: Object[] = [];
  weather: Object;
  constructor(private service: WeatherAppService) { }

  ngOnInit() { }
  addCity(city: string, $event) {
    if ($event.keyCode === 13) {
      this.service.getWeather(city)
        .subscribe((weather) => {
          this.weather = weather;
          this.citiesWeather.push(this.weather);
          this.city = '';
        });
    }
  }
}
