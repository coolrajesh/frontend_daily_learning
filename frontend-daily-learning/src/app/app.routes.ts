import { Routes } from '@angular/router';

// Components import
import { HomeComponent } from './components/home/home.component';
import { DayViewComponent } from './components/day-view/day-view.component'; 
import { ExploreTopicsComponent } from './explore-topics/explore-topics.component';  
import { NotFoundComponent } from './components/not-found/not-found.component';
import { AdminpanelComponent } from './adminpanel/adminpanel.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'day/:id', component: DayViewComponent },
    { path: 'explore-topics', component: ExploreTopicsComponent },
    { path: 'admin', component: AdminpanelComponent },
    { path: '**', component: NotFoundComponent }
];
