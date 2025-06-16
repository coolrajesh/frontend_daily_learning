import { Component,Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MarkdownModule } from 'ngx-markdown';

@Component({
  selector: 'app-solution-toggle',
  standalone: true,
  imports: [MarkdownModule, CommonModule],
  templateUrl: './solution-toggle.component.html',
  styleUrl: './solution-toggle.component.css'
})
export class SolutionToggleComponent {
  @Input() solutionPath!: string;
  show = false;
}
