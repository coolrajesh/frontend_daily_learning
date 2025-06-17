import { Component,Input } from '@angular/core';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-solution-toggle',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './solution-toggle.component.html',
  styleUrl: './solution-toggle.component.css'
})
export class SolutionToggleComponent {
  @Input() solutionPath!: string;
  show = false;
}
