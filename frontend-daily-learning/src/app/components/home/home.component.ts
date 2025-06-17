import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';   
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  days = Array.from({ length: 90 }, (_, i) => i + 1);

}
