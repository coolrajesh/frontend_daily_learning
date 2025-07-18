import { Component,OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';   
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  days = Array.from({ length: 90 }, (_, i) => i + 1);
  completedDays: number[] = [];

  ngOnInit(): void {
      
    const saved = localStorage.getItem('completedDays');
    this.completedDays = saved ? JSON.parse(saved) : [];
  }
}
