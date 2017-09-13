import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';

import { HeroService } from './hero.service';
import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FormExampleComponent } from './form-example/form-example.component';
import { WeatherAppComponent } from './weather-app/weather-app.component';
import { WeatherAppService } from './weather-app/weather-app.service';
import { TextboxComponentComponent } from './textbox-component/textbox-component.component';
import { SampleFormComponentComponent } from './sample-form-component/sample-form-component.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroDetailComponent,
    HeroesComponent,
    DashboardComponent,
    FormExampleComponent,
    WeatherAppComponent,
    TextboxComponentComponent,
    SampleFormComponentComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FlexLayoutModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule
  ],
  providers: [HeroService, WeatherAppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
