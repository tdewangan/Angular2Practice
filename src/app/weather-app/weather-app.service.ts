import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class WeatherAppService {
  private weatherApiUrl = 'http://api.openweathermap.org/data/2.5/weather?appid=cea52cbbef8f7d60d213d7c557b66203';
  constructor(private http: Http) { }

  getWeatherUrl(city: string) {
    return this.weatherApiUrl + '&q=' + city;
  }

  getWeather(city: string) {
    return this.http.get(this.getWeatherUrl(city))
      .map((res: Response) => res.json());
  }

}
