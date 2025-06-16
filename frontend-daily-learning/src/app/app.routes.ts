import { Routes } from '@angular/router';

// Components import
import { HomeComponent } from './components/home/home.component';
import { DayViewComponent } from './components/day-view/day-view.component';   
import { NotFoundComponent } from './components/not-found/not-found.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'day/:id', component: DayViewComponent },
    { path: '**', component: NotFoundComponent }
];
