import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HeroesComponent } from './heroes/heroes.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FormExampleComponent } from './form-example/form-example.component';
import { WeatherAppComponent } from './weather-app/weather-app.component';
import { SampleFormComponentComponent } from './sample-form-component/sample-form-component.component';
import { CriteriaExampleComponent } from './criteria-example/criteria-example.component';

const routes: Routes = [
  { path: 'heroes', component: HeroesComponent },
  { path: 'detail/:id', component: HeroDetailComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'form-example', component: FormExampleComponent },
  { path: 'weather', component: WeatherAppComponent },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'sample-form', component: SampleFormComponentComponent},
  { path: 'criteria-example', component: CriteriaExampleComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
