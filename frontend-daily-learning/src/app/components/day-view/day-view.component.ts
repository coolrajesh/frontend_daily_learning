import { Component,inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TabViewComponent } from '../tab-view/tab-view.component';

@Component({
  selector: 'app-day-view',
  standalone: true,
  imports: [TabViewComponent,],
  templateUrl: './day-view.component.html',
  styleUrl: './day-view.component.css'
})
export class DayViewComponent {

  private route = inject(ActivatedRoute);
  markdownPath: string = '';
  dayId: string = '';
  solutionPath!: string;
  
  ngOnInit() {
    this.dayId = this.route.snapshot.paramMap.get('id') || '';    
  }
}
