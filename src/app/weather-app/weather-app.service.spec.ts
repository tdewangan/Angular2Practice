import { TestBed, inject } from '@angular/core/testing';

import { WeatherAppService } from './weather-app.service';

describe('WeatherAppService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WeatherAppService]
    });
  });

  it('should be created', inject([WeatherAppService], (service: WeatherAppService) => {
    expect(service).toBeTruthy();
  }));
});
