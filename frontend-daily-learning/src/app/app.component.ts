import { Component } from '@angular/core';
import { RouterOutlet,RouterModule } from '@angular/router';
import { ExploreTopicsComponent } from './explore-topics/explore-topics.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'frontend-daily-learning';
  toggleTheme() {
    document.documentElement.classList.toggle('dark');
  }
}
