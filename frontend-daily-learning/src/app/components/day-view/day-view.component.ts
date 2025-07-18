import { Component, inject, OnInit, ViewChild, AfterViewInit, viewChild } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TabViewComponent } from '../tab-view/tab-view.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-day-view',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule, TabViewComponent],
  templateUrl: './day-view.component.html',
  styleUrl: './day-view.component.css'
})
export class DayViewComponent implements OnInit {

  @ViewChild(TabViewComponent) tabViewComponent!: TabViewComponent;  
  private route = inject(ActivatedRoute);
  private router = inject(Router);

  dayId: string = '';
  currentDay: number = 1;
  days = Array.from({ length: 90 }, (_, i) => i + 1);
  groupedDays: any = [];
  sidebarOpen = false; 
  completedDays: number[] = [];
  showConfirm = false;
  isCompleted = false;


  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      const id = params.get('id');
      this.dayId = id ?? '';
      this.currentDay = parseInt(id ?? '1', 10);
      this.tabViewComponent.loadDayContent();
    });
    // Group days into ranges of 10
    this.groupedDays = Array.from({ length: 9 }, (_, i) => {
      const start = i * 10 + 1;
      const end = start + 9;
      return {
        rangeStart: start,
        rangeEnd: end,
        days: Array.from({ length: 10 }, (_, j) => start + j),
      };
    });
    const saved = localStorage.getItem('completedDays');
    this.completedDays = saved ? JSON.parse(saved) : [];

    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      this.dayId = id ?? '';
      this.currentDay = parseInt(id ?? '1', 10);
    });
  }

  navigateToDay(day: number): void {
    this.router.navigate(['/day', day]);
  }

  toggleDayCompletion(dayId: number) {
    const index = this.completedDays.indexOf(dayId);

    if (index === -1) {
      // Mark as completed
      this.completedDays.push(dayId);
    } else {
      // Unmark as completed
      this.completedDays.splice(index, 1);
    }

    localStorage.setItem('completedDays', JSON.stringify(this.completedDays));
    this.isCompleted = !this.isCompleted;
    this.showConfirm = false;
  } 

  openConfirmModal() {
    this.showConfirm = true;
  }
}
